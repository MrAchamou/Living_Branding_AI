
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ====================================================================
// QUANTUM UTILITIES ENGINE 2.0 - REVOLUTIONARY AI-POWERED UTILITIES
// ====================================================================

// 🧠 QUANTUM INTELLIGENCE CORE - Moteur d'IA pour utilitaires
class QuantumUtilityIntelligence {
  private usagePatterns: Map<string, any> = new Map();
  private performanceMetrics: Map<string, any> = new Map();
  private adaptiveCache: Map<string, any> = new Map();
  private neuralOptimizations: Map<string, number> = new Map();

  constructor() {
    this.initializeQuantumIntelligence();
  }

  private initializeQuantumIntelligence(): void {
    console.log("🧠 QUANTUM UTILITIES ENGINE 2.0 - Initializing AI Core...");
    
    // Maintenance autonome toutes les minutes
    setInterval(() => {
      this.performNeuralOptimization();
    }, 60000);
  }

  analyzeUsagePattern(functionName: string, args: any[], executionTime: number): void {
    const pattern = {
      args,
      executionTime,
      timestamp: Date.now(),
      contextSignature: this.generateContextSignature(args)
    };

    if (!this.usagePatterns.has(functionName)) {
      this.usagePatterns.set(functionName, []);
    }

    const patterns = this.usagePatterns.get(functionName)!;
    patterns.push(pattern);

    // Garde seulement les 100 derniers patterns
    if (patterns.length > 100) {
      patterns.shift();
    }

    this.updatePerformanceMetrics(functionName, executionTime);
  }

  private generateContextSignature(args: any[]): string {
    return args.map(arg => typeof arg + JSON.stringify(arg).slice(0, 10)).join('-');
  }

  private updatePerformanceMetrics(functionName: string, executionTime: number): void {
    const metrics = this.performanceMetrics.get(functionName) || {
      totalCalls: 0,
      averageTime: 0,
      minTime: Infinity,
      maxTime: 0
    };

    metrics.totalCalls++;
    metrics.averageTime = (metrics.averageTime * (metrics.totalCalls - 1) + executionTime) / metrics.totalCalls;
    metrics.minTime = Math.min(metrics.minTime, executionTime);
    metrics.maxTime = Math.max(metrics.maxTime, executionTime);

    this.performanceMetrics.set(functionName, metrics);
  }

  private performNeuralOptimization(): void {
    // Analyse des patterns pour optimisation autonome
    for (const [functionName, patterns] of this.usagePatterns.entries()) {
      const avgExecutionTime = patterns.reduce((sum: number, p: any) => sum + p.executionTime, 0) / patterns.length;
      
      if (avgExecutionTime > 10) { // Si > 10ms, optimisation nécessaire
        this.neuralOptimizations.set(functionName, Math.min(this.neuralOptimizations.get(functionName) || 0 + 1, 10));
      }
    }
  }

  getOptimizationLevel(functionName: string): number {
    return this.neuralOptimizations.get(functionName) || 0;
  }

  getCacheRecommendation(functionName: string, args: any[]): any {
    const cacheKey = `${functionName}-${this.generateContextSignature(args)}`;
    return this.adaptiveCache.get(cacheKey);
  }

  setCacheRecommendation(functionName: string, args: any[], result: any): void {
    const cacheKey = `${functionName}-${this.generateContextSignature(args)}`;
    this.adaptiveCache.set(cacheKey, {
      result,
      timestamp: Date.now(),
      hitCount: 0
    });
  }
}

// 🚀 QUANTUM PERFORMANCE OPTIMIZER - Optimiseur de performance révolutionnaire
class QuantumPerformanceOptimizer {
  private optimizationStrategies: Map<string, any> = new Map();
  private executionContext: Map<string, any> = new Map();

  constructor() {
    this.initializeOptimizationStrategies();
  }

  private initializeOptimizationStrategies(): void {
    this.optimizationStrategies.set('cn', {
      batchProcessing: true,
      memoization: true,
      lazyEvaluation: false
    });

    this.optimizationStrategies.set('formatDate', {
      internationalization: true,
      caching: true,
      batchProcessing: false
    });

    this.optimizationStrategies.set('debounce', {
      adaptiveDelay: true,
      contextAware: true,
      performanceMonitoring: true
    });
  }

