"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Stethoscope, Users, Brain } from "lucide-react";

const consultationTypes = [
  {
    id: "osteopathie",
    title: "Consultation Ostéopathie",
    duration: "50 min",
    price: "60€",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "pilates-individuel",
    title: "Coaching Pilates Individuel",
    duration: "50 min",
    price: "60€",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    id: "pilates-groupe",
    title: "Cours Pilates Collectif",
    duration: "55 min",
    price: "18€",
    icon: <Users className="w-6 h-6" />,
  },
];

export function ConsultationTypes() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Type de consultation</h2>
      <RadioGroup defaultValue="osteopathie">
        <div className="space-y-4">
          {consultationTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={type.id} id={type.id} />
                <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">{type.icon}</div>
                      <div>
                        <p className="font-medium">{type.title}</p>
                        <p className="text-sm text-gray-500">{type.duration}</p>
                      </div>
                    </div>
                    <span className="text-primary font-semibold">
                      {type.price}
                    </span>
                  </div>
                </Label>
              </div>
            </motion.div>
          ))}
        </div>
      </RadioGroup>
    </Card>
  );
}
