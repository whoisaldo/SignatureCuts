"use client";

import { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  type Variants,
} from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function AnimateIn({
  children,
  className,
  stagger = false,
  delay = 0,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        variants={stagger ? staggerContainer : sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        style={delay ? { transitionDelay: `${delay}s` } : undefined}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function AnimateItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div variants={sectionVariants} className={className}>
        {children}
      </m.div>
    </LazyMotion>
  );
}
