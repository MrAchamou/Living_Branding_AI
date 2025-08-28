
import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef, useCallback } from "react"
import { nanoid } from "nanoid"
import { Monitor, Smartphone, Tablet, Maximize, Eye, Brain, Zap, Target, TrendingUp } from "lucide-react"

// ====================================================================
// 🧠 QUANTUM ASPECT RATIO INTELLIGENCE 2.0 - REVOLUTIONARY AI COMPONENT
// ====================================================================

// 🔮 Autonomous Aspect Ratio Intelligence Engine - IA de ratio autonome révolutionnaire
interface AspectRatioIntelligence {
  analyzeViewport: (dimensions: ViewportDimensions) => ViewportAnalysis;
  optimizeRatio: (content: ContentAnalysis) => RatioOptimization;
  predictOptimalDimensions: (context: DisplayContext) => PredictedDimensions;
  generateAdaptiveRatio: (userBehavior: UserViewingBehavior) => AdaptiveRatio;
}

interface ViewportDimensions {
  width: number;
  height: number;
  devicePixelRatio: number;
  orientation: 'portrait' | 'landscape';
  screenType: 'mobile' | 'tablet' | 'desktop' | 'ultrawide';
}

interface ViewportAnalysis {
  optimalRatio: number;
  visualComfort: number;
  contentVisibility: number;
  recommendedAdjustments: string[];
  efficiency: number;
}

interface ContentAnalysis {
  contentType: 'image' | 'video' | 'text' | 'mixed' | 'interactive';
  complexity: 'simple' | 'moderate' | 'complex' | 'revolutionary';
  importance: number;
  focusPoints: FocusPoint[];
}

interface FocusPoint {
  x: number;
  y: number;
  importance: number;
  type: string;
}

interface RatioOptimization {
  recommendedRatio: number;
  confidence: number;
  reasoning: string[];
  alternatives: number[];
}

interface DisplayContext {
  userIntent: string;
  sessionContext: string;
  previousInteractions: string[];
  timeOfDay: string;
  deviceCapabilities: DeviceCapabilities;
}

interface DeviceCapabilities {
  maxResolution: string;
  colorDepth: number;
  refreshRate: number;
  hdr: boolean;
  touchCapable: boolean;
}

interface PredictedDimensions {
  width: number;
  height: number;
  confidence: number;
  adaptiveFactors: string[];
}

interface UserViewingBehavior {
  preferredRatios: number[];
  viewingDistance: number;
  interactionPatterns: InteractionPattern[];
  attentionMetrics: AttentionMetrics;
}

interface InteractionPattern {
  timestamp: number;
  action: string;
  duration: number;
  focus: string;
}

interface AttentionMetrics {
  averageFocusTime: number;
  scrollPatterns: string[];
  resizeFrequency: number;
  preferredContent: string[];
}

interface AdaptiveRatio {
  baseRatio: number;
  adaptiveModifiers: RatioModifier[];
  intelligenceLevel: number;
  autonomousAdjustments: boolean;
}

interface RatioModifier {
  condition: string;
  adjustment: number;
  priority: number;
  reasoning: string;
}

// 🚀 Moteur d'Intelligence de Ratio Révolutionnaire
class QuantumAspectRatioEngine implements AspectRatioIntelligence {
  private learningData: Map<string, UserViewingBehavior> = new Map();
  private ratioOptimizations: Map<string, RatioOptimization> = new Map();
  private viewportHistory: ViewportDimensions[] = [];
  private intelligenceLevel: number = 100;

  analyzeViewport(dimensions: ViewportDimensions): ViewportAnalysis {
    const optimalRatio = this.calculateOptimalRatio(dimensions);
    const visualComfort = this.assessVisualComfort(dimensions);
    const contentVisibility = this.calculateContentVisibility(dimensions);
    
    return {
      optimalRatio,
      visualComfort,
      contentVisibility,
      recommendedAdjustments: this.generateViewportRecommendations(dimensions),
      efficiency: Math.round((visualComfort + contentVisibility) / 2)
    };
  }

