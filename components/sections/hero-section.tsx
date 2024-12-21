"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/header2.png')] bg-cover bg-center"
      />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Retrouvez votre équilibre naturel
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0"
        >
          Laure Sautier, ostéopathe D.O., vous accompagne vers un mieux-être
          durable grâce à une approche holistique et personnalisée.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform text-base sm:text-lg"
          >
            <Link href="/reservation">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto hover:scale-105 transition-transform text-base sm:text-lg"
          >
            <Link href="/tarifs">Voir les tarifs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
