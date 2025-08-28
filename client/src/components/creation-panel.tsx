import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useBrandCreation } from "@/hooks/use-brand-creation";
import { STYLE_MODES } from "@/lib/constants";

export default function CreationPanel() {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    styleMode: "timeless",
    customWatermark: "",
  });

  const { createBrand, isCreating, sectors, updateInputs, realtimePrediction, predictPotential } = useBrandCreation();

  const handleSubmit = () => {
    if (!formData.companyName || !formData.sector) {
      return;
    }

    createBrand({
      companyName: formData.companyName,
      sector: formData.sector,
      styleMode: formData.styleMode,
      customWatermark: formData.customWatermark || undefined,
    });
  };

  return (
    <div className="space-y-6">
      {/* Company Input Card */}
      <div className="glassmorphism rounded-2xl p-6 holographic-border animate-pulse-glow">
        <div className="flex items-center gap-3 mb-6">
          <i className="fas fa-rocket icon-3d text-purple-400 text-xl" />
          <h2 className="text-2xl font-orbitron font-bold text-gradient">
            Genesis Configuration
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="block text-sm font-medium text-muted-foreground mb-2">
              Nom de l'entreprise
            </Label>
            <Input
              type="text"
              placeholder="Ex: QuantumNova, NeuralForge, BioSynth..."
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              className="w-full bg-muted/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              data-testid="input-company-name"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-muted-foreground mb-2">
              Secteur révolutionnaire
            </Label>
            <Select
              value={formData.sector}
              onValueChange={(value) =>
                setFormData({ ...formData, sector: value })
              }
            >
              <SelectTrigger 
                className="w-full bg-muted/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                data-testid="select-sector"
              >
                <SelectValue placeholder="Sélectionnez un secteur quantique" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block text-sm font-medium text-muted-foreground mb-3">
              Mode révolutionnaire
            </Label>
            <RadioGroup
              value={formData.styleMode}
              onValueChange={(value) =>
                setFormData({ ...formData, styleMode: value })
              }
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {STYLE_MODES.map((mode) => (
                <div
                  key={mode.value}
                  className={`relative p-4 border rounded-xl cursor-pointer transition-all group ${
                    formData.styleMode === mode.value
                      ? "bg-primary/10 border-primary/30"
                      : "bg-muted/30 border-muted hover:bg-primary/10 hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem
                    value={mode.value}
                    className="sr-only"
                    data-testid={`radio-style-${mode.value}`}
                  />
                  <div className="text-center">
                    <i
                      className={`fas fa-${mode.icon} text-2xl mb-2 transition-all ${
                        formData.styleMode === mode.value
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-primary group-hover:scale-110"
                      }`}
                    />
                    <h3
                      className={`font-orbitron font-bold text-sm transition-colors ${
                        formData.styleMode === mode.value
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {mode.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {mode.description}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label className="block text-sm font-medium text-muted-foreground mb-2">
              Watermark dimensionnel (optionnel)
            </Label>
            <Input
              type="text"
              placeholder="Signature quantique personnalisée"
              value={formData.customWatermark}
              onChange={(e) =>
                setFormData({ ...formData, customWatermark: e.target.value })
              }
              className="w-full bg-muted/50 border border-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              data-testid="input-watermark"
            />
          </div>
        </div>
      </div>

      {/* Creation Button */}
      <Button
        onClick={handleSubmit}
        disabled={isCreating || !formData.companyName || !formData.sector}
        className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white font-orbitron font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shimmer-effect"
        data-testid="button-create-brand"
      >
        <div className="flex items-center justify-center gap-3">
          <i className="fas fa-magic text-xl" />
          <span className="text-lg">
            {isCreating ? "CRÉATION EN COURS..." : "CRÉER L'IMPOSSIBLE"}
          </span>
          <i className="fas fa-bolt text-xl" />
        </div>
      </Button>

      {/* Status Indicators */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-xl" data-testid="status-hypnotic-power">
          <i className="fas fa-brain text-cyan-400 text-2xl mb-2" />
          <div className="text-sm font-mono font-bold text-cyan-400">14.8</div>
          <div className="text-xs text-muted-foreground">Hypnotic Power</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-xl" data-testid="status-revolution-level">
          <i className="fas fa-fire text-orange-400 text-2xl mb-2" />
          <div className="text-sm font-mono font-bold text-orange-400">15/10</div>
          <div className="text-xs text-muted-foreground">Revolution Level</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-xl" data-testid="status-ceo-impact">
          <i className="fas fa-eye text-purple-400 text-2xl mb-2" />
          <div className="text-sm font-mono font-bold text-purple-400">99.7%</div>
          <div className="text-xs text-muted-foreground">CEO Impact</div>
        </div>
      </div>
    </div>
  );
}
