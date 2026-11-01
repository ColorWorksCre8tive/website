"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] bg-navy text-cream shadow-2xl">
      <div className="cw-container py-4 md:py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-2xl">
            <span className="text-xl mt-0.5 shrink-0">🍪</span>
            <p className="text-sm text-cream/80 leading-relaxed">
              We use cookies to understand how visitors use our site and to
              improve your experience. By clicking "Accept", you agree to our
              use of analytics cookies.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              className="rounded-full border border-cream/30 px-5 py-2 text-sm font-semibold text-cream/80 hover:bg-cream/10 transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white hover:bg-[#b35f3d] transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
