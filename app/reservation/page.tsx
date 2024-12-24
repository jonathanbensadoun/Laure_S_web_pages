"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookingForm } from "@/components/reservation/booking-form";
import { AppointmentCalendar } from "@/components/reservation/appointment-calendar";
import { ConsultationTypes } from "@/components/reservation/consultation-types";

export default function Reservation() {
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
          Prendre rendez-vous
        </h1>
        <p className="text-gray-600">
          Choisissez le type de consultation et un créneau qui vous convient
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <ConsultationTypes />
        <AppointmentCalendar />
      </div>

      <BookingForm />
    </div>
  );
}
