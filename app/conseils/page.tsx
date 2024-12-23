"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdviceSection } from "@/components/conseils/advice-section";
import { StretchingSection } from "@/components/conseils/stretching-section";

const conseils = {
  etirements: {
    title: "Étirements",
    description:
      "Afin de maintenir votre dos en bonne santé, voici quelques étirements utiles mis à votre disposition. Il est conseillé de les pratiquer au moins 2 fois par semaine, entre 30 secondes et 1 minute pour chaque position.",
  },
  quotidien: {
    title: "Conseils du Quotidien",
    items: [
      {
        title: "Position assise au bureau",
        content: [
          "Gardez le dos droit et bien calé contre le dossier",
          "Les pieds doivent être à plat sur le sol",
          "L'écran doit être à hauteur des yeux",
          "Faites des pauses régulières toutes les heures",
        ],
      },
      {
        title: "Port de charges",
        content: [
          "Pliez les genoux pour soulever une charge",
          "Gardez le dos droit",
          "Portez la charge près du corps",
          "Évitez les torsions du tronc",
        ],
      },
    ],
  },
  sommeil: {
    title: "Sommeil",
    items: [
      {
        title: "Position de sommeil",
        content: [
          "Privilégiez un matelas ferme mais confortable",
          "Utilisez un oreiller adapté à votre morphologie",
          "Évitez de dormir sur le ventre",
          "Préférez la position sur le côté ou sur le dos",
        ],
      },
      {
        title: "Routine du coucher",
        content: [
          "Maintenez des horaires de sommeil réguliers",
          "Évitez les écrans avant le coucher",
          "Pratiquez des étirements doux",
          "Aérez votre chambre quotidiennement",
        ],
      },
    ],
  },
  sport: {
    title: "Activité Physique",
    items: [
      {
        title: "Échauffement",
        content: [
          "Échauffez-vous progressivement",
          "Commencez par des mouvements doux",
          "Augmentez progressivement l'intensité",
          "Privilégiez les étirements dynamiques",
        ],
      },
      {
        title: "Récupération",
        content: [
          "Hydratez-vous régulièrement",
          "Étirez-vous après l'effort",
          "Prenez le temps de récupérer",
          "Écoutez votre corps",
        ],
      },
    ],
  },
  prevention: {
    title: "Prévention",
    items: [
      {
        title: "Gestes quotidiens",
        content: [
          "Évitez les mouvements brusques",
          "Adoptez une bonne posture",
          "Faites des pauses régulières",
          "Pratiquez une activité physique régulière",
        ],
      },
      {
        title: "Hygiène de vie",
        content: [
          "Maintenez un poids santé",
          "Buvez suffisamment d'eau",
          "Limitez le stress",
          "Adoptez une alimentation équilibrée",
        ],
      },
    ],
  },
};

export default function Conseils() {
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
          Conseils Pratiques
        </h1>
        <p className="text-gray-400">
          Des recommandations pour prendre soin de votre santé au quotidien
        </p>
      </motion.div>

      <Tabs defaultValue="etirements" className="w-full">
        <TabsList className="w-full h-full flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(conseils).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key} className="px-4 py-2">
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="etirements">
          <StretchingSection description={conseils.etirements.description} />
        </TabsContent>

        {Object.entries(conseils)
          .filter(([key]) => key !== "etirements")
          .map(([key, value]) => (
            <TabsContent key={key} value={key}>
              {"items" in value ? (
                <AdviceSection title={value.title} items={value.items} />
              ) : null}
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
}
