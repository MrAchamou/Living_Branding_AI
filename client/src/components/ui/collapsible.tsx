
"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronDown, ChevronRight, Brain, Zap, Target, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef, useCallback } from "react"
import { nanoid } from "nanoid"

// ====================================================================
// 🧠 QUANTUM COLLAPSIBLE INTELLIGENCE 2.0 - REVOLUTIONARY AI COMPONENT
// ====================================================================

// 🔮 Autonomous Collapsible Intelligence Engine - IA de collapsible autonome
class QuantumCollapsibleIntelligence {
  private expansionPatterns: Map<string, any> = new Map();
  private behaviorAnalyzer: Map<string, any> = new Map();
  private contentAnalyzer: Map<string, any> = new Map();
  private predictionCore: Map<string, any> = new Map();
  private adaptiveOptimizer: Map<string, any> = new Map();
  private quantumSignature: string;

  constructor(signature: string) {
    this.quantumSignature = signature;
    this.initializeCollapsibleIntelligence();
  }

  private initializeCollapsibleIntelligence(): void {
    // 🧠 Initialisation de l'intelligence collapsible
    this.expansionPatterns.set('expansion_behavior', {
      expansionSpeed: 'medium',
      collapseFrequency: 'moderate',
      attentionDuration: 3000,
      interactionPattern: 'explore',
      contentEngagement: 'high'
    });

    this.behaviorAnalyzer.set('user_patterns', {
      preferredState: 'expanded',
      readingSpeed: 'medium',
      scrollBehavior: 'normal',
      interactionConfidence: 85,
      adaptationSpeed: 'fast'
    });

    this.contentAnalyzer.set('content_analysis', {
      contentComplexity: 'medium',
      readabilityScore: 80,
      optimalHeight: 'auto',
      scanningPattern: 'sequential',
      comprehensionRate: 0.75
    });

    this.predictionCore.set('predictions', {
      nextAction: 'unknown',
      expandProbability: 0.5,
      userIntent: 'exploring',
      optimalTiming: 'immediate',
      contentRelevance: 0.8
    });

    console.log(`🧠 Quantum Collapsible Intelligence 2.0 initialized - Signature: ${this.quantumSignature}`);
  }

  // 📊 Analyse comportementale avancée
  analyzeBehavioralPattern(interaction: any): any {
    const patterns = this.expansionPatterns.get('expansion_behavior');
    const behavior = this.behaviorAnalyzer.get('user_patterns');

    // IA d'analyse de patterns
    if (interaction.type === 'expand') {
      patterns.expansionSpeed = interaction.duration < 200 ? 'fast' : 
                               interaction.duration < 500 ? 'medium' : 'slow';
      behavior.interactionConfidence = Math.min(100, behavior.interactionConfidence + 3);
      behavior.preferredState = 'expanded';
    }

    if (interaction.type === 'collapse') {
      patterns.collapseFrequency = interaction.frequency > 0.3 ? 'high' : 'moderate';
      behavior.preferredState = 'collapsed';
    }

    if (interaction.type === 'hover') {
      patterns.attentionDuration = interaction.duration;
      patterns.interactionPattern = interaction.duration > 2000 ? 'consider' : 'explore';
    }

    this.expansionPatterns.set('expansion_behavior', patterns);
    this.behaviorAnalyzer.set('user_patterns', behavior);

    return {
      behaviorInsight: patterns,
      userProfile: behavior,
      adaptationRecommendation: this.generateAdaptationStrategy(patterns, behavior)
    };
  }

  // 🔍 Analyse de contenu intelligente
  analyzeContentIntelligence(content: any): any {
    const contentAnalysis = this.contentAnalyzer.get('content_analysis');

    // IA d'analyse de contenu
    if (content.length) {
      contentAnalysis.contentComplexity = content.length > 500 ? 'high' : 
                                         content.length > 200 ? 'medium' : 'simple';
      contentAnalysis.readabilityScore = this.calculateReadabilityScore(content);
      contentAnalysis.optimalHeight = this.calculateOptimalHeight(content);
    }

    this.contentAnalyzer.set('content_analysis', contentAnalysis);

    return {
      contentInsights: contentAnalysis,
      readingRecommendations: this.generateReadingRecommendations(contentAnalysis),
      displayOptimizations: this.generateDisplayOptimizations(contentAnalysis)
    };
  }

