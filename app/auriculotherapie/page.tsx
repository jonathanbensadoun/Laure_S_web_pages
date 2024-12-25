"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IntroSection } from "@/components/auriculotherapie/intro-section";
import { BenefitsSection } from "@/components/auriculotherapie/benefits-section";
import { ProcessSection } from "@/components/auriculotherapie/process-section";

export default function Auriculotherapie() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24" ref={ref}>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Auriculothérapie
      </motion.h1>
      <IntroSection />
      <BenefitsSection />
      <ProcessSection />
    </div>
  );
}
