"use client";

export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const defaultConsent: CookieConsent = {
  necessary: true, // Toujours true car nécessaire au fonctionnement
  analytics: false,
  marketing: false,
};

export function getCookieConsent(): CookieConsent {
  const consent = localStorage.getItem('cookie-consent');
  return consent ? JSON.parse(consent) : defaultConsent;
}

export function saveCookieConsent(consent: CookieConsent) {
  localStorage.setItem('cookie-consent', JSON.stringify(consent));
}