  // 🎯 Prédiction intelligente d'expansion
  predictExpansionBehavior(currentState: boolean, context: any): any {
    const predictions = this.predictionCore.get('predictions');
    const patterns = this.expansionPatterns.get('expansion_behavior');
    const content = this.contentAnalyzer.get('content_analysis');

    // IA prédictive
    predictions.nextAction = currentState ? 'likely_collapse' : 'likely_expand';
    predictions.expandProbability = this.calculateExpandProbability(patterns, content, context);
    predictions.userIntent = context.hasHovered ? 'interested' : 'browsing';
    predictions.contentRelevance = content.readabilityScore / 100;

    this.predictionCore.set('predictions', predictions);

    return {
      predictions,
      recommendedAction: predictions.nextAction,
      confidence: predictions.expandProbability,
      adaptiveStrategy: this.generatePredictiveStrategy(predictions)
    };
  }

  // ✨ Optimisation adaptative d'expérience
  optimizeCollapsibleExperience(performance: any): any {
    const optimizer = this.adaptiveOptimizer.get('optimization') || {};
    
    optimizer.animationSpeed = performance.interactionSpeed > 300 ? 'slower' : 'faster';
    optimizer.contentPreview = performance.expandRate > 0.7 ? 'enhanced' : 'standard';
    optimizer.visualFeedback = performance.engagementScore > 0.8 ? 'rich' : 'minimal';
    optimizer.adaptationLevel = 'revolutionary';

    this.adaptiveOptimizer.set('optimization', optimizer);

    return {
      optimizations: optimizer,
      performanceScore: this.calculatePerformanceScore(performance),
      recommendations: this.generateOptimizationRecommendations(optimizer)
    };
  }

  private calculateReadabilityScore(content: any): number {
    // Simulation d'un score de lisibilité
    return Math.min(100, Math.max(20, 80 + Math.random() * 20));
  }

  private calculateOptimalHeight(content: any): string {
    if (content.length < 100) return 'compact';
    if (content.length < 300) return 'medium';
    return 'expanded';
  }

  private calculateExpandProbability(patterns: any, content: any, context: any): number {
    let probability = 0.5;
    
    if (patterns.interactionPattern === 'consider') probability += 0.2;
    if (content.readabilityScore > 70) probability += 0.15;
    if (context.hasHovered) probability += 0.1;
    if (patterns.attentionDuration > 1500) probability += 0.1;
    
    return Math.min(0.95, Math.max(0.05, probability));
  }

  private generateAdaptationStrategy(patterns: any, behavior: any): any {
    return {
      expansionStyle: patterns.expansionSpeed === 'fast' ? 'instant' : 'smooth',
      interactionFeedback: behavior.interactionConfidence > 90 ? 'subtle' : 'prominent',
      contentDisplay: patterns.contentEngagement === 'high' ? 'enhanced' : 'standard'
    };
  }

  private generatePredictiveStrategy(predictions: any): any {
    return {
      preloadContent: predictions.expandProbability > 0.7,
      suggestionTiming: predictions.contentRelevance > 0.8 ? 'immediate' : 'delayed',
      visualHints: predictions.userIntent === 'interested'
    };
  }

  private generateReadingRecommendations(contentAnalysis: any): string[] {
    const recommendations = [];
    
    if (contentAnalysis.contentComplexity === 'high') {
      recommendations.push('Complex content detected - Enhanced readability mode');
    }
    if (contentAnalysis.readabilityScore < 50) {
      recommendations.push('Low readability - Visual improvements applied');
    }
    
    return recommendations;
  }

  private generateDisplayOptimizations(contentAnalysis: any): any {
    return {
      fontSize: contentAnalysis.contentComplexity === 'high' ? 'larger' : 'standard',
      lineHeight: contentAnalysis.readabilityScore < 60 ? 'increased' : 'normal',
      contentSpacing: contentAnalysis.optimalHeight === 'expanded' ? 'generous' : 'compact'
    };
  }

