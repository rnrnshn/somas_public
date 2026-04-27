import type { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeUp({ children, className }: FadeUpProps) {
  return <div className={className}>{children}</div>;
}
