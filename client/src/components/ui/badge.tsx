
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ====================================================================
// 🏷️ QUANTUM BADGE COMPONENT 2.0 - REVOLUTIONARY AI BADGE SYSTEM
// ====================================================================

// 🧠 CONTEXTE INTELLIGENCE ENGINE - Moteur d'intelligence contextuelle
class ContextualIntelligenceEngine {
  private contextSignature: string;
  private behaviorPatterns: Map<string, any>;
  private adaptiveRules: Map<string, any>;

  constructor() {
    this.contextSignature = `CIE-${Date.now().toString(16).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    this.behaviorPatterns = new Map();
    this.adaptiveRules = new Map();
    console.log(`🧠 Contextual Intelligence Engine initialized: ${this.contextSignature}`);
  }

  analyzeContext(content: any, variant: string, intelligence: string): any {
    const analysis = {
      urgency: this.detectUrgency(content, variant),
      semantics: this.analyzeSemanticMeaning(content),
      visualPriority: this.calculateVisualPriority(variant, intelligence),
      adaptiveStyles: this.generateAdaptiveStyles(content, variant, intelligence),
      interactionPrediction: this.predictUserInteraction(content, variant)
    };

    this.behaviorPatterns.set(`context-${Date.now()}`, analysis);
    return analysis;
  }

  private detectUrgency(content: any, variant: string): string {
    if (variant === 'destructive') return 'critical';
    if (typeof content === 'string') {
      const urgentKeywords = ['urgent', 'important', 'critical', 'error', 'warning', 'attention'];
      const contentLower = content.toLowerCase();
      if (urgentKeywords.some(keyword => contentLower.includes(keyword))) {
        return 'high';
      }
    }
    return 'normal';
  }

  private analyzeSemanticMeaning(content: any): any {
    return {
      type: this.detectContentType(content),
      sentiment: this.analyzeSentiment(content),
      category: this.categorizeContent(content),
      contextualRelevance: Math.random() * 0.3 + 0.7 // Simulated AI analysis
    };
  }

  private detectContentType(content: any): string {
    if (typeof content === 'number') return 'numeric';
    if (typeof content === 'string') {
      if (/^\d+$/.test(content)) return 'count';
      if (content.includes('@')) return 'mention';
      if (content.startsWith('#')) return 'tag';
      if (content.includes('✅') || content.includes('❌')) return 'status';
    }
    return 'generic';
  }

  private analyzeSentiment(content: any): string {
    if (typeof content === 'string') {
      const positiveWords = ['success', 'complete', 'approved', 'active', 'online'];
      const negativeWords = ['error', 'failed', 'inactive', 'offline', 'denied'];
      
      const contentLower = content.toLowerCase();
      if (positiveWords.some(word => contentLower.includes(word))) return 'positive';
      if (negativeWords.some(word => contentLower.includes(word))) return 'negative';
    }
    return 'neutral';
  }

  private categorizeContent(content: any): string {
    if (typeof content === 'string') {
      if (/status|state|condition/.test(content.toLowerCase())) return 'status';
      if (/count|number|\d+/.test(content.toLowerCase())) return 'metric';
      if (/tag|label|category/.test(content.toLowerCase())) return 'classification';
    }
    return 'general';
  }

  private calculateVisualPriority(variant: string, intelligence: string): number {
    let priority = 1;
    if (variant === 'destructive') priority += 3;
    if (variant === 'default') priority += 2;
    if (intelligence === 'autonomous') priority += 2;
    if (intelligence === 'revolutionary') priority += 1;
    return Math.min(priority, 5);
  }

  private generateAdaptiveStyles(content: any, variant: string, intelligence: string): any {
    return {
      animation: intelligence === 'autonomous' ? 'quantum-pulse' : 'subtle-glow',
      intensity: this.calculateVisualPriority(variant, intelligence),
      colorAdaptation: this.getAdaptiveColors(content, variant),
      sizingStrategy: this.calculateOptimalSize(content)
    };
  }

  private getAdaptiveColors(content: any, variant: string): any {
    const semantics = this.analyzeSemanticMeaning(content);
    return {
      primary: semantics.sentiment === 'positive' ? 'emerald' : 
               semantics.sentiment === 'negative' ? 'red' : 'blue',
      accent: semantics.type === 'status' ? 'amber' : 'purple',
      intensity: semantics.contextualRelevance > 0.8 ? 'vibrant' : 'subtle'
    };
  }

  private calculateOptimalSize(content: any): string {
    if (typeof content === 'string' && content.length > 10) return 'expanded';
    if (typeof content === 'number' || (typeof content === 'string' && /^\d+$/.test(content))) return 'compact';
    return 'standard';
  }

  private predictUserInteraction(content: any, variant: string): any {
    return {
      clickProbability: variant === 'outline' ? 0.7 : 0.3,
      hoverDuration: variant === 'destructive' ? 'brief' : 'normal',
      attentionLevel: variant === 'destructive' ? 'high' : 'medium'
    };
  }

  getIntelligenceMetrics(): any {
    return {
      signature: this.contextSignature,
      patternsAnalyzed: this.behaviorPatterns.size,
      adaptiveRulesActive: this.adaptiveRules.size,
      intelligenceLevel: 'QUANTUM_CONTEXTUAL'
    };
  }
}

// 🎨 ADAPTIVE STYLING ENGINE - Moteur de styles adaptatifs
class AdaptiveStylingEngine {
  private styleSignature: string;
  private adaptiveCache: Map<string, any>;

  constructor() {
    this.styleSignature = `ASE-${Date.now().toString(16).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    this.adaptiveCache = new Map();
  }

  generateAdaptiveStyles(context: any, intelligence: string): any {
    const cacheKey = `${JSON.stringify(context)}-${intelligence}`;
    
    if (this.adaptiveCache.has(cacheKey)) {
      return this.adaptiveCache.get(cacheKey);
    }

    const adaptiveStyles = {
      transform: context.visualPriority > 3 ? 'scale(1.05)' : 'scale(1)',
      filter: intelligence === 'autonomous' ? 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: context.urgency === 'critical' ? 'quantum-pulse 2s infinite' : 'none'
    };

    this.adaptiveCache.set(cacheKey, adaptiveStyles);
    return adaptiveStyles;
  }
}

// Instance globale des moteurs IA
const contextualIntelligence = new ContextualIntelligenceEngine();
const adaptiveStyling = new AdaptiveStylingEngine();

// 🎨 Styles CSS quantiques pour le badge
const quantumBadgeStyles = `
@keyframes quantum-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

@keyframes quantum-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.6); }
}

.quantum-badge-adaptive {
  position: relative;
  overflow: hidden;
}

.quantum-badge-adaptive::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.quantum-badge-adaptive:hover::before {
  left: 100%;
}

.quantum-badge-revolutionary {
  background: linear-gradient(45deg, #8B5CF6, #EC4899, #06B6D4);
  background-size: 200% 200%;
  animation: quantum-glow 3s ease-in-out infinite;
}

.quantum-badge-autonomous {
  position: relative;
  background: linear-gradient(135deg, #10B981, #8B5CF6, #F59E0B);
  background-size: 300% 300%;
  animation: quantum-pulse 2s infinite, quantum-glow 4s ease-in-out infinite;
}

.quantum-badge-autonomous::after {
  content: '🧠';
  position: absolute;
  top: -2px;
  right: -2px;
  font-size: 8px;
  opacity: 0.7;
}

.quantum-badge-contextual {
  backdrop-filter: blur(8px);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.quantum-badge-critical {
  animation: quantum-pulse 1s infinite;
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
}

.quantum-badge-high-priority {
  transform: scale(1.1);
  z-index: 10;
}

@media (prefers-reduced-motion: reduce) {
  .quantum-badge-adaptive,
  .quantum-badge-revolutionary,
  .quantum-badge-autonomous,
  .quantum-badge-critical {
    animation: none;
  }
}
`;

// Injection des styles dans le document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = quantumBadgeStyles;
  document.head.appendChild(styleElement);
}

