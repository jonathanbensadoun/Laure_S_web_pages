"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PerinealSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Pilates du périnée féminin – séance individuelle
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Contenu</h3>
            <p className="text-gray-600">
              Les différentes contractions du périnée et leur application
              concrète dans les postures et mouvements du quotidien.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Objectif</h3>
            <p className="text-gray-600">
              Soigner ou prévenir les fuites urinaires, descente d&apos;organes…
              Il n&apos;est jamais trop tard !
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Public</h3>
            <p className="text-gray-600">
              Toutes les femmes sont concernées et tout particulièrement si
              accouchement, prise de poids, toux chronique, constipation, port
              de charge ou posture assise prolongée quotidienne.
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <strong>Tenue nécessaire :</strong>{" "}
              <span className="text-gray-600">leggin ou shorty</span>
            </p>
            <p>
              <strong>Support :</strong>{" "}
              <span className="text-gray-600">
                fiche récapitulative mémoire en fin de séance
              </span>
            </p>
            <p>
              <strong>Tarif :</strong>{" "}
              <span className="text-gray-600">
                60 euros les 50 min (pas de prise en charge sécurité sociale)
              </span>
            </p>
            <p className="text-gray-600">
              Compter une ou deux séances maximum. La séance peut se faire en
              première intention ou en complément de rééducation sage-femme.
            </p>
          </div>

          <div>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/reservation">Réserver une séance</Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
