"use client";

import { Card } from "@/components/ui/card";
import { Baby, Brain, Spline, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          Mes Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: (
                <Activity className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              ),
              title: "Ostéopathie Générale",
              description:
                "Traitement des douleurs et dysfonctionnements pour tous les âges.",
            },
            {
              icon: (
                <Baby className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              ),
              title: "Ostéopathie Crânienne",
              description:
                "Approche douce pour les maux de tête, vertiges et stress.",
            },
            {
              icon: (
                <Spline className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              ),
              title: "Pilates Thérapeutique",
              description: "Renforcement et rééducation posturale adaptés.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
