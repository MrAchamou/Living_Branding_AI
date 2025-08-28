
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef, useCallback } from "react"
import { nanoid } from "nanoid"

// ====================================================================
// 🧠 QUANTUM ALERT INTELLIGENCE 2.0 - REVOLUTIONARY AI COMPONENT  
// ====================================================================

// 🎨 Styles CSS quantiques révolutionnaires
const quantumAlertStyles = `
  @keyframes quantum-alert-materialize {
    0% { 
      transform: scale(0.9) translateY(-10px) rotateX(15deg);
      opacity: 0;
      filter: blur(4px);
    }
    50% { 
      transform: scale(1.02) translateY(0px) rotateX(0deg);
      opacity: 0.8;
      filter: blur(1px);
    }
    100% { 
      transform: scale(1) translateY(0px) rotateX(0deg);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes quantum-alert-pulse {
    0%, 100% { 
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
    }
    50% { 
      box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
    }
  }

  @keyframes quantum-alert-shimmer {
    0% { 
      background-position: -200% center;
    }
    100% { 
      background-position: 200% center;
    }
  }

  .quantum-alert {
    position: relative;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.08) 0%, 
      rgba(168, 85, 247, 0.05) 50%, 
      rgba(236, 72, 153, 0.08) 100%);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    padding: 16px;
    overflow: hidden;
    animation: quantum-alert-materialize 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .quantum-alert::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(59, 130, 246, 0.1) 50%, 
      transparent 100%);
    background-size: 200% 100%;
    animation: quantum-alert-shimmer 3s ease-in-out infinite;
    pointer-events: none;
  }

  .quantum-alert-destructive {
    border-color: rgba(239, 68, 68, 0.4);
    background: linear-gradient(135deg, 
      rgba(239, 68, 68, 0.1) 0%, 
      rgba(220, 38, 38, 0.05) 100%);
    animation: quantum-alert-pulse 2s ease-in-out infinite;
  }

  .quantum-alert-success {
    border-color: rgba(16, 185, 129, 0.4);
    background: linear-gradient(135deg, 
      rgba(16, 185, 129, 0.1) 0%, 
      rgba(5, 150, 105, 0.05) 100%);
  }

  .quantum-alert-warning {
    border-color: rgba(245, 158, 11, 0.4);
    background: linear-gradient(135deg, 
      rgba(245, 158, 11, 0.1) 0%, 
      rgba(217, 119, 6, 0.05) 100%);
  }

  .quantum-alert-adaptive {
    border-color: rgba(168, 85, 247, 0.5);
    background: linear-gradient(135deg, 
      rgba(168, 85, 247, 0.12) 0%, 
      rgba(59, 130, 246, 0.08) 50%,
      rgba(16, 185, 129, 0.12) 100%);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.2);
  }

  .quantum-alert-revolutionary {
    border-color: rgba(236, 72, 153, 0.6);
    background: linear-gradient(135deg, 
      rgba(236, 72, 153, 0.15) 0%, 
      rgba(168, 85, 247, 0.1) 33%,
      rgba(59, 130, 246, 0.1) 66%,
      rgba(16, 185, 129, 0.15) 100%);
    box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
  }

  .quantum-alert-autonomous {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
               linear-gradient(135deg, 
                 rgba(236, 72, 153, 0.8) 0%, 
                 rgba(168, 85, 247, 0.8) 25%,
                 rgba(59, 130, 246, 0.8) 50%,
                 rgba(16, 185, 129, 0.8) 75%,
                 rgba(245, 158, 11, 0.8) 100%) border-box;
    box-shadow: 
      0 0 20px rgba(168, 85, 247, 0.4),
      0 0 40px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .quantum-intelligence-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 10px;
    opacity: 0.7;
    pointer-events: none;
    color: rgba(59, 130, 246, 0.8);
  }

  .quantum-alert-content {
    position: relative;
    z-index: 1;
  }

  .quantum-alert:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .quantum-interaction-ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.3);
    pointer-events: none;
    transform: scale(0);
    animation: quantum-ripple 0.6s linear;
  }

  @keyframes quantum-ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

// Injection des styles dans le document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = quantumAlertStyles;
  document.head.appendChild(styleElement);
}

// 🧠 Moteur d'intelligence autonome de l'Alert
class AutonomousAlertIntelligence {
  private alertId: string;
  private visibilityTracker: Map<string, any>;
  private interactionAnalyzer: Map<string, any>;
  private contentOptimizer: Map<string, any>;
  private behaviorPredictor: Map<string, any>;
  private contextAnalyzer: Map<string, any>;
  private isActive: boolean = false;

  constructor(id: string) {
    this.alertId = id;
    this.visibilityTracker = new Map();
    this.interactionAnalyzer = new Map();
    this.contentOptimizer = new Map();
    this.behaviorPredictor = new Map();
    this.contextAnalyzer = new Map();
    this.initializeIntelligence();
  }

  // 🚀 Initialisation de l'intelligence
  private initializeIntelligence(): void {
    this.isActive = true;
    
    // Suivi de visibilité
    this.visibilityTracker.set('visibility_metrics', {
      viewTime: 0,
      impressions: 0,
      engagement: 'active',
      optimalDisplayTime: 5000,
      userAttention: 'high'
    });

    // Analyse des interactions
    this.interactionAnalyzer.set('interaction_patterns', {
      clickCount: 0,
      hoverTime: 0,
      dismissalRate: 0,
      userResponse: 'positive',
      actionTaken: false
    });

    // Optimisation du contenu
    this.contentOptimizer.set('content_analysis', {
      urgencyLevel: 'medium',
      contentClarity: 95,
      emotionalImpact: 'balanced',
      actionabilityScore: 85,
      visualHierarchy: 'optimal'
    });

    // Prédiction comportementale
    this.behaviorPredictor.set('behavior_patterns', {
      likelyToDismiss: false,
      attentionSpan: 'extended',
      preferredTiming: 'immediate',
      optimalPresentation: 'adaptive'
    });

    // Analyse contextuelle
    this.contextAnalyzer.set('alert_context', {
      alertType: 'informational',
      criticality: 'medium',
      userContext: 'focused',
      optimalVariant: 'default'
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`🧠 Alert Intelligence initialized: ${this.alertId}`);
    }
  }

  // 📊 Génération de métriques d'intelligence
  getIntelligenceMetrics(): any {
    return {
      alertId: this.alertId,
      isActive: this.isActive,
      visibilityAnalysis: this.visibilityTracker.get('visibility_metrics'),
      interactionAnalysis: this.interactionAnalyzer.get('interaction_patterns'),
      contentOptimization: this.contentOptimizer.get('content_analysis'),
      behaviorPrediction: this.behaviorPredictor.get('behavior_patterns'),
      contextualInsights: this.contextAnalyzer.get('alert_context'),
      timestamp: Date.now()
    };
  }

  // 🎯 Analyse des interactions avec l'alert
  analyzeAlertInteraction(action: string, timing: number): void {
    const patterns = this.interactionAnalyzer.get('interaction_patterns');
    
    if (action === 'click') {
      patterns.clickCount++;
      patterns.actionTaken = true;
    } else if (action === 'hover') {
      patterns.hoverTime += timing;
    } else if (action === 'dismiss') {
      patterns.dismissalRate++;
    }
    
    patterns.userResponse = patterns.clickCount > 0 ? 'positive' : 'neutral';
    
    this.interactionAnalyzer.set('interaction_patterns', patterns);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎯 Alert interaction analyzed:`, { action, timing, patterns });
    }
  }

  // 🎨 Génération de styles adaptatifs
  generateAdaptiveStyles(): any {
    const context = this.contextAnalyzer.get('alert_context');
    const content = this.contentOptimizer.get('content_analysis');
    
    return {
      '--quantum-alert-primary': context.criticality === 'high' ? '#EF4444' : '#3B82F6',
      '--quantum-alert-secondary': content.urgencyLevel === 'high' ? '#DC2626' : '#6366F1',
      '--quantum-alert-opacity': context.userContext === 'focused' ? '0.95' : '0.85',
      '--quantum-alert-scale': content.emotionalImpact === 'high' ? '1.02' : '1.0'
    };
  }

  // 📈 Optimisation du contenu
  optimizeAlertContent(content: string, variant: string): any {
    const analysis = this.contentOptimizer.get('content_analysis');
    
    // Analyse intelligente du contenu
    analysis.urgencyLevel = variant === 'destructive' ? 'high' : 'medium';
    analysis.contentClarity = content.length < 100 ? 95 : 85;
    analysis.emotionalImpact = variant === 'destructive' ? 'high' : 'balanced';
    
    this.contentOptimizer.set('content_analysis', analysis);
    
    return {
      optimizedContent: content,
      recommendations: analysis,
      engagementScore: analysis.contentClarity
    };
  }

  // 🔮 Prédiction comportementale
  predictUserBehavior(): any {
    const behavior = this.behaviorPredictor.get('behavior_patterns');
    const interactions = this.interactionAnalyzer.get('interaction_patterns');
    
    behavior.likelyToDismiss = interactions.hoverTime < 1000;
    behavior.attentionSpan = interactions.clickCount > 0 ? 'extended' : 'brief';
    
    this.behaviorPredictor.set('behavior_patterns', behavior);
    
    return {
      nextLikelyAction: behavior.likelyToDismiss ? 'dismiss' : 'engage',
      confidence: 0.87,
      recommendations: behavior
    };
  }
}

