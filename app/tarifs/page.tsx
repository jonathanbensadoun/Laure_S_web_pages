"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Euro, CreditCard, Building2 } from "lucide-react";
import Image from "next/image";

export default function Tarifs() {
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
          Tarifs et Informations Pratiques
        </h1>
        <p className="text-gray-600">
          Tout ce que vous devez savoir pour votre consultation
        </p>
        <div className="flex justify-center">
          <Image
            src="/cabinet.png"
            alt="Laure Sautier"
            width={300}
            height={300}
            className="rounded-lg w-1/2 my-8"
          />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">
                  Durée de la consultation
                </h2>
                <p className="text-gray-600">45 – 50 minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Euro className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Tarif</h2>
                <p className="text-gray-600">60 euros</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-center space-x-4 mb-6">
              <CreditCard className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Modes de paiement</h2>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>
                    <span className="text-green-500 text-2xl">✓</span> Chèques
                  </li>
                  <li>
                    <span className="text-green-500 text-2xl">✓</span> Espèces
                  </li>
                  <li className="text-gray-400">
                    <span className="text-red-500 text-2xl">✗</span> CB non
                    acceptée
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:col-span-2"
        >
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Building2 className="w-8 h-8 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4">Remboursement</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    L&apos;ostéopathie n&apos;est pas remboursée par la sécurité
                    sociale.
                  </p>
                  <p>
                    Le remboursement s&apos;effectue par votre mutuelle
                    complémentaire selon votre contrat.
                  </p>
                  <div className="mt-6">
                    <Button asChild>
                      <a
                        href="https://www.osteopathe-syndicat.fr/mutuelle-osteopathie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Consulter les remboursements
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <Button
          asChild
          size="lg"
          className="hover:scale-105 transition-transform"
        >
          <Link href="/reservation">Prendre rendez-vous</Link>
        </Button>
      </motion.div>
    </div>
  );
}