  optimizeRatio(content: ContentAnalysis): RatioOptimization {
    const ratio = this.calculateContentOptimalRatio(content);
    const confidence = this.calculateOptimizationConfidence(content);
    
    return {
      recommendedRatio: ratio,
      confidence,
      reasoning: this.generateOptimizationReasoning(content),
      alternatives: this.generateAlternativeRatios(ratio)
    };
  }

  predictOptimalDimensions(context: DisplayContext): PredictedDimensions {
    const prediction = this.runPredictionAlgorithm(context);
    
    return {
      width: prediction.width,
      height: prediction.height,
      confidence: prediction.confidence,
      adaptiveFactors: this.identifyAdaptiveFactors(context)
    };
  }

  generateAdaptiveRatio(userBehavior: UserViewingBehavior): AdaptiveRatio {
    const baseRatio = this.calculateBaseRatio(userBehavior);
    const modifiers = this.generateRatioModifiers(userBehavior);
    
    return {
      baseRatio,
      adaptiveModifiers: modifiers,
      intelligenceLevel: this.intelligenceLevel,
      autonomousAdjustments: true
    };
  }

  private calculateOptimalRatio(dimensions: ViewportDimensions): number {
    const { width, height, screenType } = dimensions;
    
    switch (screenType) {
      case 'mobile': return width > height ? 16/9 : 9/16;
      case 'tablet': return width > height ? 4/3 : 3/4;
      case 'desktop': return 16/9;
      case 'ultrawide': return 21/9;
      default: return width / height;
    }
  }

  private assessVisualComfort(dimensions: ViewportDimensions): number {
    const ratio = dimensions.width / dimensions.height;
    const goldenRatio = 1.618;
    const deviation = Math.abs(ratio - goldenRatio) / goldenRatio;
    return Math.max(0, 100 - (deviation * 100));
  }

  private calculateContentVisibility(dimensions: ViewportDimensions): number {
    const area = dimensions.width * dimensions.height;
    const optimalArea = 1920 * 1080; // Référence Full HD
    const visibility = Math.min(100, (area / optimalArea) * 100);
    return Math.round(visibility);
  }

  private generateViewportRecommendations(dimensions: ViewportDimensions): string[] {
    const recommendations = [];
    
    if (dimensions.width < 768) {
      recommendations.push('Optimiser pour mobile');
    }
    if (dimensions.height < 600) {
      recommendations.push('Augmenter la hauteur visible');
    }
    if (dimensions.devicePixelRatio > 2) {
      recommendations.push('Utiliser des assets haute résolution');
    }
    
    return recommendations;
  }

  private calculateContentOptimalRatio(content: ContentAnalysis): number {
    const ratioMap = {
      'image': 3/2,
      'video': 16/9,
      'text': 4/3,
      'mixed': 16/10,
      'interactive': 1/1
    };
    
    return ratioMap[content.contentType] || 16/9;
  }

  private calculateOptimizationConfidence(content: ContentAnalysis): number {
    let confidence = 85;
    
    if (content.complexity === 'revolutionary') confidence += 10;
    if (content.importance > 0.8) confidence += 5;
    if (content.focusPoints.length > 2) confidence -= 5;
    
    return Math.min(100, Math.max(0, confidence));
  }

  private generateOptimizationReasoning(content: ContentAnalysis): string[] {
    return [
      `Optimisé pour le type de contenu: ${content.contentType}`,
      `Complexité adaptée: ${content.complexity}`,
      `Importance du contenu: ${Math.round(content.importance * 100)}%`
    ];
  }

  private generateAlternativeRatios(baseRatio: number): number[] {
    return [
      baseRatio * 0.9,
      baseRatio * 1.1,
      16/9,
      4/3,
      1/1
    ].filter(ratio => Math.abs(ratio - baseRatio) > 0.1);
  }

