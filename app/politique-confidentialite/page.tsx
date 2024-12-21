"use client";

import { Card } from '@/components/ui/card';

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Collecte des données</h2>
          <p>Les données personnelles collectées sur ce site sont :</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Informations relatives aux rendez-vous</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Utilisation des données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>La gestion des rendez-vous</li>
            <li>Le suivi thérapeutique</li>
            <li>La communication relative à vos soins</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Conservation des données</h2>
          <p>Les données de santé sont conservées conformément à la législation en vigueur, 
             soit 20 ans à compter de la dernière consultation.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </ul>
        </section>
      </Card>
    </div>
  );
}