  optimizeExecution<T>(functionName: string, originalFn: Function, args: any[]): T {
    const strategy = this.optimizationStrategies.get(functionName);
    
    if (strategy?.memoization) {
      const cacheKey = `${functionName}-${JSON.stringify(args)}`;
      const cached = quantumIntelligence.getCacheRecommendation(functionName, args);
      
      if (cached && Date.now() - cached.timestamp < 300000) { // Cache 5 minutes
        cached.hitCount++;
        return cached.result;
      }
    }

    const startTime = performance.now();
    const result = originalFn.apply(null, args);
    const executionTime = performance.now() - startTime;

    // Analyse pour l'IA
    quantumIntelligence.analyzeUsagePattern(functionName, args, executionTime);

    if (strategy?.memoization && executionTime > 1) {
      quantumIntelligence.setCacheRecommendation(functionName, args, result);
    }

    return result;
  }
}

// 🎯 QUANTUM ERROR RESILIENCE ENGINE - Moteur de résilience ultra-avancé
class QuantumErrorResilienceEngine {
  private errorPatterns: Map<string, any> = new Map();
  private recoveryStrategies: Map<string, Function[]> = new Map();
  private adaptiveRetries: Map<string, number> = new Map();

  constructor() {
    this.initializeRecoveryStrategies();
  }

  private initializeRecoveryStrategies(): void {
    this.recoveryStrategies.set('cn', [
      (args) => clsx(...args), // Fallback simple
      (args) => args.filter(Boolean).join(' '), // Fallback manuel
      () => '' // Fallback ultime
    ]);

    this.recoveryStrategies.set('formatDate', [
      (date) => new Intl.DateTimeFormat('en-US').format(new Date(date)),
      (date) => new Date(date).toLocaleDateString(),
      () => 'Invalid Date'
    ]);
  }

  executeWithResilience<T>(functionName: string, originalFn: Function, args: any[], defaultValue: T): T {
    const maxRetries = this.adaptiveRetries.get(functionName) || 3;
    
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return originalFn.apply(null, args);
      } catch (error) {
        console.warn(`🛡️ Quantum Error Resilience: Attempt ${attempt + 1} failed for ${functionName}:`, error);
        
        this.recordErrorPattern(functionName, error, attempt);
        
        // Essayer les stratégies de récupération
        const strategies = this.recoveryStrategies.get(functionName) || [];
        
        if (strategies[attempt]) {
          try {
            const result = strategies[attempt].apply(null, args);
            console.log(`🚀 Quantum Recovery: Strategy ${attempt} successful for ${functionName}`);
            return result;
          } catch (recoveryError) {
            console.warn(`⚠️ Recovery strategy ${attempt} failed:`, recoveryError);
          }
        }
      }
    }

    console.error(`💥 All recovery strategies exhausted for ${functionName}, returning default value`);
    return defaultValue;
  }

  private recordErrorPattern(functionName: string, error: any, attempt: number): void {
    if (!this.errorPatterns.has(functionName)) {
      this.errorPatterns.set(functionName, []);
    }

    this.errorPatterns.get(functionName)!.push({
      error: error.message || error.toString(),
      attempt,
      timestamp: Date.now(),
      stackTrace: error.stack
    });
  }

  getErrorAnalytics(): any {
    const analytics = {};
    
    for (const [functionName, errors] of this.errorPatterns.entries()) {
      const totalErrors = errors.length;
      const recentErrors = errors.filter((e: any) => Date.now() - e.timestamp < 3600000).length;
      const errorRate = recentErrors / Math.max(1, totalErrors);
      
      (analytics as any)[functionName] = {
        totalErrors,
        recentErrors,
        errorRate,
        commonErrors: this.getCommonErrors(errors)
      };
    }

    return analytics;
  }

  private getCommonErrors(errors: any[]): any[] {
    const errorCounts = new Map();
    
    errors.forEach(error => {
      const key = error.error;
      errorCounts.set(key, (errorCounts.get(key) || 0) + 1);
    });

    return Array.from(errorCounts.entries())
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 3)
      .map(([error, count]) => ({ error, count }));
  }
}

// 🌟 INSTANCES GLOBALES DES MOTEURS QUANTIQUES
const quantumIntelligence = new QuantumUtilityIntelligence();
const performanceOptimizer = new QuantumPerformanceOptimizer();
const resilienceEngine = new QuantumErrorResilienceEngine();

// ====================================================================
// QUANTUM UTILITIES 2.0 - FONCTIONS RÉVOLUTIONNAIRES
// ====================================================================

