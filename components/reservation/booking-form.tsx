"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
// import { sendReservationEmail } from "@/lib/email";
// import type { ReservationData } from "@/lib/email";

export function BookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // setIsSubmitting(true);
    // try {
    //   const formData = new FormData(e.currentTarget);
    //   const reservationData: ReservationData = {
    //     firstName: formData.get("firstName") as string,
    //     lastName: formData.get("lastName") as string,
    //     email: formData.get("email") as string,
    //     phone: formData.get("phone") as string,
    //     reason: formData.get("reason") as string,
    //     date: formData.get("date") as string,
    //     time: formData.get("time") as string,
    //     consultationType: formData.get("consultationType") as string,
    //   };
    //   await sendReservationEmail(reservationData);
    //   toast({
    //     title: "Réservation envoyée",
    //     description:
    //       "Nous vous contacterons bientôt pour confirmer votre rendez-vous.",
    //   });
    //   e.currentTarget.reset();
    // } catch (error) {
    //   console.error("Reservation submission error:", error);
    //   toast({
    //     title: "Erreur",
    //     description:
    //       "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8"
    >
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Vos informations</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Votre prénom"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 XX XX XX XX"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Motif de consultation</Label>
            <Textarea
              id="reason"
              name="reason"
              placeholder="Décrivez brièvement le motif de votre consultation"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" name="terms" required />
            <Label htmlFor="terms" className="text-sm leading-none">
              J&apos;accepte que mes données personnelles soient traitées
              conformément à la{" "}
              <a
                href="/politique-confidentialite"
                className="text-primary hover:underline"
              >
                politique de confidentialité
              </a>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Confirmer le rendez-vous"}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}
