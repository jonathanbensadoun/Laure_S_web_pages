# Site vitrine pour Ostéopathe

Bienvenue sur le site web que j’ai réalisé pour une ostéopathe. Ce projet vise à offrir une plateforme conviviale et intuitive permettant aux patients de s’informer sur ses services, ses tarifs, et de réserver des rendez-vous en ligne.

## Fonctionnalités principales

- **Informations sur les services** : Détails complets sur les prestations proposées :
  - Ostéopathie
  - Pilates
  - Auriculothérapie
- **Consultation des tarifs** : Une page dédiée aux tarifs pour chaque prestation.
- **Réservation en ligne** : Possibilité de réserver directement via une interface intuitive.

## Aperçu

![Aperçu du site](public/aperçu.gif)

## Technologies utilisées

- **Next.js** : Framework pour un rendu côté serveur rapide et performant.
- **React** : Bibliothèque pour une interface utilisateur dynamique.
- **TailwindCSS** : Framework CSS pour une mise en page responsive et moderne.
- **Supabase** : Base de données et authentification pour la gestion des réservations.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/jonathanbensadoun/Laure_S_web_pages
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Accédez au site à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
osteopathe-site/
├── public/
│   ├── images/
│   └── ... (autres fichiers statiques)
├── app/
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   └── ... (composants partagés)
├── styles/
│   └── globals.css
├── README.md
├── next.config.js
└── ... (autres fichiers de configuration)
```

## Défis rencontrés

- **Gestion des disponibilités** : Implémentation d’un système de réservation dynamique avec gestion des plages horaires.
- **Responsive design** : Assurer une expérience fluide sur tous les appareils (mobile, tablette, desktop).

## Améliorations futures

- Ajouter des notifications pour rappeler les rendez-vous.
- Créer une section pour partager des conseils santé et bien-être.

## Auteur

Projet réalisé par **Jonathan B** pour une professionnelle en ostéopathie. N’hésitez pas à me contacter pour tout retour ou question sur ce projet.

---

Merci de votre visite !
