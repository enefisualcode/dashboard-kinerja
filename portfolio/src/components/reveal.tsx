"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * A restrained scroll reveal: fade plus a 14px rise, once, then never again.
 *
 * The reveal state is written straight to the DOM node rather than held in
 * React state. That is deliberate — the animation is a browser concern with no
 * bearing on what renders, so driving it through state would only cause extra
 * renders. It also means the element starts *visible*: without JavaScript, or
 * before hydration, the content is simply there.
 *
 * `prefers-reduced-motion` is handled twice over: the stylesheet neutralises the
 * transition, and the observer is never attached in the first place.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Already on screen at mount: leave it alone rather than flashing it out
    // and back in.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    node.dataset.reveal = "pending";
    if (delay) node.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.reveal = "shown";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