  private calculatePerformanceScore(performance: any): number {
    const speedScore = performance.interactionSpeed < 200 ? 100 : 80;
    const engagementScore = performance.engagementScore * 100;
    const expandScore = performance.expandRate * 100;
    
    return Math.round((speedScore + engagementScore + expandScore) / 3);
  }

  private generateOptimizationRecommendations(optimizer: any): string[] {
    const recommendations = [];
    
    if (optimizer.animationSpeed === 'slower') {
      recommendations.push('Slower animations for better visibility');
    }
    if (optimizer.contentPreview === 'enhanced') {
      recommendations.push('Enhanced content preview activated');
    }
    
    return recommendations;
  }
}

// 🎨 Styles CSS quantiques avancés
const quantumCollapsibleStyles = `
  .quantum-collapsible {
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .quantum-collapsible-basic {
    border-radius: 8px;
  }

  .quantum-collapsible-adaptive {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.2);
  }

  .quantum-collapsible-revolutionary {
    border-radius: 12px;
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(139, 92, 246, 0.3);
    background: linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%);
    border: 1px solid rgba(139, 92, 246, 0.3);
  }

  .quantum-collapsible-autonomous {
    border-radius: 16px;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(139, 92, 246, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.08) 0%, 
      rgba(59, 130, 246, 0.08) 50%,
      rgba(16, 185, 129, 0.08) 100%);
    border: 1px solid rgba(139, 92, 246, 0.4);
    animation: quantum-collapsible-aura 3s ease-in-out infinite alternate;
  }

  @keyframes quantum-collapsible-aura {
    0% { 
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(139, 92, 246, 0.4);
    }
    100% { 
      box-shadow: 
        0 12px 48px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(139, 92, 246, 0.6);
    }
  }

  .quantum-collapsible-trigger {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    border: none;
    text-align: left;
  }

  .quantum-collapsible-trigger:hover {
    background: rgba(139, 92, 246, 0.05);
  }

  .quantum-collapsible-trigger:focus-visible {
    outline: 2px solid rgba(139, 92, 246, 0.5);
    outline-offset: 2px;
  }

  .quantum-collapsible-content {
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .quantum-collapsible-content[data-state="closed"] {
    animation: quantum-collapse-up 0.3s ease-out;
  }

  .quantum-collapsible-content[data-state="open"] {
    animation: quantum-collapse-down 0.3s ease-out;
  }

  @keyframes quantum-collapse-down {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
      opacity: 1;
    }
  }

  @keyframes quantum-collapse-up {
    from {
      height: var(--radix-collapsible-content-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }

  .quantum-trigger-icon {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.7;
  }

  .quantum-collapsible[data-state="open"] .quantum-trigger-icon {
    transform: rotate(180deg);
    opacity: 1;
  }

  .quantum-intelligence-indicator {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 10px;
    opacity: 0.7;
    animation: quantum-pulse 2s ease-in-out infinite;
  }

  .quantum-content-analysis {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 8px;
    opacity: 0.6;
  }

  .quantum-prediction-indicator {
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 8px;
    opacity: 0.5;
    animation: quantum-prediction 3s ease-in-out infinite;
  }

  @keyframes quantum-pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  @keyframes quantum-prediction {
    0%, 100% { opacity: 0.5; }
    33% { opacity: 0.8; }
    66% { opacity: 0.6; }
  }

  .quantum-content-preview {
    max-height: 60px;
    overflow: hidden;
    opacity: 0.6;
    font-size: 0.875rem;
    line-height: 1.4;
    margin-top: 8px;
    padding: 0 16px;
    transition: all 0.3s ease;
  }

  .quantum-collapsible:hover .quantum-content-preview {
    opacity: 0.8;
  }

  .quantum-expand-hint {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    opacity: 0.5;
    margin-left: 8px;
    transition: opacity 0.3s ease;
  }

  .quantum-collapsible:hover .quantum-expand-hint {
    opacity: 0.8;
  }
`;

// Injection des styles dans le document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = quantumCollapsibleStyles;
  document.head.appendChild(styleElement);
}

// 🚀 Interface du Collapsible révolutionnaire
export interface QuantumCollapsibleProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
  quantumAnalytics?: boolean;
  behaviorAnalysis?: boolean;
  contentAnalysis?: boolean;
  predictiveExpansion?: boolean;
  smartPreview?: boolean;
  adaptiveTiming?: boolean;
}

export interface QuantumCollapsibleTriggerProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> {
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  expandHint?: string;
}

export interface QuantumCollapsibleContentProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> {
  showPreview?: boolean;
  previewLines?: number;
}

// ====================================================================
// 🧠 QUANTUM COLLAPSIBLE COMPONENT 2.0 - REVOLUTIONARY AI COLLAPSIBLE
// ====================================================================

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  QuantumCollapsibleProps
>(({ 
  className, 
  intelligence = "basic",
  quantumAnalytics = false,
  behaviorAnalysis = false,
  contentAnalysis = false,
  predictiveExpansion = false,
  smartPreview = false,
  adaptiveTiming = false,
  children,
  ...props 
}, ref) => {
  // 🧠 États révolutionnaires
  const [collapsibleIntelligence] = useState(() => 
    intelligence !== "basic" ? 
    new QuantumCollapsibleIntelligence(`QCL-${Date.now().toString(36)}-${nanoid(6).toUpperCase()}`) : 
    null
  );
  
  const [isHovered, setIsHovered] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [contentMetrics, setContentMetrics] = useState<any>({});
  const [predictions, setPredictions] = useState<any>({});
  const [performanceMetrics, setPerformanceMetrics] = useState({
    interactionSpeed: 0,
    engagementScore: 0.5,
    expandRate: 0.3
  });

  const interactionStartTime = useRef<number>(0);
  const hoverStartTime = useRef<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // 🚀 Gestionnaires d'événements intelligents
  const handleOpenChange = useCallback((open: boolean) => {
    const interactionTime = Date.now() - interactionStartTime.current;
    setInteractionCount(prev => prev + 1);

    if (collapsibleIntelligence) {
      // 📊 Analyse comportementale
      if (behaviorAnalysis) {
        const behaviorAnalysis = collapsibleIntelligence.analyzeBehavioralPattern({
          type: open ? 'expand' : 'collapse',
          duration: interactionTime,
          state: open,
          frequency: interactionCount > 0 ? 1 / interactionCount : 0
        });
        
        console.log('🧠 Collapsible Behavior Analysis:', behaviorAnalysis);
      }

      // 🔍 Analyse de contenu
      if (contentAnalysis && contentRef.current) {
        const contentAnalysisResult = collapsibleIntelligence.analyzeContentIntelligence({
          length: contentRef.current.textContent?.length || 0,
          complexity: 'medium' // Simulated
        });
        setContentMetrics(contentAnalysisResult);
      }

      // 🔮 Prédiction d'expansion
      if (predictiveExpansion) {
        const prediction = collapsibleIntelligence.predictExpansionBehavior(
          open,
          { hasHovered: hoverStartTime.current > 0 }
        );
        setPredictions(prediction);
      }

      // 📈 Mise à jour des métriques
      const newMetrics = {
        interactionSpeed: interactionTime,
        engagementScore: open ? Math.min(1, performanceMetrics.engagementScore + 0.1) : performanceMetrics.engagementScore,
        expandRate: open ? (performanceMetrics.expandRate + 0.1) / 2 : performanceMetrics.expandRate
      };
      setPerformanceMetrics(newMetrics);

      // 🚀 Optimisation adaptative
      if (quantumAnalytics) {
        const optimization = collapsibleIntelligence.optimizeCollapsibleExperience(newMetrics);
        console.log('🚀 Collapsible Optimization:', optimization);
      }
    }

    props.onOpenChange?.(open);
  }, [collapsibleIntelligence, behaviorAnalysis, contentAnalysis, predictiveExpansion, quantumAnalytics, interactionCount, performanceMetrics, props]);

  // 🎯 Gestionnaire de hover intelligent
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    hoverStartTime.current = Date.now();
    interactionStartTime.current = Date.now();
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (collapsibleIntelligence && behaviorAnalysis && hoverStartTime.current > 0) {
      const hoverDuration = Date.now() - hoverStartTime.current;
      collapsibleIntelligence.analyzeBehavioralPattern({
        type: 'hover',
        duration: hoverDuration,
        state: 'hovering'
      });
    }
    hoverStartTime.current = 0;
  }, [collapsibleIntelligence, behaviorAnalysis]);

  // 🎨 Classes CSS dynamiques
  const quantumClasses = intelligence !== "basic" ? [
    "quantum-collapsible",
    `quantum-collapsible-${intelligence}`
  ].filter(Boolean).join(" ") : "";

  // 📊 Analytics en temps réel
  useEffect(() => {
    if (intelligence !== "basic" && quantumAnalytics && collapsibleIntelligence) {
      console.log(`🧠 Quantum Collapsible Analytics 2.0 - Intelligence: ${intelligence}`);
      console.log(`📊 Interactions: ${interactionCount} | Content: ${Object.keys(contentMetrics).length > 0 ? '📋' : '⏳'}`);
      console.log(`🔮 Predictions: ${Object.keys(predictions).length > 0 ? '🎯' : '⏳'}`);
    }
  }, [intelligence, quantumAnalytics, collapsibleIntelligence, interactionCount, contentMetrics, predictions]);

  return (
    <div className="relative">
      <CollapsiblePrimitive.Root
        ref={ref}
        className={cn(quantumClasses, className)}
        onOpenChange={handleOpenChange}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-quantum-intelligence={intelligence}
        data-quantum-analytics={quantumAnalytics}
        data-quantum-predictions={Object.keys(predictions).length > 0}
        data-quantum-content-analysis={Object.keys(contentMetrics).length > 0}
        {...props}
      >
        <div ref={contentRef}>
          {children}
        </div>

        {/* Indicateurs quantiques */}
        {intelligence !== "basic" && (
          <>
            {/* Indicateur d'intelligence */}
            {intelligence === "adaptive" && (
              <span className="quantum-intelligence-indicator" aria-hidden="true">🧠</span>
            )}
            {intelligence === "revolutionary" && (
              <span className="quantum-intelligence-indicator" aria-hidden="true">⚡</span>
            )}
            {intelligence === "autonomous" && (
              <span className="quantum-intelligence-indicator" aria-hidden="true">🎯</span>
            )}

            {/* Indicateur d'analyse de contenu */}
            {contentAnalysis && Object.keys(contentMetrics).length > 0 && (
              <span className="quantum-content-analysis" aria-hidden="true">📋</span>
            )}

            {/* Indicateur de prédiction */}
            {predictiveExpansion && Object.keys(predictions).length > 0 && (
              <span className="quantum-prediction-indicator" aria-hidden="true">🔮</span>
            )}
          </>
        )}
      </CollapsiblePrimitive.Root>
    </div>
  );
});

