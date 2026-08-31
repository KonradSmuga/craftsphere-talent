"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  role: string;
  company: string;
};

export function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`shell testimonials-static-grid${visible ? " is-visible" : ""}`}>
      {testimonials.map((testimonial, index) => (
        <article
          className="testimonial-static-card"
          key={`${testimonial.role}-${testimonial.company}`}
          style={{ "--testimonial-delay": `${index * 110}ms` } as CSSProperties}
        >
          <div className="testimonial-card-head">
            <Quote size={22} aria-hidden="true" />
            <span>0{index + 1}</span>
          </div>
          <blockquote>{testimonial.quote}</blockquote>
          <footer>
            <strong>{testimonial.role}</strong>
            <span>{testimonial.company}</span>
          </footer>
        </article>
      ))}
    </div>
  );
}
