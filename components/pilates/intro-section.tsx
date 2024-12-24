"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

const benefits = [
  "Une bonne posture",
  "Un dos et une ceinture abdominale musclés",
  "Contrôle de son corps",
  "Souplesse",
  "Concentration",
  "Coordination",
  "Stabilité",
  "Respiration",
  "Détente",
];

export function IntroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <Card className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Qu&apos;est-ce que le Pilates ?
          </h2>
          <p className="text-gray-600">
            C&apos;est une gymnastique douce qui muscle le centre du corps.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Quels en sont les bienfaits ?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-black">•</span>
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}
