"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function IntroSection() {
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
      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Qu&apos;est-ce que l&apos;auriculothérapie ?
            </h2>
            <p className="text-gray-600 mb-4">
              L&apos;auriculothérapie est une technique de médecine alternative
              basée sur la stimulation de points spécifiques de l&apos;oreille.
              Cette approche considère l&apos;oreille comme une microsystème
              reflétant l&apos;ensemble du corps humain.
            </p>
            <p className="text-gray-600">
              Développée par le Dr Paul Nogier dans les années 1950, cette
              technique est reconnue par l&apos;Organisation Mondiale de la
              Santé comme une approche thérapeutique complémentaire.
            </p>
          </div>
          <div className="relative h-[200px] md:h-full min-h-[200px]">
            <Image
              src="/auriculothérapie.png"
              alt="Auriculothérapie"
              width={1024}
              height={1024}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
