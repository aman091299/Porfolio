"use client";

import { useReducedMotion } from "framer-motion";

import { Signature } from "@/components/ui/signature";

export default function AboutSignature() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="-ml-1 max-w-[340px] text-fg">
      <Signature
        text="Aman Singh"
        fontSize={46}
        duration={reduceMotion ? 0.01 : 0.8}
        fontUrl="/LastoriaBoldRegular.otf"
        inView
        className="h-auto w-full"
      />
    </div>
  );
}
