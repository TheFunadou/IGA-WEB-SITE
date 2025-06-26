import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true); // Solo si nunca aceptó o rechazó
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
    // Aquí puedes activar cookies de preferencias o tracking
  };

  const handleDeny = () => {
    localStorage.setItem("cookie_consent", "denied");
    setShowBanner(false);
    // No activas cookies no esenciales
  };

  if (!showBanner) return null;

  return (
    <div role="alert" className="alert alert-vertical sm:alert-horizontal fixed bottom-4 left-4 bg-gray-900 border-none text-white shadow-xl w-18/20 z-50 xl:w-1/4">
      <i className="bi bi-exclamation-circle text-2xl"></i>
      <span>Usamos cookies para mejorar tu experiencia. ¿Deseas aceptarlas?</span>
      <div className="flex gap-2">
        <button className="btn btn-sm" onClick={handleDeny}>Rechazar</button>
        <button className="btn btn-sm btn-primary text-white" onClick={handleAccept}>Aceptar</button>
      </div>
    </div>
  );
};

export default CookieConsent;
