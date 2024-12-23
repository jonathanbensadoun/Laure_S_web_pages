"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  getCookieConsent,
  saveCookieConsent,
  defaultConsent,
} from "./cookie-settings";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);

  useEffect(() => {
    // Petit délai pour éviter le flash de la bannière au chargement
    const timer = setTimeout(() => {
      const savedConsent = getCookieConsent();
      if (!savedConsent) {
        setShowBanner(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveCookieConsent(fullConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveCookieConsent(consent);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm z-50">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Paramètres des cookies</CardTitle>
          <CardDescription>
            Nous utilisons des cookies pour améliorer votre expérience sur notre
            site.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="necessary" checked={consent.necessary} disabled />
            <label
              htmlFor="necessary"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Cookies nécessaires (obligatoires)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="analytics"
              checked={consent.analytics}
              onCheckedChange={(checked) =>
                setConsent((prev) => ({ ...prev, analytics: checked === true }))
              }
            />
            <label
              htmlFor="analytics"
              className="text-sm font-medium leading-none"
            >
              Cookies analytiques
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketing"
              checked={consent.marketing}
              onCheckedChange={(checked) =>
                setConsent((prev) => ({ ...prev, marketing: checked === true }))
              }
            />
            <label
              htmlFor="marketing"
              className="text-sm font-medium leading-none"
            >
              Cookies marketing
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={handleSavePreferences}>
            Enregistrer les préférences
          </Button>
          <Button onClick={handleAcceptAll}>Tout accepter</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
