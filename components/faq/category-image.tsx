"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const categoryImages = {
  adulte: "/adulte.png",
  perinatalite: "/perinatalite.png",
  bebe: "/bebe.png",
  sportif: "/sportif.png",
  senior: "/senior.png",
  enfant: "/enfant.png",
};

export function CategoryImage({ category }: { category: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Card className="overflow-hidden">
        <div className="relative h-full sm:h-full">
          <Image
            src={categoryImages[category as keyof typeof categoryImages]}
            alt={`Illustration ${category}`}
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </Card>
    </motion.div>
  );
}