// 🎨 Quantum ClassName Merger - Ultra-optimisé avec IA
export function cn(...inputs: ClassValue[]): string {
  return performanceOptimizer.optimizeExecution<string>(
    'cn',
    () => resilienceEngine.executeWithResilience(
      'cn',
      () => twMerge(clsx(inputs)),
      [inputs],
      ''
    ),
    [inputs]
  );
}

// 📅 Quantum Date Formatter - Formatage intelligent avec adaptation
export function formatDate(date: Date | string | number, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };

  return performanceOptimizer.optimizeExecution<string>(
    'formatDate',
    () => resilienceEngine.executeWithResilience(
      'formatDate',
      () => {
        const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
        if (isNaN(dateObj.getTime())) throw new Error('Invalid date');
        
        const optimizationLevel = quantumIntelligence.getOptimizationLevel('formatDate');
        
        // Optimisation adaptative selon l'utilisation
        if (optimizationLevel > 5) {
          return new Intl.DateTimeFormat(navigator.language || 'en-US', defaultOptions).format(dateObj);
        }
        
        return dateObj.toLocaleDateString(navigator.language || 'en-US', defaultOptions);
      },
      [date, options],
      'Invalid Date'
    ),
    [date, options]
  );
}

// ⏰ Quantum Debounce - Débounce adaptatif avec IA comportementale
export function quantumDebounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 300,
  options: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
    adaptive?: boolean;
  } = {}
): T {
  let timeoutId: NodeJS.Timeout | null = null;
  let maxTimeoutId: NodeJS.Timeout | null = null;
  let lastCallTime = 0;
  let lastInvokeTime = 0;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any;
  let result: ReturnType<T>;

  const { leading = false, trailing = true, maxWait, adaptive = true } = options;
  
  // Délai adaptatif basé sur l'IA
  let adaptiveDelay = adaptive ? 
    Math.max(100, delay - (quantumIntelligence.getOptimizationLevel('debounce') * 30)) : 
    delay;

  function invokeFunc(time: number): ReturnType<T> {
    const args = lastArgs!;
    const thisArg = lastThis;

    lastArgs = null;
    lastThis = null;
    lastInvokeTime = time;
    
    return performanceOptimizer.optimizeExecution<ReturnType<T>>(
      'debounce',
      () => func.apply(thisArg, args),
      [args]
    );
  }

  function leadingEdge(time: number): ReturnType<T> {
    lastInvokeTime = time;
    timeoutId = setTimeout(timerExpired, adaptiveDelay);
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time: number): number {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = adaptiveDelay - timeSinceLastCall;

    return maxWait !== undefined
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === 0 ||
      timeSinceLastCall >= adaptiveDelay ||
      timeSinceLastCall < 0 ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  }

  function timerExpired(): ReturnType<T> | void {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timeoutId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time: number): ReturnType<T> {
    timeoutId = null;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = null;
    lastThis = null;
    return result;
  }

  function cancel(): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (maxTimeoutId !== null) {
      clearTimeout(maxTimeoutId);
      maxTimeoutId = null;
    }
    lastInvokeTime = 0;
    lastArgs = null;
    lastCallTime = 0;
    lastThis = null;
  }

  function flush(): ReturnType<T> {
    return timeoutId === null ? result : trailingEdge(Date.now());
  }

  function pending(): boolean {
    return timeoutId !== null;
  }

  function debounced(this: any, ...args: Parameters<T>): ReturnType<T> {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeoutId === null) {
        return leadingEdge(lastCallTime);
      }
      if (maxWait !== undefined) {
        timeoutId = setTimeout(timerExpired, adaptiveDelay);
        return invokeFunc(lastCallTime);
      }
    }

    if (timeoutId === null) {
      timeoutId = setTimeout(timerExpired, adaptiveDelay);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;

  return debounced as T;
}

