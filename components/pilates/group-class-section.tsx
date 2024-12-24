"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GroupClassSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Cours collectif – 5 personnes
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Contenu</h3>
            <p className="text-gray-600">
              Exercices de Pilates puis étirements (stretching postural, yoga..)
              en fin de cours.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Objectif</h3>
            <p className="text-gray-600">
              Ce cours est un lien entre le sport et le soin. L&apos;effet petit
              groupe permet un repositionnement individuel si une mauvaise
              position est prise. Ainsi, on éloigne les risques de blessure.
              Chaque exercice de Pilates est précautionneusement choisi
              s&apos;il est sécuritaire pour votre corps d&apos;après mon
              expertise d&apos;ostéopathe.
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <strong>Matériel :</strong>{" "}
              <span className="text-gray-600">
                fourni (élastique, ballon paille, magic circle..)
              </span>
            </p>
            <p>
              <strong>Niveau :</strong>{" "}
              <span className="text-gray-600">
                accessible à tous. Différentes options sont proposées afin
                d&apos;ajuster vous-même votre entrainement.
              </span>
            </p>
            <p>
              <strong>Tarif :</strong>{" "}
              <span className="text-gray-600">18 euros les 55 min</span>
            </p>
          </div>

          <div>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/reservation">
                Voir les horaires et s&apos;inscrire
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
