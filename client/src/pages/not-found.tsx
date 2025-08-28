import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/particle-background";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Décompte pour redirection automatique
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleGoHome = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-2xl mx-auto text-center z-10 px-6">
        {/* Header avec animation */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-white mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            🧠 Quantum Error Portal 2.0
          </h2>
          <div className="text-lg text-purple-300 mb-6">
            Page introuvable - Redirection automatique en cours...
          </div>
        </div>

        {/* Countdown et actions */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-white mb-4">
            {countdown}
          </div>
          <p className="text-purple-300 mb-6">
            Retour automatique à l'accueil dans {countdown} secondes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGoHome}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
            >
              🏠 Retour à l'accueil
            </Button>

            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-3"
            >
              ← Page précédente
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-purple-300/60 mt-8">
          © 2024 Quantum Portal - Intelligence d'erreur révolutionnaire
        </div>
      </div>
    </div>
  );
}