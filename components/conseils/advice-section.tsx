"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface AdviceItem {
  title: string;
  content: string[];
}

interface AdviceSectionProps {
  title: string;
  items: AdviceItem[];
}

export function AdviceSection({ title, items }: AdviceSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {items.map((item, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
          <ul className="space-y-3">
            {item.content.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </motion.div>
  );
}
