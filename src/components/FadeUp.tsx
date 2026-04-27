import { useReducedMotion, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeUp({ children, delay = 0, className, once = true }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  // Trigger when element's bottom edge crosses into the viewport bottom
  // '0px 0px -60px 0px' = fire when 60px above the bottom edge of viewport
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px' });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isMobile || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, transform: 'translateY(28px)' }}
      animate={
        isInView
          ? { opacity: 1, transform: 'translateY(0px)' }
          : { opacity: 0, transform: 'translateY(28px)' }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
