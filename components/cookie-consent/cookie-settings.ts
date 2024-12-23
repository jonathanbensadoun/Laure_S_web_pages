"use client";

export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return null;
    
    const parsed = JSON.parse(consent);
    
    // Validate the parsed object has the correct structure
    if (typeof parsed !== 'object' || parsed === null) return null;
    if (!('necessary' in parsed) || !('analytics' in parsed) || !('marketing' in parsed)) return null;
    
    return parsed as CookieConsent;
  } catch (error) {
    // If there's any error parsing, remove the invalid data and return null
    localStorage.removeItem('cookie-consent');
    return null;
  }
}

export function saveCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
  } catch (error) {
    console.error('Failed to save cookie consent:', error);
  }
}