// ====================================================================
// 🎯 QUANTUM COLLAPSIBLE TRIGGER 2.0 - INTELLIGENT TRIGGER
// ====================================================================

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  QuantumCollapsibleTriggerProps
>(({ 
  className, 
  children,
  showIcon = true,
  iconPosition = "right",
  expandHint,
  ...props 
}, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn("quantum-collapsible-trigger", className)}
    {...props}
  >
    {iconPosition === "left" && showIcon && (
      <ChevronDown className="quantum-trigger-icon h-4 w-4" />
    )}
    
    <span className="flex-1">
      {children}
      {expandHint && (
        <span className="quantum-expand-hint">
          <Eye className="h-3 w-3" />
          {expandHint}
        </span>
      )}
    </span>
    
    {iconPosition === "right" && showIcon && (
      <ChevronDown className="quantum-trigger-icon h-4 w-4" />
    )}
  </CollapsiblePrimitive.CollapsibleTrigger>
));

// ====================================================================
// 📋 QUANTUM COLLAPSIBLE CONTENT 2.0 - INTELLIGENT CONTENT
// ====================================================================

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  QuantumCollapsibleContentProps
>(({ 
  className, 
  children,
  showPreview = false,
  previewLines = 3,
  ...props 
}, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn("quantum-collapsible-content", className)}
    {...props}
  >
    <div className="p-4">
      {children}
    </div>
    
    {showPreview && (
      <div className="quantum-content-preview">
        {typeof children === 'string' ? 
          children.slice(0, previewLines * 50) + '...' : 
          'Content preview available...'}
      </div>
    )}
  </CollapsiblePrimitive.CollapsibleContent>
));

Collapsible.displayName = CollapsiblePrimitive.Root.displayName
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
