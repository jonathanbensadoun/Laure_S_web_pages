"use client";

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Réglementation</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Diplômée en Ostéopathie (D.O.)</li>
              <li>Membre du Registre des Ostéopathes de France</li>
              <li>N° ADELI: XXXXXX</li>
              <li>Conformité RGPD</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations légales</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/mentions-legales" className="hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-primary">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Réglementations européennes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Directive 2011/24/UE relative aux soins de santé transfrontaliers</li>
              <li>Norme EN 16686:2015 - Services en ostéopathie</li>
              <li>RGPD - Protection des données personnelles</li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Laure Sautier - Ostéopathe D.O. Tous droits réservés.</p>
          <p className="mt-2">
            Cabinet d'ostéopathie enregistré auprès de l'ARS - Conformité CEN/EN 16686
          </p>
        </div>
      </div>
    </footer>
  );
}