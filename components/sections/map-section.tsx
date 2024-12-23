"use client";

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";

const center = {
  lat: 48.9137455,
  lng: 2.4089359,
};

export function MapSection() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!isLoaded) return <div>Chargement...</div>;

  return (
    <section className="py-16 sm:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Me contacter</h2>
          <p className="text-gray-600">
            Votre cabinet d&apos;ostéopathie au Pré-Saint-Gervais
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-[400px] overflow-hidden">
              {/* <GoogleMap
                zoom={15}
                center={center}
                mapContainerClassName="w-full h-full"
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                  styles: [
                    {
                      featureType: "all",
                      elementType: "all",
                      stylers: [{ saturation: -100 }],
                    },
                  ],
                }}
              >
                <MarkerF position={center} />
              </GoogleMap> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.78341315518963!2d2.4042876250573784!3d48.88575593463494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66daff93f0c7b%3A0x6600d78051fa0a14!2slaure%20sautier!5e0!3m2!1sfr!2sfr!4v1734865738999!5m2!1sfr!2sfr"
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="flex justify-center items-center p-4 h-full">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-10 h-10 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-600">
                      9 Rue Gabriel Péri, 93310 Le Pré-Saint-Gervais
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Téléphone</h3>
                    <p className="text-gray-600">01 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Horaires</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Vendredi : 9h - 19h</p>
                      <p>Samedi : 9h - 13h</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            <Image
              src="/Do.png"
              alt="Laure Sautier"
              width={400}
              height={300}
              className="rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
