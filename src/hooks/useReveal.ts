import { useEffect, useRef, useState } from 'react';

type Options = {
  root?: Element | null;        // The root element for the IntersectionObserver (default: viewport)
  rootMargin?: string;          // Margin around the root to expand/shrink the observer's area
  threshold?: number | number[];// At what percentage of visibility the observer should trigger
  once?: boolean;               // If true, the element reveals only once and stays visible
};

// A custom hook to reveal an element when it enters the viewport
export function useReveal<T extends HTMLElement = HTMLElement>(
  { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.1, once = true }: Options = {}
) {
  const ref = useRef<T | null>(null);     // Reference to the target element
  const [visible, setVisible] = useState(false); // Track if the element is currently visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create the IntersectionObserver to detect visibility
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view → set as visible
            setVisible(true);

            // If reveal should only happen once, stop observing this element
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            // If multiple reveals are allowed → reset visibility when leaving viewport
            setVisible(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    // Start observing the target element
    io.observe(el);

    // Cleanup when component unmounts or options change
    return () => io.disconnect();
  }, [root, rootMargin, threshold, once]);

  // Return the ref (to attach to the target element) and the visibility state
  return { ref, visible };
}