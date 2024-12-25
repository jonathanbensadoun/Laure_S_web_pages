"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClipboardList, Search, Stethoscope, Clock } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: "Consultation initiale",
    description: "Bilan complet de votre état de santé et de vos besoins",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Diagnostic auriculaire",
    description: "Identification des points réflexes à traiter",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Traitement",
    description: "Stimulation précise des points identifiés",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Suivi",
    description: "Évaluation des résultats et ajustements si nécessaire",
  },
];

export function ProcessSection() {
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
    >
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Déroulement d&apos;une Séance
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              {step.icon}
              <div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center">
          <p className="text-gray-600">
            Durée de la séance : 45-60 minutes
            <br />
            Tarif : 60€
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/reservation">Prendre rendez-vous</Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
