"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type HeaderPage = "home" | "about" | "privacy" | "candidates";
type NavKey = "services" | "approach" | "expertise" | "candidates" | "about";

const observedSections: Array<{ id: string; nav: NavKey }> = [
  { id: "services", nav: "services" },
  { id: "approach", nav: "approach" },
  { id: "expertise", nav: "expertise" },
];

export function SiteHeader({ page }: { page: HeaderPage }) {
  const [scrollSection, setScrollSection] = useState<NavKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (page !== "home") return;

    const visibleSections = new Map<string, NavKey>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = observedSections.find(({ id }) => id === entry.target.id);
          if (!match) return;
          if (entry.isIntersecting) visibleSections.set(match.id, match.nav);
          else visibleSections.delete(match.id);
        });

        const active = observedSections.find(({ id }) => visibleSections.has(id));
        setScrollSection(active ? active.nav : null);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: 0 },
    );

    observedSections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [page]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("mobile-nav-open", mobileOpen);
    return () => document.documentElement.classList.remove("mobile-nav-open");
  }, [mobileOpen]);

  const activeItem: NavKey | null =
    page === "about" ? "about" : page === "candidates" ? "candidates" : scrollSection;
  const homePrefix = page === "home" ? "" : "/";
  const contactHref = page === "home" ? "#contact" : "/#contact";

  const items: Array<{ key: NavKey; label: string; href: string }> = [
    { key: "services", label: "Services", href: `${homePrefix}#services` },
    { key: "approach", label: "Approach", href: `${homePrefix}#approach` },
    { key: "expertise", label: "Expertise", href: `${homePrefix}#expertise` },
    { key: "candidates", label: "Candidates", href: "/candidates" },
    { key: "about", label: "About", href: "/about" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`site-header${mobileOpen ? " mobile-menu-open" : ""}`}>
        <Link className="brand brand-lockup" href="/" aria-label="Craftsphere Talent home" onClick={closeMobileMenu}>
          <Image
            className="brand-lockup-image"
            src="/craftsphere-talent-lockup.png"
            alt="Craftsphere Talent | IT Recruitment"
            width={1541}
            height={250}
            priority
            unoptimized
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {items.map(({ key, label, href }) => (
            <a
              className={activeItem === key ? "nav-active" : undefined}
              href={href}
              data-label={label}
              aria-current={
                activeItem !== key
                  ? undefined
                  : key === "about" || key === "candidates"
                    ? "page"
                    : "location"
              }
              key={key}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={contactHref} data-analytics-event="contact_navigation" data-contact-method="contact_section" data-contact-placement={`${page}_header`}>
          Contact
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</span>
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-navigation${mobileOpen ? " is-open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!mobileOpen}
        >
          {items.map(({ key, label, href }, index) => (
            <a
              className={activeItem === key ? "nav-active" : undefined}
              href={href}
              key={key}
              onClick={closeMobileMenu}
              style={{ "--menu-delay": `${70 + index * 55}ms` } as CSSProperties}
            >
              {label}
            </a>
          ))}
          <a
            className="mobile-contact"
            href={contactHref}
            onClick={closeMobileMenu}
            data-analytics-event="contact_navigation"
            data-contact-method="contact_section"
            data-contact-placement={`${page}_mobile_menu`}
          >
            Contact
          </a>
        </nav>
      </header>
      <button
        className={`mobile-menu-backdrop${mobileOpen ? " is-open" : ""}`}
        type="button"
        aria-label="Close navigation"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={closeMobileMenu}
      />
    </>
  );
}