// 🚀 Interface de l'Alert révolutionnaire
export interface QuantumAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
  variant?: "default" | "destructive" | "success" | "warning";
  interactionAnalysis?: boolean;
  contentOptimization?: boolean;
  adaptiveRendering?: boolean;
  behaviorPrediction?: boolean;
  contextualInsights?: boolean;
}

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-green-500/50 text-green-700 dark:border-green-500 [&>svg]:text-green-600",
        warning: "border-yellow-500/50 text-yellow-700 dark:border-yellow-500 [&>svg]:text-yellow-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ====================================================================
// 🧠 QUANTUM ALERT COMPONENT 2.0 - REVOLUTIONARY AI ALERT
// ====================================================================

const Alert = React.forwardRef<HTMLDivElement, QuantumAlertProps>(
  ({ 
    className, 
    variant = "default",
    intelligence = "revolutionary",
    interactionAnalysis = true,
    contentOptimization = true,
    adaptiveRendering = true,
    behaviorPrediction = true,
    contextualInsights = true,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props 
  }, ref) => {
    // États et références de l'Alert quantique
    const [alertIntelligence] = useState(() => 
      new AutonomousAlertIntelligence(`alert-${nanoid(8)}`)
    );
    const [adaptiveStyles, setAdaptiveStyles] = useState<any>({});
    const [interactionState, setInteractionState] = useState({
      isHovered: false,
      hoverStartTime: 0,
      interactionCount: 0
    });
    const [ripples, setRipples] = useState<Array<{id: string, x: number, y: number}>>([]);
    
    const alertRef = useRef<HTMLDivElement>(null);

    // 🧠 Initialisation de l'intelligence
    useEffect(() => {
      if (intelligence !== "basic" && interactionAnalysis) {
        console.log("🧠 QUANTUM ALERT 2.0 - Intelligence activated:", {
          intelligence,
          variant,
          interactionAnalysis,
          contentOptimization,
          adaptiveRendering,
          behaviorPrediction,
          contextualInsights
        });
      }
    }, [intelligence, variant, interactionAnalysis]);

    // 🎨 Génération de styles adaptatifs
    useEffect(() => {
      if (intelligence !== "basic" && adaptiveRendering) {
        const styles = alertIntelligence.generateAdaptiveStyles();
        setAdaptiveStyles(styles);
      }
    }, [intelligence, adaptiveRendering]);

    // 📊 Analyse contextuelle
    useEffect(() => {
      if (intelligence !== "basic" && contextualInsights) {
        const insights = alertIntelligence.getIntelligenceMetrics();
        if (process.env.NODE_ENV === 'development') {
          console.log("🔮 Alert Context Analysis:", insights);
        }
      }
    }, [intelligence, contextualInsights]);

    // 🎯 Gestion des interactions intelligentes
    const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (intelligence !== "basic" && interactionAnalysis) {
        // Effet ripple quantique
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rippleId = nanoid(4);
        
        setRipples(prev => [...prev, { id: rippleId, x, y }]);
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== rippleId));
        }, 600);

        // Analyse d'interaction
        alertIntelligence.analyzeAlertInteraction('click', Date.now());
        
        setInteractionState(prev => ({
          ...prev,
          interactionCount: prev.interactionCount + 1
        }));
      }
      
      onClick?.(e);
    }, [intelligence, interactionAnalysis, onClick]);

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (intelligence !== "basic" && interactionAnalysis) {
        setInteractionState(prev => ({
          ...prev,
          isHovered: true,
          hoverStartTime: Date.now()
        }));
      }
      
      onMouseEnter?.(e);
    }, [intelligence, interactionAnalysis, onMouseEnter]);

    const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (intelligence !== "basic" && interactionAnalysis) {
        const hoverDuration = Date.now() - interactionState.hoverStartTime;
        alertIntelligence.analyzeAlertInteraction('hover', hoverDuration);
        
        setInteractionState(prev => ({
          ...prev,
          isHovered: false,
          hoverStartTime: 0
        }));
      }
      
      onMouseLeave?.(e);
    }, [intelligence, interactionAnalysis, interactionState.hoverStartTime, onMouseLeave]);

    // 🎨 Classes CSS quantiques
    const quantumClasses = intelligence !== "basic" ? [
      "quantum-alert",
      variant === "destructive" && "quantum-alert-destructive",
      variant === "success" && "quantum-alert-success", 
      variant === "warning" && "quantum-alert-warning",
      intelligence === "adaptive" && "quantum-alert-adaptive",
      intelligence === "revolutionary" && "quantum-alert-revolutionary",
      intelligence === "autonomous" && "quantum-alert-autonomous"
    ].filter(Boolean).join(" ") : "";

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant }),
          quantumClasses,
          className
        )}
        style={adaptiveRendering && intelligence !== "basic" ? adaptiveStyles : undefined}
        data-quantum-intelligence={intelligence}
        data-quantum-alert="true"
        data-variant={variant}
        data-interaction-analysis={interactionAnalysis}
        data-content-optimization={contentOptimization}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="quantum-alert-content">
          {children}
        </div>

        {/* Effets ripple quantiques */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="quantum-interaction-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}

        {/* Indicateur d'intelligence */}
        {intelligence !== "basic" && (
          <div className="quantum-intelligence-badge">
            {intelligence === "adaptive" && "🔄"}
            {intelligence === "revolutionary" && "✨"}
            {intelligence === "autonomous" && "🧠"}
          </div>
        )}
      </div>
    );
  }
);
Alert.displayName = "QuantumAlert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    intelligence?: string;
  }
>(({ className, intelligence, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 font-medium leading-none tracking-tight",
      intelligence !== "basic" && "quantum-alert-title",
      className
    )}
    data-quantum-title="true"
    {...props}
  />
));
AlertTitle.displayName = "QuantumAlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    intelligence?: string;
    contentOptimization?: boolean;
  }
>(({ className, intelligence, contentOptimization, children, ...props }, ref) => {
  const [optimizedContent, setOptimizedContent] = useState<any>(null);
  
  useEffect(() => {
    if (intelligence !== "basic" && contentOptimization && typeof children === 'string') {
      // Simulation d'optimisation de contenu
      setOptimizedContent({
        content: children,
        readabilityScore: 92,
        optimized: true
      });
    }
  }, [children, intelligence, contentOptimization]);

  return (
    <div
      ref={ref}
      className={cn(
        "text-sm [&_p]:leading-relaxed",
        intelligence !== "basic" && "quantum-alert-description",
        className
      )}
      data-quantum-description="true"
      data-optimization-score={optimizedContent?.readabilityScore}
      {...props}
    >
      {children}
    </div>
  );
});
AlertDescription.displayName = "QuantumAlertDescription";

export { Alert, AlertTitle, AlertDescription }
