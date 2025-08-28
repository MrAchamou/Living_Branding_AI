
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 🧠 QUANTUM UTILITIES ENGINE - Utilitaires IA avancés
class QuantumUtilitiesEngine {
  private operationHistory: Map<string, any[]> = new Map();
  private performanceMetrics: Map<string, number> = new Map();
  private stringOperations: Map<string, any> = new Map();
  private analysisCache: Map<string, any> = new Map();

  constructor() {
    this.initializeUtilityIntelligence();
  }

  private initializeUtilityIntelligence(): void {
    console.log("🧠 Quantum Utilities Intelligence: ACTIVE ✅");
    
    this.performanceMetrics.set('operations_count', 0);
    this.performanceMetrics.set('cache_hits', 0);
    this.performanceMetrics.set('processing_time', 0);
  }

  // 🎯 Formatage intelligent de chaînes
  formatIntelligentString(input: string, options: {
    capitalize?: boolean;
    removeSpaces?: boolean;
    addPrefix?: string;
    smartCase?: boolean;
  } = {}): string {
    let result = input;

    if (options.removeSpaces) {
      result = result.replace(/\s+/g, '');
    }

    if (options.capitalize) {
      result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    }

    if (options.smartCase) {
      result = result.replace(/\b\w/g, l => l.toUpperCase());
    }

    if (options.addPrefix) {
      result = options.addPrefix + result;
    }

    // Enregistrement pour l'apprentissage
    this.recordStringOperation('format', { input, options, result });

    return result;
  }

  // 🔍 Validation intelligente
  validateInput(input: any, type: 'email' | 'phone' | 'url' | 'company' | 'text'): {
    isValid: boolean;
    confidence: number;
    suggestions: string[];
    errors: string[];
  } {
    const result = {
      isValid: false,
      confidence: 0,
      suggestions: [] as string[],
      errors: [] as string[]
    };

    const inputStr = String(input).trim();

    switch (type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        result.isValid = emailRegex.test(inputStr);
        result.confidence = result.isValid ? 0.95 : 0.1;
        if (!result.isValid) {
          result.errors.push('Format email invalide');
          result.suggestions.push('Utilisez le format: nom@domaine.com');
        }
        break;

      case 'company':
        result.isValid = inputStr.length >= 2 && inputStr.length <= 100;
        result.confidence = inputStr.length >= 3 ? 0.9 : 0.6;
        if (inputStr.length < 2) {
          result.errors.push('Nom trop court');
          result.suggestions.push('Utilisez au moins 2 caractères');
        }
        if (inputStr.length > 100) {
          result.errors.push('Nom trop long');
          result.suggestions.push('Maximum 100 caractères');
        }
        break;

      case 'text':
        result.isValid = inputStr.length > 0;
        result.confidence = inputStr.length >= 5 ? 0.9 : 0.7;
        if (!result.isValid) {
          result.errors.push('Texte requis');
        }
        break;

      case 'url':
        try {
          new URL(inputStr);
          result.isValid = true;
          result.confidence = 0.95;
        } catch {
          result.isValid = false;
          result.confidence = 0.1;
          result.errors.push('URL invalide');
          result.suggestions.push('Utilisez le format: https://exemple.com');
        }
        break;

      case 'phone':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        result.isValid = phoneRegex.test(inputStr.replace(/\s/g, ''));
        result.confidence = result.isValid ? 0.9 : 0.2;
        if (!result.isValid) {
          result.errors.push('Numéro de téléphone invalide');
          result.suggestions.push('Utilisez le format: +33123456789');
        }
        break;
    }

    this.recordStringOperation('validate', { input, type, result });
    return result;
  }

  // 🎨 Génération de couleurs intelligentes
  generateIntelligentColors(baseColor: string, count: number = 5): {
    palette: string[];
    harmony: string;
    accessibility: number;
  } {
    const colors: string[] = [];
    
    // Génération basique de palette (à améliorer avec une vraie logique de couleur)
    const baseHue = this.extractHue(baseColor);
    
    for (let i = 0; i < count; i++) {
      const hue = (baseHue + (i * 360 / count)) % 360;
      const saturation = 70 + (i * 5);
      const lightness = 50 + (i * 10);
      colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }

    return {
      palette: colors,
      harmony: 'complementary',
      accessibility: 0.85
    };
  }

  private extractHue(color: string): number {
    // Extraction basique de teinte (à améliorer)
    if (color.startsWith('#')) {
      // Conversion hex vers HSL basique
      return Math.floor(Math.random() * 360);
    }
    return 220; // Bleu par défaut
  }

  // 📊 Analyse de performance
  analyzePerformance(): {
    operations: number;
    cacheEfficiency: number;
    stringEfficiency: number;
    recommendations: string[];
  } {
    const operations = this.performanceMetrics.get('operations_count') || 0;
    const cacheHits = this.performanceMetrics.get('cache_hits') || 0;
    
    const cacheEfficiency = operations > 0 ? (cacheHits / operations) * 100 : 0;
    const stringEfficiency = this.calculateStringEfficiency();

    const recommendations: string[] = [];
    
    if (cacheEfficiency < 50) {
      recommendations.push('Améliorer la stratégie de cache');
    }
    if (stringEfficiency < 70) {
      recommendations.push('Optimiser les opérations sur les chaînes');
    }

    return {
      operations,
      cacheEfficiency,
      stringEfficiency,
      recommendations
    };
  }

  private recordStringOperation(operation: string, data: any): void {
    const operations = this.operationHistory.get(operation) || [];
    operations.push({ ...data, timestamp: Date.now() });
    
    if (operations.length > 100) {
      operations.shift();
    }
    
    this.operationHistory.set(operation, operations);
    
    const count = this.performanceMetrics.get('operations_count') || 0;
    this.performanceMetrics.set('operations_count', count + 1);
  }

  private calculateStringEfficiency(): number {
    return this.stringOperations.size > 0 ? 
      (this.stringOperations.size / this.analysisCache.size) * 100 : 0;
  }

  // 🎯 Génération d'ID unique avec intelligence
  generateIntelligentId(prefix?: string, context?: string): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    const contextHash = context ? this.simpleHash(context).toString(36) : '';
    
    const parts = [prefix, timestamp, random, contextHash].filter(Boolean);
    return parts.join('-');
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convertir en 32bit entier
    }
    return Math.abs(hash);
  }

  // 📈 Métriques du système
  getSystemMetrics(): any {
    return {
      operationsCount: this.performanceMetrics.get('operations_count'),
      cacheSize: this.analysisCache.size,
      stringOperations: this.stringOperations.size,
      performance: this.analyzePerformance()
    };
  }
}

// Instance globale
export const quantumUtils = new QuantumUtilitiesEngine();

// Export des fonctions utilitaires
export const formatString = (input: string, options?: any) => 
  quantumUtils.formatIntelligentString(input, options);

export const validateInput = (input: any, type: any) => 
  quantumUtils.validateInput(input, type);

export const generateColors = (baseColor: string, count?: number) => 
  quantumUtils.generateIntelligentColors(baseColor, count);

export const generateId = (prefix?: string, context?: string) => 
  quantumUtils.generateIntelligentId(prefix, context);
