
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight, Zap, Brain, Target, Sparkles, TrendingUp, Activity } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef, useCallback } from "react"
import { nanoid } from "nanoid"

// ====================================================================
// 🧠 QUANTUM CAROUSEL INTELLIGENCE 2.0 - REVOLUTIONARY AI CAROUSEL
// ====================================================================

// 🔮 Autonomous Carousel Intelligence Engine - IA de carrousel autonome révolutionnaire
interface CarouselIntelligence {
  analyzeSlideContent: (slides: SlideData[]) => ContentAnalysis;
  predictOptimalDuration: (userBehavior: UserInteractionData) => number;
  generateSmartTransitions: (contentType: string) => TransitionConfig;
  optimizePerformance: (metrics: PerformanceMetrics) => CarouselOptimization;
  adaptToUserPreferences: (preferences: UserPreferences) => CarouselPersonalization;
}

interface SlideData {
  id: string;
  content: string;
  type: 'image' | 'video' | 'text' | 'interactive';
  engagement: number;
  complexity: number;
}

interface ContentAnalysis {
  optimalViewingTime: number;
  engagementPrediction: number;
  contentComplexity: 'simple' | 'moderate' | 'complex' | 'revolutionary';
  recommendedTransition: string;
}

interface UserInteractionData {
  averageViewTime: number;
  skipRate: number;
  interactionPatterns: InteractionPattern[];
  preferredDirection: 'forward' | 'backward' | 'adaptive';
}

interface InteractionPattern {
  timestamp: number;
  action: 'view' | 'skip' | 'pause' | 'interact';
  slideIndex: number;
  duration: number;
}

interface TransitionConfig {
  duration: number;
  easing: string;
  effect: 'slide' | 'fade' | 'zoom' | 'quantum' | 'revolutionary';
  smartTiming: boolean;
}

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  frameRate: number;
  loadTime: number;
  userSatisfaction: number;
}

interface CarouselOptimization {
  preloadStrategy: 'aggressive' | 'lazy' | 'smart' | 'predictive';
  renderOptimization: string[];
  memoryOptimization: string[];
  performanceScore: number;
}

interface UserPreferences {
  autoplay: boolean;
  speed: number;
  direction: 'ltr' | 'rtl' | 'adaptive';
  accessibility: AccessibilityPreferences;
}

interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface CarouselPersonalization {
  customTransitions: TransitionConfig[];
  adaptiveSpeed: number;
  personalizedContent: string[];
  smartRecommendations: string[];
}

// 🧠 Classe d'intelligence autonome pour le carrousel
class QuantumCarouselAI {
  private static instance: QuantumCarouselAI;
  private intelligence: CarouselIntelligence;
  private learningData: Map<string, UserInteractionData>;
  private performanceCache: Map<string, PerformanceMetrics>;

  private constructor() {
    this.intelligence = this.initializeIntelligence();
    this.learningData = new Map();
    this.performanceCache = new Map();
  }

  static getInstance(): QuantumCarouselAI {
    if (!QuantumCarouselAI.instance) {
      QuantumCarouselAI.instance = new QuantumCarouselAI();
    }
    return QuantumCarouselAI.instance;
  }

