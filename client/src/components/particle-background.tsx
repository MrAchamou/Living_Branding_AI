import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = Math.random() * 15 + 10 + "s";
      particle.style.animationDelay = "0s";

      container.appendChild(particle);

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 25000);
    };

    // Create initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 2000);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      data-testid="particle-background"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "-1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "-2s" }}
      />
    </div>
  );
}