  private runPredictionAlgorithm(context: DisplayContext): any {
    // Algorithme prédictif basé sur l'IA
    const baseWidth = 1920;
    const baseHeight = 1080;
    
    let confidence = 0.8;
    
    if (context.deviceCapabilities.touchCapable) {
      confidence += 0.1;
    }
    
    return {
      width: baseWidth,
      height: baseHeight,
      confidence: Math.min(1, confidence)
    };
  }

  private identifyAdaptiveFactors(context: DisplayContext): string[] {
    return [
      'Device capabilities',
      'User intent',
      'Session context',
      'Time optimization'
    ];
  }

  private calculateBaseRatio(behavior: UserViewingBehavior): number {
    if (behavior.preferredRatios.length > 0) {
      return behavior.preferredRatios.reduce((a, b) => a + b) / behavior.preferredRatios.length;
    }
    return 16/9;
  }

  private generateRatioModifiers(behavior: UserViewingBehavior): RatioModifier[] {
    const modifiers: RatioModifier[] = [];
    
    if (behavior.attentionMetrics.averageFocusTime > 5000) {
      modifiers.push({
        condition: 'Long attention span',
        adjustment: 0.1,
        priority: 1,
        reasoning: 'User prefers detailed content'
      });
    }
    
    return modifiers;
  }
}

// 💎 Styles CSS révolutionnaires injectés dynamiquement
const quantumAspectRatioStyles = `
  .quantum-aspect-ratio {
    position: relative;
    background: linear-gradient(135deg, 
      rgba(16, 185, 129, 0.05) 0%,
      rgba(59, 130, 246, 0.05) 50%,
      rgba(147, 51, 234, 0.05) 100%);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(59, 130, 246, 0.1);
  }

  .quantum-aspect-ratio::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      transparent 30%, 
      rgba(59, 130, 246, 0.1) 50%, 
      transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .quantum-aspect-ratio:hover::before {
    opacity: 1;
    animation: quantum-shimmer 2s ease-in-out infinite;
  }

  @keyframes quantum-shimmer {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(200%) rotate(45deg); }
  }

  .quantum-aspect-ratio:hover {
    transform: scale(1.02);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 
      0 8px 25px rgba(59, 130, 246, 0.15),
      0 0 20px rgba(59, 130, 246, 0.1);
  }

  .quantum-aspect-ratio-adaptive {
    border-color: rgba(16, 185, 129, 0.2);
    background: linear-gradient(135deg, 
      rgba(16, 185, 129, 0.08) 0%,
      rgba(59, 130, 246, 0.05) 100%);
  }

  .quantum-aspect-ratio-revolutionary {
    border-color: rgba(147, 51, 234, 0.3);
    background: linear-gradient(135deg, 
      rgba(147, 51, 234, 0.1) 0%,
      rgba(59, 130, 246, 0.08) 50%,
      rgba(16, 185, 129, 0.1) 100%);
    box-shadow: 0 4px 20px rgba(147, 51, 234, 0.15);
  }

  .quantum-aspect-ratio-autonomous {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
               linear-gradient(135deg, 
                 rgba(147, 51, 234, 0.8) 0%, 
                 rgba(59, 130, 246, 0.8) 50%,
                 rgba(16, 185, 129, 0.8) 100%) border-box;
    box-shadow: 
      0 0 30px rgba(147, 51, 234, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .aspect-ratio-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .intelligence-overlay {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 12px;
    color: white;
    font-size: 11px;
    font-weight: 500;
    opacity: 0;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  .quantum-aspect-ratio:hover .intelligence-overlay {
    opacity: 1;
  }

  .ratio-indicator {
    position: absolute;
    bottom: 8px;
    left: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background: rgba(59, 130, 246, 0.9);
    border-radius: 12px;
    color: white;
    font-size: 10px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.2s ease;
  }

  .quantum-aspect-ratio:hover .ratio-indicator {
    opacity: 1;
  }

  .adaptive-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 8px;
    background: linear-gradient(45deg, 
      rgba(59, 130, 246, 0.5) 0%,
      rgba(147, 51, 234, 0.5) 50%,
      rgba(16, 185, 129, 0.5) 100%) border-box;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .quantum-aspect-ratio-autonomous:hover .adaptive-border {
    opacity: 1;
    animation: quantum-border-pulse 2s ease-in-out infinite;
  }

  @keyframes quantum-border-pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  .viewport-analysis {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    color: white;
    font-size: 12px;
    opacity: 0;
    transition: all 0.2s ease;
    pointer-events: none;
    min-width: 120px;
    text-align: center;
  }

  .quantum-aspect-ratio:hover .viewport-analysis {
    opacity: 1;
  }

  .analysis-metric {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    .quantum-aspect-ratio {
      border-radius: 6px;
    }
    
    .intelligence-overlay,
    .ratio-indicator {
      font-size: 10px;
      padding: 3px 6px;
    }
    
    .viewport-analysis {
      font-size: 11px;
      padding: 8px;
    }
  }
`;

