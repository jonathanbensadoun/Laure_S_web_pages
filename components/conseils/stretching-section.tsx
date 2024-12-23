"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const stretches = [
  {
    title: "Étirement thoracique",
    description:
      "Ouvrir et bomber la cage thoracique (creuser les omoplates) et sentir l'étirement dans les muscles avant du thorax. Vous pouvez effectuer l'étirement debout si cela vous est plus simple.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Étirement du haut du dos",
    description:
      "Tirer les doigts vers l'avant du tapis, chercher l'étirement dans le haut du dos et les épaules. Les fesses se rapprochent des talons en arrière. Si votre souplesse vous le permet, vous pouvez vous asseoir sur vos talons pour augmenter l'étirement.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Relâchement lombaire",
    description:
      "Rapprocher les genoux progressivement de son thorax et ressentir le relâchement dans le bas du dos.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Étirement de l'aine",
    description:
      "Maintenir son dos perpendiculaire au sol et ressentir l'étirement dans l'aine de la jambe arrière. Puis, changer de côté.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Étirement cervical",
    description:
      "Pencher délicatement et progressivement votre tête vers votre épaule en vous aidant de votre main du même côté. A chaque expiration, vous pouvez gagner en amplitude. Idem de l'autre côté. Si la position en tailleur n'est pas confortable, le mouvement est possible assis sur une chaise ou debout.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Étirement des triceps",
    description:
      "Saisir le coude avec sa main opposée afin qu'il soit le plus proche de la verticale possible. Garder les deux épaules basses et le dos droit. Puis effectuer la même chose de l'autre côté.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
];

interface StretchingSectionProps {
  description: string;
}

export function StretchingSection({ description }: StretchingSectionProps) {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 text-center mb-8">{description}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stretches.map((stretch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <Image
                  src={stretch.image}
                  alt={stretch.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{stretch.title}</h3>
                <p className="text-gray-600 text-sm">{stretch.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
