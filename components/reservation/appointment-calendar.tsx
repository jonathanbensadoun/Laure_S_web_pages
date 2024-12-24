"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { addDays, format } from "date-fns";
import { fr } from "date-fns/locale";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>();

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Date et horaire</h2>
      <div className="space-y-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={fr}
          disabled={{ before: new Date() }}
          className="rounded-md border"
        />

        {date && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-medium mb-3">
              Horaires disponibles le{" "}
              {format(date, "d MMMM yyyy", { locale: fr })}
            </h3>
            <ScrollArea className="h-[180px] rounded-md border p-4">
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </div>
    </Card>
  );
}
