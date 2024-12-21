"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm z-50">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Politique de cookies</CardTitle>
          <CardDescription>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Ces cookies nous permettent d'analyser le trafic du site et de personnaliser votre expérience.
            En acceptant, vous consentez à l'utilisation de ces cookies conformément à notre politique de confidentialité.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={declineCookies}>
            Refuser
          </Button>
          <Button onClick={acceptCookies}>
            Accepter
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}