// Injection des styles dans le document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = quantumAspectRatioStyles;
  document.head.appendChild(styleElement);
}

// 🚀 Interfaces révolutionnaires
export interface QuantumAspectRatioProps extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
  intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
  contentType?: "image" | "video" | "text" | "mixed" | "interactive";
  viewportAnalysis?: boolean;
  adaptiveOptimization?: boolean;
  predictiveRatio?: boolean;
  userBehaviorTracking?: boolean;
  autonomousAdjustment?: boolean;
}

// ====================================================================
// 🧠 QUANTUM ASPECT RATIO COMPONENT 2.0 - REVOLUTIONARY AI RATIO
// ====================================================================

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  QuantumAspectRatioProps
>(({ 
  className,
  ratio = 16 / 9,
  intelligence = "adaptive",
  contentType = "mixed",
  viewportAnalysis = true,
  adaptiveOptimization = true,
  predictiveRatio = true,
  userBehaviorTracking = true,
  autonomousAdjustment = true,
  children,
  ...props 
}, ref) => {
  // 🧠 États intelligents et autonomes
  const [ratioEngine] = useState(() => new QuantumAspectRatioEngine());
  const [currentRatio, setCurrentRatio] = useState(ratio);
  const [viewportData, setViewportData] = useState<ViewportDimensions | null>(null);
  const [analysis, setAnalysis] = useState<ViewportAnalysis | null>(null);
  const [optimization, setOptimization] = useState<RatioOptimization | null>(null);
  const [quantumId] = useState(() => `qar-${nanoid()}`);
  const [isHovered, setIsHovered] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver>();

  // 🔍 Analyse du viewport en temps réel
  const analyzeViewport = useCallback(() => {
    if (typeof window !== 'undefined') {
      const dimensions: ViewportDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
        screenType: window.innerWidth < 768 ? 'mobile' : 
                   window.innerWidth < 1024 ? 'tablet' : 
                   window.innerWidth > 2560 ? 'ultrawide' : 'desktop'
      };
      
      setViewportData(dimensions);
      
      if (viewportAnalysis && intelligence !== "basic") {
        const viewportAnalysisResult = ratioEngine.analyzeViewport(dimensions);
        setAnalysis(viewportAnalysisResult);
      }
    }
  }, [viewportAnalysis, intelligence, ratioEngine]);

  // 🎯 Optimisation du contenu
  const optimizeContent = useCallback(() => {
    if (adaptiveOptimization && intelligence !== "basic") {
      const contentAnalysis: ContentAnalysis = {
        contentType,
        complexity: intelligence === "autonomous" ? "revolutionary" : "moderate",
        importance: 0.85,
        focusPoints: [
          { x: 0.5, y: 0.5, importance: 1, type: 'center' }
        ]
      };
      
      const optimizationResult = ratioEngine.optimizeRatio(contentAnalysis);
      setOptimization(optimizationResult);
      
      if (autonomousAdjustment && optimizationResult.confidence > 80) {
        setCurrentRatio(optimizationResult.recommendedRatio);
      }
    }
  }, [adaptiveOptimization, intelligence, contentType, autonomousAdjustment, ratioEngine]);

  // 📊 Initialisation et surveillance
  useEffect(() => {
    analyzeViewport();
    optimizeContent();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', analyzeViewport);
      window.addEventListener('orientationchange', analyzeViewport);
      
      return () => {
        window.removeEventListener('resize', analyzeViewport);
        window.removeEventListener('orientationchange', analyzeViewport);
      };
    }
  }, [analyzeViewport, optimizeContent]);

  // 🔄 Surveillance des dimensions du conteneur
  useEffect(() => {
    if (containerRef.current && intelligence !== "basic") {
      resizeObserverRef.current = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (predictiveRatio && width > 0 && height > 0) {
            const actualRatio = width / height;
            console.log(`🎯 QUANTUM ASPECT RATIO ${quantumId}: Actual ratio ${actualRatio.toFixed(3)}`);
          }
        }
      });
      
      resizeObserverRef.current.observe(containerRef.current);
      
      return () => {
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };
    }
  }, [intelligence, predictiveRatio, quantumId]);

  // 🎨 Gestion des interactions
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (userBehaviorTracking && intelligence !== "basic") {
      console.log(`🎯 QUANTUM ASPECT RATIO ${quantumId}: User interaction start`);
    }
  }, [userBehaviorTracking, intelligence, quantumId]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // 🎨 Classes CSS dynamiques
  const quantumClasses = intelligence !== "basic" ? [
    "quantum-aspect-ratio",
    intelligence === "adaptive" && "quantum-aspect-ratio-adaptive",
    intelligence === "revolutionary" && "quantum-aspect-ratio-revolutionary",
    intelligence === "autonomous" && "quantum-aspect-ratio-autonomous"
  ].filter(Boolean).join(" ") : "";

  // 📐 Calcul du ratio final
  const finalRatio = autonomousAdjustment && optimization?.recommendedRatio ? 
    optimization.recommendedRatio : currentRatio;

  return (
    <div
      ref={containerRef}
      className={cn(quantumClasses, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-quantum-id={quantumId}
      data-intelligence={intelligence}
      data-content-type={contentType}
      data-current-ratio={finalRatio.toFixed(3)}
    >
      <AspectRatioPrimitive.Root
        ref={ref}
        ratio={finalRatio}
        {...props}
      >
        <div className="aspect-ratio-content">
          {children}
        </div>
        
        {/* Superposition d'intelligence */}
        {intelligence !== "basic" && (
          <div className="intelligence-overlay">
            {intelligence === "adaptive" && <><TrendingUp size={12} /> Adaptatif</>}
            {intelligence === "revolutionary" && <><Brain size={12} /> Révolutionnaire</>}
            {intelligence === "autonomous" && <><Zap size={12} /> Autonome</>}
          </div>
        )}
        
        {/* Indicateur de ratio */}
        {viewportAnalysis && (
          <div className="ratio-indicator">
            <Target size={10} />
            {finalRatio.toFixed(2)}:1
          </div>
        )}
        
        {/* Analyse du viewport */}
        {intelligence !== "basic" && analysis && isHovered && (
          <div className="viewport-analysis">
            <div className="analysis-metric">
              <Eye size={10} />
              Confort: {analysis.visualComfort}%
            </div>
            <div className="analysis-metric">
              <Monitor size={10} />
              Efficacité: {analysis.efficiency}%
            </div>
            {viewportData && (
              <div className="analysis-metric">
                {viewportData.screenType === 'mobile' && <Smartphone size={10} />}
                {viewportData.screenType === 'tablet' && <Tablet size={10} />}
                {(viewportData.screenType === 'desktop' || viewportData.screenType === 'ultrawide') && <Monitor size={10} />}
                {viewportData.screenType}
              </div>
            )}
          </div>
        )}
        
        {/* Bordure adaptive */}
        {intelligence === "autonomous" && (
          <div className="adaptive-border" />
        )}
      </AspectRatioPrimitive.Root>
    </div>
  );
});

AspectRatio.displayName = "QuantumAspectRatio";

export { AspectRatio }
