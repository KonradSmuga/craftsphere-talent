import { ArrowUpRight } from "lucide-react";
import { MotionToggle } from "./motion-toggle";

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-inner">
        <a className="brand" href="/" aria-label="Craftsphere Talent home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>Craftsphere</span><strong>Talent</strong>
        </a>
        <div className="footer-center">
          <p>Specialist technology recruitment across EMEA, the US and LATAM.</p>
          <nav aria-label="Privacy and accessibility controls">
            <a href="/privacy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <button type="button" data-analytics-settings>Analytics settings</button>
            <span aria-hidden="true">·</span>
            <MotionToggle />
          </nav>
        </div>
        <a href="#top" className="back-top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
