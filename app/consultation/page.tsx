"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Stethoscope,
  FileText,
  Shirt,
  ClipboardCheck,
  HandMetal,
} from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Préparation",
    content: [
      "Munissez-vous de vos derniers examens complémentaires (imagerie, bilan sanguin..)",
      "Carnet de santé pour les bébés et les enfants",
      "Pas besoin de consultation médicale préalable",
    ],
  },
  {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "Tenue adaptée",
    content: [
      "Sous-vêtements adaptés",
      "Débardeur, leggin, jogging ou short souple",
      "Possibilité de rester habillé(e) sur demande",
    ],
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    title: "Anamnèse",
    content: [
      "Discussion sur votre motif de consultation",
      "Antécédents médicaux",
      "Traumatismes",
      "Mode de vie",
    ],
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Diagnostic clinique",
    content: [
      "Évaluation de la situation",
      "Orientation vers un autre professionnel de santé si nécessaire",
    ],
  },
  {
    icon: <HandMetal className="w-8 h-8 text-primary" />,
    title: "Traitement",
    content: [
      "Techniques musculo-squelettiques",
      "Techniques viscérales",
      "Techniques crâniennes",
      "Techniques tissulaires fasciales",
      "Adaptation des techniques selon vos préférences",
    ],
  },
];

export default function Consultation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24" ref={ref}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Déroulement de la Consultation
        </h1>
        <p className="text-gray-600">
          Découvrez les étapes de votre séance d&apos;ostéopathie
        </p>
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-600"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