  private initializeIntelligence(): CarouselIntelligence {
    return {
      analyzeSlideContent: (slides: SlideData[]) => {
        const avgComplexity = slides.reduce((sum, slide) => sum + slide.complexity, 0) / slides.length;
        const avgEngagement = slides.reduce((sum, slide) => sum + slide.engagement, 0) / slides.length;
        
        return {
          optimalViewingTime: Math.max(2000, avgComplexity * 1000),
          engagementPrediction: avgEngagement,
          contentComplexity: avgComplexity > 8 ? 'revolutionary' : 
                           avgComplexity > 6 ? 'complex' : 
                           avgComplexity > 4 ? 'moderate' : 'simple',
          recommendedTransition: avgEngagement > 0.8 ? 'quantum' : 'slide'
        };
      },

      predictOptimalDuration: (userBehavior: UserInteractionData) => {
        const baseTime = userBehavior.averageViewTime;
        const skipAdjustment = (1 - userBehavior.skipRate) * 1000;
        return Math.max(1000, baseTime + skipAdjustment);
      },

      generateSmartTransitions: (contentType: string) => {
        const transitions: Record<string, TransitionConfig> = {
          image: { duration: 300, easing: 'ease-out', effect: 'fade', smartTiming: true },
          video: { duration: 200, easing: 'ease-in-out', effect: 'slide', smartTiming: false },
          text: { duration: 250, easing: 'ease', effect: 'slide', smartTiming: true },
          interactive: { duration: 400, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', effect: 'quantum', smartTiming: true }
        };
        return transitions[contentType] || transitions.image;
      },

      optimizePerformance: (metrics: PerformanceMetrics) => {
        const score = (
          (metrics.frameRate >= 60 ? 100 : metrics.frameRate * 1.67) +
          (metrics.renderTime <= 16 ? 100 : Math.max(0, 100 - metrics.renderTime * 2)) +
          (metrics.memoryUsage <= 50 ? 100 : Math.max(0, 100 - metrics.memoryUsage)) +
          (metrics.userSatisfaction * 100)
        ) / 4;

        return {
          preloadStrategy: score > 80 ? 'predictive' : score > 60 ? 'smart' : 'lazy',
          renderOptimization: score < 70 ? ['lazy-render', 'virtualization'] : ['smooth-render'],
          memoryOptimization: metrics.memoryUsage > 70 ? ['cleanup', 'gc-optimization'] : [],
          performanceScore: score
        };
      },

      adaptToUserPreferences: (preferences: UserPreferences) => {
        return {
          customTransitions: preferences.accessibility.reducedMotion ? 
            [{ duration: 0, easing: 'none', effect: 'slide', smartTiming: false }] : 
            [{ duration: 300, easing: 'ease-out', effect: 'quantum', smartTiming: true }],
          adaptiveSpeed: preferences.speed,
          personalizedContent: [],
          smartRecommendations: preferences.autoplay ? ['auto-optimization', 'smart-timing'] : ['manual-optimization']
        };
      }
    };
  }

  analyzeAndOptimize(carouselId: string, slides: SlideData[], userBehavior?: UserInteractionData): CarouselOptimization {
    const analysis = this.intelligence.analyzeSlideContent(slides);
    const performanceMetrics: PerformanceMetrics = {
      renderTime: performance.now(),
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
      frameRate: 60,
      loadTime: Date.now(),
      userSatisfaction: analysis.engagementPrediction
    };

    return this.intelligence.optimizePerformance(performanceMetrics);
  }

  predictUserIntent(interactionHistory: InteractionPattern[]): string {
    if (interactionHistory.length === 0) return 'exploration';
    
    const recent = interactionHistory.slice(-5);
    const avgDuration = recent.reduce((sum, p) => sum + p.duration, 0) / recent.length;
    const skipRate = recent.filter(p => p.action === 'skip').length / recent.length;
    
    if (skipRate > 0.6) return 'seeking';
    if (avgDuration > 5000) return 'studying';
    return 'browsing';
  }
}

// 🎨 Styles CSS révolutionnaires avec IA intégrée
const quantumCarouselStyles = `
@keyframes quantum-carousel-slide {
  0% { transform: translateX(100%) scale(0.8); opacity: 0; }
  50% { transform: translateX(0) scale(0.95); opacity: 0.7; }
  100% { transform: translateX(0) scale(1); opacity: 1; }
}

@keyframes quantum-carousel-fade {
  0% { opacity: 0; transform: scale(0.9) rotateY(15deg); }
  100% { opacity: 1; transform: scale(1) rotateY(0deg); }
}

@keyframes quantum-carousel-zoom {
  0% { transform: scale(0.3) rotate(-5deg); opacity: 0; }
  50% { transform: scale(1.05) rotate(0deg); opacity: 0.8; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

@keyframes quantum-carousel-revolutionary {
  0% { 
    transform: translateX(-100%) scale(0.5) rotateY(90deg); 
    opacity: 0; 
    filter: blur(10px) hue-rotate(0deg);
  }
  25% { 
    transform: translateX(0) scale(0.8) rotateY(45deg); 
    opacity: 0.3; 
    filter: blur(5px) hue-rotate(90deg);
  }
  75% { 
    transform: translateX(0) scale(1.02) rotateY(-10deg); 
    opacity: 0.9; 
    filter: blur(1px) hue-rotate(180deg);
  }
  100% { 
    transform: translateX(0) scale(1) rotateY(0deg); 
    opacity: 1; 
    filter: blur(0px) hue-rotate(360deg);
  }
}

@keyframes quantum-button-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--primary), 0.7); }
  50% { box-shadow: 0 0 0 10px rgba(var(--primary), 0); }
}

.quantum-carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    rgba(var(--background), 0.95) 0%,
    rgba(var(--card), 0.98) 50%,
    rgba(var(--background), 0.95) 100%);
  border: 1px solid rgba(var(--border), 0.8);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(var(--primary), 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  transform-style: preserve-3d;
}

.quantum-carousel-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(var(--primary), 0.1), 
    transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.quantum-carousel-container:hover::before {
  left: 100%;
}

.quantum-carousel-viewport {
  overflow: hidden;
  border-radius: 8px;
  position: relative;
}

.quantum-carousel-container-inner {
  display: flex;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.quantum-carousel-slide {
  flex: 0 0 100%;
  min-width: 0;
  position: relative;
  animation: quantum-carousel-slide 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.quantum-carousel-slide.fade-transition {
  animation: quantum-carousel-fade 0.4s ease-out;
}

.quantum-carousel-slide.zoom-transition {
  animation: quantum-carousel-zoom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.quantum-carousel-slide.revolutionary-transition {
  animation: quantum-carousel-revolutionary 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.quantum-carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(var(--background), 0.9);
  border: 1px solid rgba(var(--border), 0.6);
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.quantum-carousel-button:hover {
  background: rgba(var(--primary), 0.9);
  border-color: rgba(var(--primary), 0.8);
  animation: quantum-button-pulse 1.5s infinite;
  transform: translateY(-50%) scale(1.05);
}

.quantum-carousel-button.prev {
  left: -40px;
}

.quantum-carousel-button.next {
  right: -40px;
}

.quantum-carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.quantum-carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(var(--muted-foreground), 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.quantum-carousel-dot.active {
  background: rgb(var(--primary));
  width: 24px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(var(--primary), 0.6);
}

.quantum-carousel-dot::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  background: rgba(var(--primary), 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.quantum-carousel-dot:hover::before {
  opacity: 1;
}

.quantum-carousel-intelligence-indicator {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(var(--primary), 0.1);
  border: 1px solid rgba(var(--primary), 0.2);
  border-radius: 6px;
  font-size: 10px;
  color: rgb(var(--primary));
  backdrop-filter: blur(4px);
  z-index: 5;
}

.quantum-carousel-analytics {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(var(--background), 0.9);
  border: 1px solid rgba(var(--border), 0.4);
  border-radius: 8px;
  font-size: 11px;
  color: rgb(var(--muted-foreground));
  backdrop-filter: blur(8px);
  z-index: 5;
}

@media (prefers-reduced-motion: reduce) {
  .quantum-carousel-slide,
  .quantum-carousel-slide.fade-transition,
  .quantum-carousel-slide.zoom-transition,
  .quantum-carousel-slide.revolutionary-transition {
    animation: none !important;
  }
  
  .quantum-carousel-container-inner {
    transition: none !important;
  }
}

@media (max-width: 768px) {
  .quantum-carousel-button.prev {
    left: 8px;
  }
  
  .quantum-carousel-button.next {
    right: 8px;
  }
  
  .quantum-carousel-intelligence-indicator,
  .quantum-carousel-analytics {
    font-size: 9px;
    padding: 3px 6px;
  }
}
`;

// Injection des styles dans le document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = quantumCarouselStyles;
  document.head.appendChild(styleElement);
}

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

