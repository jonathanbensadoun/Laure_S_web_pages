"use client";

import { Card } from '@/components/ui/card';

export default function CGV() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Tarifs et paiement</h2>
          <p>Le tarif des consultations est de [montant] euros.</p>
          <p>Les moyens de paiement acceptés sont :</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Carte bancaire</li>
            <li>Espèces</li>
            <li>Chèque</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Rendez-vous et annulation</h2>
          <p>Toute annulation doit être effectuée au moins 24 heures à l'avance.</p>
          <p>En cas d'annulation tardive ou d'absence non justifiée, la consultation pourra être facturée.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Prise en charge</h2>
          <p>Les consultations d'ostéopathie peuvent être prises en charge partiellement par certaines mutuelles.
             Il appartient au patient de se renseigner auprès de sa mutuelle.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Responsabilité</h2>
          <p>L'ostéopathe s'engage à prodiguer des soins consciencieux et attentifs selon les règles de l'art
             et les recommandations de la profession.</p>
        </section>
      </Card>
    </div>
  );
}