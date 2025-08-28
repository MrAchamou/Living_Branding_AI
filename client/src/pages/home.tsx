import ParticleBackground from "@/components/particle-background";
import CreationPanel from "@/components/creation-panel";
import VisualizationPanel from "@/components/visualization-panel";
import ResultsSection from "@/components/results-section";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <title>Living Branding AI - Revolutionary Brand Creation</title>
      <meta name="description" content="Transformez votre entreprise en univers de branding hypnotique et révolutionnaire avec l'IA la plus avancée du marché." />

      <ParticleBackground />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-rotate-3d">
              <i className="fas fa-atom text-white text-xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-black text-gradient">
              LIVING BRANDING AI
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Transformez votre entreprise en univers de branding{" "}
            <span className="text-gradient font-semibold">
              hypnotique et révolutionnaire
            </span>
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Genesis Engine Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Revolution Level: 15/10</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span>Impossibility Engine Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Application */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Creation Panel */}
          <div className="xl:col-span-5">
            <CreationPanel />
          </div>

          {/* Visualization Panel */}
          <div className="xl:col-span-7">
            <VisualizationPanel />
          </div>
        </div>

        {/* Results Section */}
        <ResultsSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-8 mt-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-green-400" />
              <span>Sécurité Quantique</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-infinity text-purple-400" />
              <span>Apprentissage Continu</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-rocket text-cyan-400" />
              <span>Performance Révolutionnaire</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2024 Living Branding AI - Révolutionnant l'univers du branding depuis le futur
          </div>
        </div>
      </footer>
    </div>
  );
}
