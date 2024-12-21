"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              À Propos
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 text-justify">
              Je suis ostéopathe D.0. diplômée de l’Ecole Supérieure
              d’Ostéopathie de Paris (2011). Ma formation en six ans a été
              dispensée par un établissement agréé par l’Etat. Depuis, j’exerce
              dans mon cabinet au Pré Saint Gervais, y soignant des patients de
              tout âge : adulte, sportif, senior, enfant, nourrisson, femme
              enceinte. J’ai approfondi ma formation en ostéopathie tissulaire
              (séminaire Pierre Tricot), traitement doux adapté aux nourrissons
              et aux seniors. Cette approche permet de prendre en charge les
              patients en cas de douleurs intenses ou d’articulations usées
              (arthrose, discopathies..).
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Ma spécialisation en maternité :
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 text-justify">
              Au cours de mon cursus clinique, j’ai particulièrement aimé
              soigner les patientes pendant leur grossesse et les nourrissons.
              C’était donc le thème de mon mémoire de fin d’études et, à cette
              occasion, j’ai créé le service d’ostéopathie à l’hôpital
              Notre-Dame de Bon Secours à Paris : j’en étais l’unique ostéopathe
              et je suivais les patientes tout au long de leur grossesse. J’ai
              également soigné les femmes enceintes et les nourrissons à
              l’hôpital de Pontoise et à la clinique Vauban à Livry Gargan.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Ma spécialisation en sport :
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 text-justify">
              J’ai dans un premier temps travaillé dans le milieu sportif lors
              de stages (athlétisme, salle fitness, hand ball..) ainsi que dans
              le monde artistique de la danse et du cirque (tels que le plus
              grand cabaret du monde, le cirque Fratellini). Puis, je me suis
              faite former au Stretching Postural et au Pilates (certification
              Institut des Métiers de la Forme) pour proposer aux patients les
              étirements ou exercices de renforcement adaptés à leur sport,
              loisirs, et travail. Le Pilates est une gymnastique conçue pour
              soigner sa posture, s’assouplir, renforcer musculairement le
              centre de son corps et ainsi éloigner les potentielles douleurs.
              Je dispense des cours en petits groupes aux patients au cabinet
              (cf Pilates).
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Rééducation périnéale féminine :
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 text-justify">
              J’ai suivi la formation de Bernadette De Gasquet à son institut,
              médecin de référence dans le monde de la périnatalité. Je propose
              depuis un cours de Pilates spécialisé dans la rééducation du
              périnée de la femme (cf Pilates).
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Le cabinet :
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Il est au normes PMR, en centre ville, dans des locaux neufs.
            </p>
            <Button
              asChild
              className="w-full sm:w-auto hover:scale-105 transition-transform"
            >
              <Link href="/about">En savoir plus</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[431px] sm:h-[606px]"
          >
            <div className="absolute inset-0 bg-[url('/L_auto_portrait.png')] bg-cover bg-center rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