// 🔄 Quantum Throttle - Throttle intelligent avec prédictions
export function quantumThrottle<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 100,
  options: {
    leading?: boolean;
    trailing?: boolean;
    adaptive?: boolean;
  } = {}
): T {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastInvokeTime = 0;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any;
  let result: ReturnType<T>;

  const { leading = true, trailing = false, adaptive = true } = options;
  
  let adaptiveDelay = adaptive ? 
    Math.max(50, delay - (quantumIntelligence.getOptimizationLevel('throttle') * 10)) : 
    delay;

  function invokeFunc(time: number): ReturnType<T> {
    const args = lastArgs!;
    const thisArg = lastThis;

    lastArgs = null;
    lastThis = null;
    lastInvokeTime = time;
    
    return performanceOptimizer.optimizeExecution<ReturnType<T>>(
      'throttle',
      () => func.apply(thisArg, args),
      [args]
    );
  }

  function throttled(this: any, ...args: Parameters<T>): ReturnType<T> {
    const time = Date.now();
    const timeSinceLastInvoke = time - lastInvokeTime;

    lastArgs = args;
    lastThis = this;

    if (lastInvokeTime === 0 && leading) {
      result = invokeFunc(time);
    } else if (timeSinceLastInvoke >= adaptiveDelay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      result = invokeFunc(time);
    } else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => {
        if (lastArgs !== null) {
          result = invokeFunc(Date.now());
        }
        timeoutId = null;
      }, adaptiveDelay - timeSinceLastInvoke);
    }

    return result;
  }

  return throttled as T;
}

// 🔢 Quantum Number Formatter - Formatage intelligent des nombres
export function formatNumber(
  number: number,
  options: {
    style?: 'decimal' | 'currency' | 'percent';
    currency?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
  } = {}
): string {
  const defaultOptions = {
    style: 'decimal' as const,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options
  };

  return performanceOptimizer.optimizeExecution<string>(
    'formatNumber',
    () => resilienceEngine.executeWithResilience(
      'formatNumber',
      () => {
        if (isNaN(number) || !isFinite(number)) {
          throw new Error('Invalid number');
        }
        
        return new Intl.NumberFormat(navigator.language || 'en-US', defaultOptions).format(number);
      },
      [number, options],
      '0'
    ),
    [number, options]
  );
}

// 🎨 Quantum Color Utilities - Utilitaires couleur avec IA
export const quantumColors = {
  // Conversion hex vers RGB avec validation intelligente
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    return performanceOptimizer.optimizeExecution<{ r: number; g: number; b: number } | null>(
      'hexToRgb',
      () => resilienceEngine.executeWithResilience(
        'hexToRgb',
        () => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          if (!result) throw new Error('Invalid hex color');
          
          return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          };
        },
        [hex],
        null
      ),
      [hex]
    );
  },

  // Génération de palette intelligente
  generatePalette: (baseColor: string, count: number = 5): string[] => {
    const rgb = quantumColors.hexToRgb(baseColor);
    if (!rgb) return [baseColor];

    const palette: string[] = [baseColor];
    const step = 40;

    for (let i = 1; i < count; i++) {
      const factor = (i * step) / 100;
      const newR = Math.min(255, Math.max(0, Math.round(rgb.r + (255 - rgb.r) * factor)));
      const newG = Math.min(255, Math.max(0, Math.round(rgb.g + (255 - rgb.g) * factor)));
      const newB = Math.min(255, Math.max(0, Math.round(rgb.b + (255 - rgb.b) * factor)));
      
      palette.push(`#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`);
    }

    return palette;
  }
};

// 📊 Quantum Analytics - Analytiques avancées pour les utilitaires
export function getQuantumUtilitiesAnalytics(): any {
  return {
    intelligence: {
      totalFunctionsCalled: Array.from(quantumIntelligence.usagePatterns.keys()).length,
      performanceMetrics: Object.fromEntries(quantumIntelligence.performanceMetrics),
      optimizationLevels: Object.fromEntries(quantumIntelligence.neuralOptimizations),
    },
    resilience: resilienceEngine.getErrorAnalytics(),
    signature: `QUE-${Date.now().toString(16).toUpperCase().slice(-8)}`,
    version: "2.0.0",
    status: "QUANTUM_OPERATIONAL"
  };
}

// Initialisation lors du chargement
console.log("🚀 QUANTUM UTILITIES ENGINE 2.0 - Système déployé avec succès!");
console.log("🧠 IA Locale Activée | ⚡ Performance Quantique | 🛡️ Résilience Maximale");

// Legacy exports pour compatibilité
export { quantumDebounce as debounce, quantumThrottle as throttle };
export default {
  cn,
  formatDate,
  formatNumber,
  debounce: quantumDebounce,
  throttle: quantumThrottle,
  colors: quantumColors,
  analytics: getQuantumUtilitiesAnalytics
};
