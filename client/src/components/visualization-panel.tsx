import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./three-scene";
import { useBrandCreation } from "@/hooks/use-brand-creation";
import { CREATION_PHASES, PREVIEW_MODES } from "@/lib/constants";

export default function VisualizationPanel() {
  const [activePreviewMode, setActivePreviewMode] = useState("static-hero");
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const { brandCreation, isLoadingBrand } = useBrandCreation();

  // Calculate progress for loading ring
  const getOverallProgress = () => {
    if (!brandCreation || !(brandCreation as any).phases) return 0;
    const phases = (brandCreation as any).phases as any[];
    const completedPhases = phases.filter((phase: any) => phase.status === "completed").length;
    const inProgressPhase = phases.find((phase: any) => phase.status === "in-progress");
    
    let progress = (completedPhases / phases.length) * 100;
    if (inProgressPhase) {
      progress += (inProgressPhase.progress / phases.length);
    }
    
    return Math.min(100, progress);
  };

  const isCreating = brandCreation && (brandCreation as any).status === "creating";

  return (
    <div className="space-y-6">
      {/* 3D Viewport */}
      <div className="glassmorphism rounded-2xl p-6 holographic-border">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-cube icon-3d text-purple-400 text-xl" />
            <h3 className="text-xl font-orbitron font-bold text-gradient">
              Dimensional Preview
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="p-2 bg-muted/50 hover:bg-muted rounded-lg transition-colors"
              data-testid="button-expand"
            >
              <i className="fas fa-expand text-muted-foreground" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="p-2 bg-muted/50 hover:bg-muted rounded-lg transition-colors"
              data-testid="button-download"
            >
              <i className="fas fa-download text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="relative bg-black/50 rounded-xl overflow-hidden h-[400px]">
          <ThreeScene isVisible={!isCreating} />

          {/* 3D Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="p-2 bg-black/50 backdrop-blur rounded-lg">
              <i className="fas fa-mouse text-white/60 text-xs" />
            </div>
            <div className="p-2 bg-black/50 backdrop-blur rounded-lg">
              <span className="text-white/60 text-xs font-mono">Drag to rotate</span>
            </div>
          </div>

          {/* Loading State Overlay */}
          {isCreating && (
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur flex items-center justify-center"
              data-testid="loading-overlay"
            >
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 progress-ring" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(240 5% 64.9%)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(263 70% 50%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="progress-ring-fill"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (getOverallProgress() / 100) * 283}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary font-mono">
                      {Math.round(getOverallProgress())}%
                    </span>
                  </div>
                </div>
                <div className="text-lg font-orbitron font-bold text-gradient mb-2">
                  FORGING IMPOSSIBLE VISUALS
                </div>
                <div className="text-sm text-muted-foreground">
                  Transcending reality boundaries...
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Preview Modes */}
        <div className="flex items-center gap-2 mt-4">
          {PREVIEW_MODES.map((mode) => (
            <Button
              key={mode.value}
              variant={activePreviewMode === mode.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActivePreviewMode(mode.value)}
              className="text-sm font-medium"
              data-testid={`button-preview-${mode.value}`}
            >
              {mode.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Creation Phases */}
      <div className="glassmorphism rounded-2xl p-6 holographic-border">
        <div className="flex items-center gap-3 mb-6">
          <i className="fas fa-cogs icon-3d text-purple-400 text-xl" />
          <h3 className="text-xl font-orbitron font-bold text-gradient">
            Genesis Phases
          </h3>
        </div>

        <div className="space-y-4">
          {CREATION_PHASES.map((phase, index) => {
            let phaseStatus = "pending";
            let phaseProgress = 0;
            let phaseDescription = phase.description;

            if (brandCreation?.phases && Array.isArray(brandCreation.phases)) {
              const currentPhase = brandCreation.phases[index];
              if (currentPhase) {
                phaseStatus = currentPhase.status;
                phaseProgress = currentPhase.progress || 0;
                phaseDescription = currentPhase.description || phase.description;
              }
            }

            const getPhaseColors = () => {
              switch (phaseStatus) {
                case "completed":
                  return "bg-green-500/10 border-green-500/30 text-green-400";
                case "in-progress":
                  return "bg-blue-500/10 border-blue-500/30 text-blue-400";
                default:
                  return "bg-muted/30 border-muted text-muted-foreground opacity-50";
              }
            };

            const getIconColors = () => {
              switch (phaseStatus) {
                case "completed":
                  return "bg-green-500 text-white";
                case "in-progress":
                  return "bg-blue-500 text-white animate-pulse";
                default:
                  return "bg-muted text-muted-foreground";
              }
            };

            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl ${getPhaseColors()}`}
                data-testid={`phase-${index}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getIconColors()}`}>
                  {phaseStatus === "completed" ? (
                    <i className="fas fa-check text-sm" />
                  ) : (
                    <i className={`fas fa-${phase.icon} text-sm`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-orbitron font-bold text-sm">
                    {phase.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {phaseDescription}
                  </div>
                </div>
                <div className="font-mono text-sm">
                  {phaseProgress}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
