"use client";

import { Card } from '@/components/ui/card';

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Identité du praticien</h2>
          <p>Laure Sautier</p>
          <p>Ostéopathe D.O.</p>
          <p>N° ADELI : XXXXXX</p>
          <p>Membre du Registre des Ostéopathes de France</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Coordonnées du cabinet</h2>
          <p>Adresse : [Adresse du cabinet]</p>
          <p>Téléphone : [Numéro de téléphone]</p>
          <p>Email : [Adresse email]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Hébergement du site</h2>
          <p>[Nom de l'hébergeur]</p>
          <p>[Adresse de l'hébergeur]</p>
          <p>RCS : [Numéro RCS]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d'auteur. 
             Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
        </section>
      </Card>
    </div>
  );
}