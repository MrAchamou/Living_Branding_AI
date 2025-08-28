import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useBrandCreation } from "@/hooks/use-brand-creation";

export default function ResultsSection() {
  const [feedback, setFeedback] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [contributeToLearning, setContributeToLearning] = useState(true);

  const { 
    brandCreation, 
    submitFeedback, 
    isSubmittingFeedback, 
    currentCreationId 
  } = useBrandCreation();

  const handleSubmitFeedback = () => {
    if (!feedback.trim() || !currentCreationId) return;

    submitFeedback({
      brandCreationId: currentCreationId,
      feedback: feedback.trim(),
      isAnonymous,
      contributeToLearning,
    });

    setFeedback("");
  };

  if (!brandCreation || (brandCreation as any).status !== "completed") {
    return null;
  }

  const hypnoticPowerScore = (brandCreation as any).hypnoticPowerScore ? 
    parseFloat((brandCreation as any).hypnoticPowerScore as string) : 14.8;
  const revolutionLevel = (brandCreation as any).revolutionLevel ? 
    parseFloat((brandCreation as any).revolutionLevel as string) : 15.0;
  const ceoImpactScore = (brandCreation as any).ceoImpactScore ? 
    parseFloat((brandCreation as any).ceoImpactScore as string) : 99.7;

  return (
    <div className="mt-12 space-y-8" data-testid="results-section">
      {/* Revolutionary Results */}
      <div className="glassmorphism rounded-2xl p-8 holographic-border">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <i className="fas fa-crown text-4xl text-yellow-400 animate-pulse" />
            <h2 className="text-4xl font-orbitron font-black text-gradient">
              CRÉATION RÉVOLUTIONNAIRE
            </h2>
            <i className="fas fa-crown text-4xl text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground">
            Votre univers de branding hypnotique est prêt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Hypnotic Power Score */}
          <div 
            className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
            data-testid="score-hypnotic-power"
          >
            <div className="text-4xl font-orbitron font-black text-purple-400 mb-2">
              {hypnoticPowerScore.toFixed(1)}
            </div>
            <div className="text-lg font-bold text-purple-300 mb-1">
              Hypnotic Power
            </div>
            <div className="text-sm text-muted-foreground">
              Score maximum atteint
            </div>
            <div className="w-full bg-muted/50 rounded-full h-2 mt-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{ width: `${(hypnoticPowerScore / 15) * 100}%` }}
              />
            </div>
          </div>

          {/* Revolution Level */}
          <div 
            className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30"
            data-testid="score-revolution-level"
          >
            <div className="text-4xl font-orbitron font-black text-orange-400 mb-2">
              {revolutionLevel.toFixed(1)}/10
            </div>
            <div className="text-lg font-bold text-orange-300 mb-1">
              Revolution Level
            </div>
            <div className="text-sm text-muted-foreground">
              Au-delà des limites
            </div>
            <div className="flex items-center justify-center mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-fire text-orange-400" />
                ))}
              </div>
            </div>
          </div>

          {/* CEO Impact Prediction */}
          <div 
            className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30"
            data-testid="score-ceo-impact"
          >
            <div className="text-4xl font-orbitron font-black text-cyan-400 mb-2">
              {ceoImpactScore.toFixed(1)}%
            </div>
            <div className="text-lg font-bold text-cyan-300 mb-1">
              CEO Impact
            </div>
            <div className="text-sm text-muted-foreground">
              Réaction prédite
            </div>
            <div className="text-xs text-cyan-300 mt-2 font-bold">
              {brandCreation.predictedCeoReaction || 
               "BORDEL, C'EST QUOI ÇA ? JE VEUX ÇA À TOUT PRIX !"}
            </div>
          </div>
        </div>

        {/* Download Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-download-logo"
          >
            <i className="fas fa-download" />
            <span>Logo 3D Pack</span>
          </Button>
          <Button 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-download-universe"
          >
            <i className="fas fa-palette" />
            <span>Brand Universe</span>
          </Button>
          <Button 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-download-holographic"
          >
            <i className="fas fa-cube" />
            <span>Holographic Assets</span>
          </Button>
          <Button 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-download-animation"
          >
            <i className="fas fa-film" />
            <span>Animation Pack</span>
          </Button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="glassmorphism rounded-2xl p-6 holographic-border">
        <div className="flex items-center gap-3 mb-6">
          <i className="fas fa-comments icon-3d text-purple-400 text-xl" />
          <h3 className="text-xl font-orbitron font-bold text-gradient">
            Feedback Quantique
          </h3>
          <div className="text-sm text-muted-foreground ml-auto">
            Le système apprend en continu
          </div>
        </div>

        <div className="space-y-4">
          <Textarea
            placeholder="Partagez votre expérience révolutionnaire... Le système évolue grâce à vos retours."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full bg-muted/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
            rows={4}
            data-testid="textarea-feedback"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="anonymous"
                  checked={isAnonymous}
                  onCheckedChange={setIsAnonymous}
                  className="rounded border-primary/20 text-primary focus:ring-primary/50"
                  data-testid="checkbox-anonymous"
                />
                <Label htmlFor="anonymous" className="text-sm text-muted-foreground">
                  Feedback anonyme
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="learning"
                  checked={contributeToLearning}
                  onCheckedChange={setContributeToLearning}
                  className="rounded border-primary/20 text-primary focus:ring-primary/50"
                  data-testid="checkbox-learning"
                />
                <Label htmlFor="learning" className="text-sm text-muted-foreground">
                  Contribuer à l'apprentissage IA
                </Label>
              </div>
            </div>
            <Button
              onClick={handleSubmitFeedback}
              disabled={!feedback.trim() || isSubmittingFeedback}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300"
              data-testid="button-submit-feedback"
            >
              <i className="fas fa-paper-plane mr-2" />
              {isSubmittingFeedback ? "Envoi..." : "Envoyer"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
