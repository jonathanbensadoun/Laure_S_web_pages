"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IntroSection } from "@/components/pilates/intro-section";
import { PerinealSection } from "@/components/pilates/perineal-section";
import GroupClassSection from "@/components/pilates/group-class-section";
import Image from "next/image";

export default function Pilates() {
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
        <p>Pilates</p>
        <Image
          src="/pilates.png"
          alt="Pilates"
          width={150}
          height={150}
          className="mx-auto w-1/2 rounded-lg my-4"
          priority
        />
      </motion.h1>
      <IntroSection />
      <PerinealSection />
      <GroupClassSection />
    </div>
  );
}
