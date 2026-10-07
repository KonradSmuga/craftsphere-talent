"use client";

import { useEffect, useState } from "react";
import { onCLS, onINP, onLCP, type Metric } from "web-vitals";

const CONSENT_KEY = "craftsphere-analytics-consent";
type ConsentChoice = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    craftsphereAnalyticsReady?: boolean;
    craftsphereAnalyticsEnabled?: boolean;
  }
}

function setGaDisabled(measurementId: string, disabled: boolean) {
  const analyticsWindow = window as Window & Record<string, unknown>;
  analyticsWindow[`ga-disable-${measurementId}`] = disabled;
}

function initialiseAnalytics(measurementId: string) {
  window.craftsphereAnalyticsEnabled = true;
  setGaDisabled(measurementId, false);

  if (window.craftsphereAnalyticsReady) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.craftsphereAnalyticsReady = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);

  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const reportWebVital = ({ name, delta, value, id, rating, navigationType }: Metric) => {
    if (!window.craftsphereAnalyticsEnabled) return;
    window.gtag?.("event", "web_vital", {
      send_to: measurementId,
      metric_name: name,
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
      metric_rating: rating,
      navigation_type: navigationType,
      value: Math.round(name === "CLS" ? delta * 1000 : delta),
      non_interaction: true,
    });
  };

  onCLS(reportWebVital);
  onINP(reportWebVital);
  onLCP(reportWebVital);

  document.addEventListener("click", (event) => {
    if (!window.craftsphereAnalyticsEnabled) return;
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>("a[data-analytics-event]");
    if (!link) return;

    window.gtag?.("event", link.dataset.analyticsEvent ?? "contact_click", {
      send_to: measurementId,
      contact_method: link.dataset.contactMethod ?? "unknown",
      contact_placement: link.dataset.contactPlacement ?? "unknown",
      link_url: link.href,
      link_text: link.textContent?.trim().replace(/\s+/g, " ").slice(0, 100),
      transport_type: "beacon",
    });
  });
}

function disableAnalytics(measurementId: string) {
  window.craftsphereAnalyticsEnabled = false;
  setGaDisabled(measurementId, true);
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
}

export function SiteAnalytics({ measurementId }: { measurementId: string }) {
  const [consent, setConsent] = useState<ConsentChoice | "loading" | "unset">("loading");

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    queueMicrotask(() => setConsent(savedChoice ?? "unset"));

    if (savedChoice === "accepted") initialiseAnalytics(measurementId);
    if (savedChoice === "declined") disableAnalytics(measurementId);

    const openPreferences = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest("[data-analytics-settings]")) return;
      setConsent("unset");
      window.setTimeout(() => document.querySelector<HTMLElement>(".analytics-consent")?.focus(), 0);
    };

    document.addEventListener("click", openPreferences);
    return () => document.removeEventListener("click", openPreferences);
  }, [measurementId]);

  const choose = (choice: ConsentChoice) => {
    window.localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
    if (choice === "accepted") initialiseAnalytics(measurementId);
    if (choice === "declined") disableAnalytics(measurementId);
  };

  if (consent !== "unset") return null;

  return (
    <aside className="analytics-consent" role="dialog" tabIndex={-1} aria-labelledby="analytics-title" aria-describedby="analytics-copy">
      <div className="analytics-consent-copy">
        <span>Optional analytics</span>
        <strong id="analytics-title">Help improve this website</strong>
        <p id="analytics-copy">
          Analytics show which contact options are useful and how quickly the website loads.
        </p>
      </div>
      <div className="analytics-consent-actions">
        <a className="consent-privacy" href="/privacy">Privacy</a>
        <button type="button" className="consent-decline" onClick={() => choose("declined")}>No thanks</button>
        <button type="button" className="consent-accept" onClick={() => choose("accepted")}>Allow analytics</button>
      </div>
    </aside>
  );
}
