import type { ReactNode } from "react";

/**
 * Hand-drawn animated icons for the Approach, Services and Contact sections.
 * Lines use currentColor; motion lives in globals.css ("Animated icons").
 * Approach and Services icons loop; Contact icons only move while their link is hovered.
 */

export type ApproachKey = "direct" | "target" | "gauge" | "candidate";
export type ServiceKey = "search" | "idea" | "chat";
export type ContactKey = "mail" | "phone" | "whatsapp" | "linkedin";

export function ApproachIcon({ name }: { name: ApproachKey }) {
  return <svg className={`ai ai-${name}`} viewBox="0 0 48 48" aria-hidden="true">{APPROACH[name]}</svg>;
}

export function ServiceIcon({ name }: { name: ServiceKey }) {
  return <svg className={`ai si-${name}`} viewBox="0 0 48 48" aria-hidden="true">{SERVICE[name]}</svg>;
}

export function ContactIcon({ name }: { name: ContactKey }) {
  return <svg className={`ci ci-${name}`} viewBox="0 0 24 24" aria-hidden="true">{CONTACT[name]}</svg>;
}

const APPROACH: Record<ApproachKey, ReactNode> = {
  // A pulse travels straight from you to the recruiter: no layers in between.
  direct: (
    <>
      <path className="ai-line ai-faint" d="M15 24h18" />
      <path className="ai-pulse" pathLength={100} d="M15 24h18" />
      <circle className="ai-line ai-soft ai-node-a" cx="10" cy="24" r="5" />
      <circle className="ai-line ai-soft ai-node-b" cx="38" cy="24" r="5" />
    </>
  ),
  // An arrow flies in and hits the bullseye.
  target: (
    <>
      <circle className="ai-line ai-faint ai-ring" cx="22" cy="26" r="16" />
      <circle className="ai-line ai-ring" cx="22" cy="26" r="10" />
      <circle className="ai-fill" cx="22" cy="26" r="3.5" />
      <g className="ai-arrow">
        <path className="ai-line" d="M23 25 40 8" />
        <path className="ai-line" d="M35 7h6v6" />
      </g>
    </>
  ),
  // The needle swings up the dial.
  gauge: (
    <>
      <path className="ai-line" d="M9 33a15 15 0 1 1 30 0" />
      <path className="ai-line ai-faint" d="M13 22.5l2.6 1.5M24 17v3M35 22.5 32.4 24" />
      <path className="ai-line ai-needle" d="M24 33 24 21" />
      <circle className="ai-fill" cx="24" cy="33" r="3" />
    </>
  ),
  // A tick draws itself next to the candidate.
  candidate: (
    <>
      <circle className="ai-line ai-soft" cx="19" cy="17" r="6.5" />
      <path className="ai-line" d="M7 40c0-7.5 5.4-12 12-12s12 4.5 12 12" />
      <path className="ai-check" pathLength={100} d="M30 26l4.5 4.5L43 21" />
    </>
  ),
};

const SERVICE: Record<ServiceKey, ReactNode> = {
  // A magnifying glass searches over a candidate.
  search: (
    <>
      <circle className="ai-line ai-soft" cx="20" cy="17" r="5.5" />
      <path className="ai-line" d="M10 35c0-5.5 4.5-9 10-9s10 3.5 10 9" />
      <g className="si-lens">
        <circle className="ai-line si-glass" cx="31" cy="28" r="7.5" />
        <path className="ai-line" d="M36.5 33.5 42 39" />
      </g>
    </>
  ),
  // A light bulb switches on and glows.
  idea: (
    <>
      <path className="ai-line si-bulb" d="M24 9a11 11 0 0 0-6.6 19.8c1 .8 1.6 2 1.6 3.2V34h10v-2c0-1.2.6-2.4 1.6-3.2A11 11 0 0 0 24 9z" />
      <path className="ai-line" d="M19.5 38h9M21.5 42h5" />
      <path className="ai-line si-filament" d="M21 24l3 3 3-3" />
      <g className="si-rays">
        <path className="ai-line" d="M24 2.5v2.5M9.5 9l1.8 1.8M38.5 9l-1.8 1.8M4.5 22H7M41 22h2.5" />
      </g>
    </>
  ),
  // Someone is typing in the chat bubble.
  chat: (
    <>
      <path className="ai-line ai-soft" d="M9 11h30a3.5 3.5 0 0 1 3.5 3.5v16A3.5 3.5 0 0 1 39 34H21l-8 7v-7H9a3.5 3.5 0 0 1-3.5-3.5v-16A3.5 3.5 0 0 1 9 11z" />
      <circle className="ai-fill si-dot si-dot-1" cx="16" cy="22.5" r="2.5" />
      <circle className="ai-fill si-dot si-dot-2" cx="24" cy="22.5" r="2.5" />
      <circle className="ai-fill si-dot si-dot-3" cx="32" cy="22.5" r="2.5" />
    </>
  ),
};

const CONTACT: Record<ContactKey, ReactNode> = {
  mail: (
    <>
      <rect className="ci-line" x="2.5" y="5" width="19" height="14" rx="2" />
      <path className="ci-line ci-flap" pathLength={100} d="m3 6.5 8 5.7a1.8 1.8 0 0 0 2 0l8-5.7" />
    </>
  ),
  phone: (
    <>
      <path className="ci-line ci-handset" d="M21 16.4v2.9a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.1 4.4 1.9 1.9 0 0 1 4 2.3h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.7a1.9 1.9 0 0 1-.4 2L7.8 9.8a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.8z" />
      <path className="ci-line ci-wave ci-wave-1" d="M15 2.8a6.5 6.5 0 0 1 6.2 6.2" />
      <path className="ci-line ci-wave ci-wave-2" d="M14.6 6.3a3 3 0 0 1 3.1 3.1" />
    </>
  ),
  whatsapp: (
    <>
      <path className="ci-line" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <circle className="ci-fill ci-dot ci-dot-1" cx="8.5" cy="12" r="1.2" />
      <circle className="ci-fill ci-dot ci-dot-2" cx="12" cy="12" r="1.2" />
      <circle className="ci-fill ci-dot ci-dot-3" cx="15.5" cy="12" r="1.2" />
    </>
  ),
  linkedin: (
    <>
      <path className="ci-line" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <g className="ci-out">
        <path className="ci-line" d="M15 3h6v6" />
        <path className="ci-line" d="M10 14 21 3" />
      </g>
    </>
  ),
};