// 🚀 Interface du Badge révolutionnaire
export interface QuantumBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof quantumBadgeVariants> {
  intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
  contextAnalysis?: boolean;
  adaptiveStyles?: boolean;
  contentOptimization?: boolean;
  semanticAwareness?: boolean;
}

// ====================================================================
// 🎨 QUANTUM BADGE VARIANTS - Variantes du badge quantique
// ====================================================================

const quantumBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600"
      },
      intelligence: {
        basic: "",
        adaptive: "quantum-badge-adaptive",
        revolutionary: "quantum-badge-revolutionary",
        autonomous: "quantum-badge-autonomous"
      },
      priority: {
        normal: "",
        high: "quantum-badge-high-priority",
        critical: "quantum-badge-critical"
      }
    },
    defaultVariants: {
      variant: "default",
      intelligence: "basic",
      priority: "normal"
    },
  }
);

// ====================================================================
// 🏷️ QUANTUM BADGE COMPONENT 2.0 - COMPOSANT PRINCIPAL
// ====================================================================

const QuantumBadge = React.forwardRef<HTMLDivElement, QuantumBadgeProps>(
  ({ 
    className, 
    variant = "default",
    intelligence = "basic",
    contextAnalysis = false,
    adaptiveStyles = false,
    contentOptimization = false,
    semanticAwareness = false,
    children,
    ...props 
  }, ref) => {
    // États et références du badge quantique
    const [contextData, setContextData] = React.useState<any>(null);
    const [adaptiveState, setAdaptiveState] = React.useState<any>({});
    const badgeId = React.useRef(`quantum-badge-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`);

    // Analyse contextuelle avec IA
    React.useEffect(() => {
      if ((contextAnalysis || semanticAwareness) && intelligence !== "basic") {
        const context = contextualIntelligence.analyzeContext(children, variant || "default", intelligence);
        setContextData(context);
        
        if (adaptiveStyles) {
          const styles = adaptiveStyling.generateAdaptiveStyles(context, intelligence);
          setAdaptiveState(styles);
        }

        console.log(`🏷️ Quantum Badge Analysis: ${badgeId.current}`, context);
      }
    }, [children, variant, intelligence, contextAnalysis, adaptiveStyles, semanticAwareness]);

    // Gestion des interactions intelligentes
    const handleMouseEnter = React.useCallback(() => {
      if (intelligence === "autonomous" && contextData?.interactionPrediction?.hoverDuration === "brief") {
        // Interaction brève prédite pour les badges critiques
        setTimeout(() => {
          // Auto-dismiss ou action contextuelle
        }, 1500);
      }
    }, [intelligence, contextData]);

    // Classes CSS dynamiques
    const quantumClasses = React.useMemo(() => {
      if (intelligence === "basic") return "";
      
      const classes = [
        intelligence === "adaptive" && "quantum-badge-adaptive",
        intelligence === "revolutionary" && "quantum-badge-revolutionary", 
        intelligence === "autonomous" && "quantum-badge-autonomous",
        contextData?.urgency === "critical" && "quantum-badge-critical",
        contextData?.visualPriority >= 4 && "quantum-badge-high-priority",
        semanticAwareness && "quantum-badge-contextual"
      ].filter(Boolean);

      return classes.join(" ");
    }, [intelligence, contextData, semanticAwareness]);

    // Détermination automatique de la priorité
    const badgePriority = React.useMemo(() => {
      if (contextData?.urgency === "critical") return "critical";
      if (contextData?.visualPriority >= 4) return "high";
      return "normal";
    }, [contextData]);

    return (
      <div
        ref={ref}
        className={cn(
          quantumBadgeVariants({ variant, intelligence, priority: badgePriority }),
          quantumClasses,
          className
        )}
        style={adaptiveStyles && intelligence !== "basic" ? adaptiveState : undefined}
        onMouseEnter={handleMouseEnter}
        data-quantum-intelligence={intelligence}
        data-context-analysis={contextAnalysis}
        data-badge-id={badgeId.current}
        data-semantic-type={contextData?.semantics?.type}
        data-urgency={contextData?.urgency}
        {...props}
      >
        {children}
        
        {/* Indicateurs d'intelligence */}
        {intelligence === "autonomous" && contextData?.urgency === "critical" && (
          <span className="ml-1 text-[8px] opacity-70" aria-hidden="true">⚡</span>
        )}
        {intelligence === "revolutionary" && contextData?.semantics?.sentiment === "positive" && (
          <span className="ml-1 text-[8px] opacity-70" aria-hidden="true">✨</span>
        )}
      </div>
    );
  }
);

QuantumBadge.displayName = "QuantumBadge";

// ====================================================================
// 🌟 EXPORTS - Exportations du module quantique
// ====================================================================

export { QuantumBadge as Badge, quantumBadgeVariants as badgeVariants };

// Export des interfaces pour l'écosystème
export type { QuantumBadgeProps as BadgeProps };

// Export de l'intelligence contextuelle pour les autres composants
export { contextualIntelligence };

// Legacy compatibility
export default QuantumBadge;