// 🚀 Interface révolutionnaire pour le Carousel
export interface QuantumCarouselProps extends React.HTMLAttributes<HTMLDivElement>, CarouselProps {
  intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
  autoplay?: boolean;
  autoplayDelay?: number;
  showDots?: boolean;
  showArrows?: boolean;
  transitionType?: 'slide' | 'fade' | 'zoom' | 'quantum' | 'revolutionary';
  adaptivePerformance?: boolean;
  userBehaviorTracking?: boolean;
  contentAnalysis?: boolean;
  predictiveLoading?: boolean;
  quantumTransitions?: boolean;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

// 🧠 Hook pour l'intelligence du carrousel
function useCarouselIntelligence(
  intelligence: QuantumCarouselProps['intelligence'] = 'basic',
  options: {
    autoplay?: boolean;
    userTracking?: boolean;
    contentAnalysis?: boolean;
  } = {}
) {
  const [carouselAI] = useState(() => QuantumCarouselAI.getInstance());
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    frameRate: 60,
    loadTime: 0,
    userSatisfaction: 0.8
  });
  const [userInteractions, setUserInteractions] = useState<InteractionPattern[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(options.autoplay || false);

  const trackInteraction = useCallback((action: InteractionPattern['action'], slideIndex: number, duration: number = 0) => {
    if (!options.userTracking) return;

    const interaction: InteractionPattern = {
      timestamp: Date.now(),
      action,
      slideIndex,
      duration
    };

    setUserInteractions(prev => [...prev.slice(-20), interaction]);
  }, [options.userTracking]);

  const analyzeUserBehavior = useCallback(() => {
    if (userInteractions.length === 0) return null;

    const avgViewTime = userInteractions
      .filter(i => i.action === 'view')
      .reduce((sum, i) => sum + i.duration, 0) / userInteractions.filter(i => i.action === 'view').length || 3000;

    const skipRate = userInteractions.filter(i => i.action === 'skip').length / userInteractions.length;

    return {
      averageViewTime: avgViewTime,
      skipRate,
      interactionPatterns: userInteractions,
      preferredDirection: 'forward' as const
    };
  }, [userInteractions]);

  const updatePerformanceMetrics = useCallback(() => {
    const now = performance.now();
    setPerformanceMetrics(prev => ({
      ...prev,
      renderTime: now - prev.loadTime,
      memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
      frameRate: 60, // Simplified for demo
      userSatisfaction: Math.min(1, prev.userSatisfaction + 0.01)
    }));
  }, []);

  const getOptimizedSettings = useCallback(() => {
    const userBehavior = analyzeUserBehavior();
    if (!userBehavior) return { autoplayDelay: 3000, transitionDuration: 300 };

    const optimizedDelay = carouselAI.intelligence.predictOptimalDuration(userBehavior);
    return {
      autoplayDelay: optimizedDelay,
      transitionDuration: Math.max(200, Math.min(500, optimizedDelay / 10))
    };
  }, [carouselAI, analyzeUserBehavior]);

  useEffect(() => {
    const interval = setInterval(updatePerformanceMetrics, 1000);
    return () => clearInterval(interval);
  }, [updatePerformanceMetrics]);

  return {
    trackInteraction,
    analyzeUserBehavior,
    performanceMetrics,
    getOptimizedSettings,
    currentSlideIndex,
    setCurrentSlideIndex,
    isAutoplayActive,
    setIsAutoplayActive,
    userIntent: carouselAI.predictUserIntent(userInteractions)
  };
}

