"use client";

import { CategoryImage } from "@/components/faq/category-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = {
  adulte: {
    title: "Adultes",
    items: [
      {
        q: "Pour quelles douleurs musculaires et articulaires ?",
        a: "• Tendinites et contractures\n• Douleurs d'arthrose\n• Douleurs articulaires (épaule, coude, poignet, hanche, genou)\n• Névralgies (sciatique, cruralgie)",
      },
      {
        q: "Pour quels types de douleurs du dos ?",
        a: "• Cervicalgies et torticolis\n• Hernies discales\n• Lombalgies et dorsalgies\n• Douleurs du coccyx",
      },
      {
        q: "Pour quels troubles généraux ?",
        a: "• Maux de tête et migraines\n• Troubles digestifs\n• Stress et nervosité\n• Troubles du sommeil",
      },
      {
        q: "Dans quels autres cas consulter ?",
        a: "• Amélioration de la posture\n• Port de semelles orthopédiques\n• Difficultés respiratoires\n• Troubles ORL\n• Suivi post-opératoire",
      },
    ],
  },
  perinatalite: {
    title: "Périnatalité",
    items: [
      {
        q: "Quand consulter pendant la grossesse ?",
        a: "• Douleurs du dos (lombalgies, douleurs du pubis)\n• Névralgies\n• Douleurs du bas ventre\n• Troubles digestifs\n• Préparation à l'accouchement",
      },
      {
        q: "Pour quels motifs consulter après l'accouchement ?",
        a: "• Récupération post-accouchement\n• Rééquilibrage du corps\n• Travail sur la cicatrice de césarienne\n• Fatigue post-natale\n• Baby blues",
      },
    ],
  },
  bebe: {
    title: "Bébés",
    items: [
      {
        q: "Quand consulter pour son nourrisson ?",
        a: "• Coliques et pleurs\n• Régurgitations\n• Plagiocéphalie (crâne plat)\n• Difficultés de sommeil\n• Problèmes de succion",
      },
      {
        q: "Pour quels troubles physiques ?",
        a: "• Torticolis congénital\n• Pied bot\n• Luxation congénitale de hanche\n• Otites récurrentes",
      },
    ],
  },
  sportif: {
    title: "Sportifs",
    items: [
      {
        q: "Pour quelles blessures sportives ?",
        a: "• Tendinites et contractures\n• Entorses et déchirures\n• Douleurs articulaires\n• Récupération post-traumatique",
      },
      {
        q: "Pour quelle préparation sportive ?",
        a: "• Amélioration des performances\n• Capacité respiratoire\n• Préparation aux compétitions\n• Récupération physique",
      },
    ],
  },
  senior: {
    title: "Seniors",
    items: [
      {
        q: "Pour quels problèmes de mobilité ?",
        a: "• Amélioration de la marche\n• Souplesse articulaire\n• Arthrose et arthrite\n• Équilibre et posture",
      },
      {
        q: "Pour quels autres motifs ?",
        a: "• Douleurs chroniques\n• Troubles digestifs\n• Difficultés respiratoires\n• Maintien de l'autonomie",
      },
    ],
  },
  enfant: {
    title: "Enfants & Ados",
    items: [
      {
        q: "Pour quels problèmes de croissance ?",
        a: "• Scoliose et posture\n• Pathologies de croissance\n• Appareillage dentaire\n• Semelles orthopédiques",
      },
      {
        q: "Pour quels autres troubles ?",
        a: "• Troubles respiratoires et ORL\n• Troubles oculaires\n• Douleurs de croissance\n• Anxiété et troubles du sommeil",
      },
    ],
  },
};

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        Pourquoi consulter ?
      </h1>
      <Tabs defaultValue="adulte" className="w-full">
        <TabsList className="w-full flex flex-wrap justify-center h-full gap-2 mb-8">
          {Object.entries(categories).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key} className="px-4 py-2">
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categories).map(([key, { title, items }]) => (
          <TabsContent key={key} value={key}>
            <Card className="p-6 flex flex-col justify-center items-center">
              <CategoryImage category={key} />
              <h2 className="text-2xl font-semibold mb-6">{title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="whitespace-pre-line">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
