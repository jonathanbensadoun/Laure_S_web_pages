"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Cigarette, Coffee, Moon, Pill } from "lucide-react";

const benefits = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Stress et Anxiété",
    description: "Aide à réduire le stress, l'anxiété et améliore l'humeur",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Douleurs",
    description: "Soulagement des douleurs chroniques et aiguës",
  },
  {
    icon: <Moon className="w-8 h-8 text-primary" />,
    title: "Troubles du Sommeil",
    description:
      "Amélioration de la qualité du sommeil et traitement de l'insomnie",
  },
  {
    icon: <Cigarette className="w-8 h-8 text-primary" />,
    title: "Addictions",
    description: "Aide au sevrage tabagique et autres dépendances",
  },
  {
    icon: <Coffee className="w-8 h-8 text-primary" />,
    title: "Digestion",
    description: "Régulation des troubles digestifs et de l'appétit",
  },
  {
    icon: <Pill className="w-8 h-8 text-primary" />,
    title: "Autres Indications",
    description: "Migraines, acouphènes, vertiges, troubles hormonaux",
  },
];

export function BenefitsSection() {
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
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Bienfaits et Indications
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