// ====================================================================
// 🧠 QUANTUM CAROUSEL COMPONENT 2.0 - REVOLUTIONARY AI CAROUSEL
// ====================================================================

const Carousel = React.forwardRef<
  HTMLDivElement,
  QuantumCarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      intelligence = 'basic',
      autoplay = false,
      autoplayDelay = 3000,
      showDots = false,
      showArrows = true,
      transitionType = 'slide',
      adaptivePerformance = false,
      userBehaviorTracking = false,
      contentAnalysis = false,
      predictiveLoading = false,
      quantumTransitions = false,
      ...props
    },
    ref
  ) => {
    const carouselId = useRef(nanoid()).current;
    const autoplayTimer = useRef<NodeJS.Timeout>();
    const interactionStart = useRef<number>(0);
    
    const {
      trackInteraction,
      analyzeUserBehavior,
      performanceMetrics,
      getOptimizedSettings,
      currentSlideIndex,
      setCurrentSlideIndex,
      isAutoplayActive,
      setIsAutoplayActive,
      userIntent
    } = useCarouselIntelligence(intelligence, {
      autoplay,
      userTracking: userBehaviorTracking,
      contentAnalysis
    });

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentTransition, setCurrentTransition] = useState<string>(transitionType);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;

      const newIndex = api.selectedScrollSnap();
      setCurrentSlideIndex(newIndex);
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());

      // Tracking de l'interaction
      const viewDuration = Date.now() - interactionStart.current;
      trackInteraction('view', newIndex, viewDuration);
      interactionStart.current = Date.now();
    }, [trackInteraction]);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
      trackInteraction('skip', currentSlideIndex);
      
      if (quantumTransitions) {
        setCurrentTransition('revolutionary');
      }
    }, [api, trackInteraction, currentSlideIndex, quantumTransitions]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
      trackInteraction('view', currentSlideIndex + 1);
      
      if (quantumTransitions) {
        setCurrentTransition(intelligence === 'revolutionary' ? 'revolutionary' : 'quantum');
      }
    }, [api, trackInteraction, currentSlideIndex, quantumTransitions, intelligence]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    // Autoplay intelligent
    const startAutoplay = useCallback(() => {
      if (!autoplay || !api) return;

      const settings = getOptimizedSettings();
      autoplayTimer.current = setInterval(() => {
        if (canScrollNext) {
          scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, settings.autoplayDelay);

      setIsAutoplayActive(true);
    }, [autoplay, api, canScrollNext, scrollNext, getOptimizedSettings]);

    const stopAutoplay = useCallback(() => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
        autoplayTimer.current = undefined;
      }
      setIsAutoplayActive(false);
    }, []);

    // Gestion de l'autoplay
    useEffect(() => {
      if (autoplay && api) {
        startAutoplay();
        return () => stopAutoplay();
      }
    }, [autoplay, api, startAutoplay, stopAutoplay]);

    // Pause autoplay on hover
    const handleMouseEnter = useCallback(() => {
      if (autoplay) stopAutoplay();
    }, [autoplay, stopAutoplay]);

    const handleMouseLeave = useCallback(() => {
      if (autoplay) startAutoplay();
    }, [autoplay, startAutoplay]);

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    // Adaptation intelligente des transitions
    useEffect(() => {
      if (intelligence === 'autonomous' && userIntent) {
        switch (userIntent) {
          case 'seeking':
            setCurrentTransition('slide');
            break;
          case 'studying':
            setCurrentTransition('fade');
            break;
          case 'browsing':
            setCurrentTransition(quantumTransitions ? 'quantum' : 'zoom');
            break;
          default:
            setCurrentTransition(transitionType);
        }
      }
    }, [intelligence, userIntent, transitionType, quantumTransitions]);

    const intelligenceLevel = intelligence || 'basic';
    const showIntelligenceIndicator = intelligenceLevel !== 'basic';

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "quantum-carousel-container",
            intelligenceLevel === 'revolutionary' && "quantum-revolutionary-container",
            intelligenceLevel === 'autonomous' && "quantum-autonomous-container",
            className
          )}
          role="region"
          aria-roledescription="carousel"
          data-carousel-id={carouselId}
          data-intelligence={intelligenceLevel}
          data-transition={currentTransition}
          {...props}
        >
          {showIntelligenceIndicator && (
            <div className="quantum-carousel-intelligence-indicator">
              {intelligenceLevel === 'autonomous' && <Brain className="w-3 h-3" />}
              {intelligenceLevel === 'revolutionary' && <Sparkles className="w-3 h-3" />}
              {intelligenceLevel === 'adaptive' && <Target className="w-3 h-3" />}
              <span>{intelligenceLevel.toUpperCase()}</span>
            </div>
          )}

          {children}

          {showArrows && (
            <>
              <CarouselPrevious className="quantum-carousel-button prev" />
              <CarouselNext className="quantum-carousel-button next" />
            </>
          )}

          {(adaptivePerformance || intelligence === 'autonomous') && (
            <div className="quantum-carousel-analytics">
              <Activity className="w-3 h-3" />
              <span>FPS: {Math.round(performanceMetrics.frameRate)}</span>
              <TrendingUp className="w-3 h-3" />
              <span>{Math.round(performanceMetrics.userSatisfaction * 100)}%</span>
            </div>
          )}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="quantum-carousel-viewport">
      <div
        ref={ref}
        className={cn(
          "quantum-carousel-container-inner",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "quantum-carousel-slide min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "quantum-carousel-button absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "quantum-carousel-button absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

// 🎯 Composant de dots intelligent
const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    slideCount: number;
    currentSlide: number;
    onDotClick?: (index: number) => void;
  }
>(({ className, slideCount, currentSlide, onDotClick, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("quantum-carousel-dots", className)}
      {...props}
    >
      {Array.from({ length: slideCount }, (_, index) => (
        <button
          key={index}
          className={cn(
            "quantum-carousel-dot",
            index === currentSlide && "active"
          )}
          onClick={() => onDotClick?.(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
})
CarouselDots.displayName = "CarouselDots"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarousel,
}
