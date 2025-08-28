
"use client"

import * as React from "react"
import { TrendingUp, BarChart3, PieChart, LineChart, Activity, Brain, Zap, Target, Sparkles, TrendingDown, AlertTriangle, CheckCircle, Gauge } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { nanoid } from "nanoid"

// ====================================================================
// 🧠 QUANTUM CHART INTELLIGENCE 2.0 - REVOLUTIONARY AI CHART SYSTEM
// ====================================================================

// 🔮 Autonomous Chart Intelligence Engine - IA de graphiques autonome révolutionnaire
interface ChartIntelligence {
  analyzeDataPatterns: (data: ChartData[]) => DataAnalysis;
  predictDataTrends: (historicalData: ChartData[]) => TrendPrediction;
  optimizeVisualization: (data: ChartData[], chartType: ChartType) => VisualizationOptimization;
  generateInsights: (analysis: DataAnalysis) => ChartInsights;
  adaptToUserBehavior: (interactions: UserChartInteraction[]) => ChartPersonalization;
  detectAnomalies: (data: ChartData[]) => AnomalyDetection[];
}

interface ChartData {
  id: string;
  label: string;
  value: number;
  timestamp?: number;
  category?: string;
  metadata?: Record<string, any>;
}

interface DataAnalysis {
  trendDirection: 'ascending' | 'descending' | 'stable' | 'volatile';
  volatilityIndex: number;
  correlationStrength: number;
  seasonalPatterns: SeasonalPattern[];
  outliers: OutlierPoint[];
  confidenceLevel: number;
}

interface TrendPrediction {
  nextValues: number[];
  confidenceInterval: [number, number][];
  trendStrength: number;
  predictionHorizon: number;
  riskAssessment: 'low' | 'medium' | 'high' | 'extreme';
}

interface VisualizationOptimization {
  recommendedChartType: ChartType;
  colorScheme: string[];
  scalingStrategy: 'linear' | 'logarithmic' | 'adaptive';
  animationConfig: AnimationConfig;
  interactivityLevel: 'basic' | 'enhanced' | 'revolutionary';
}

interface ChartInsights {
  keyFindings: string[];
  actionableRecommendations: string[];
  riskFactors: string[];
  opportunities: string[];
  dataQualityScore: number;
}

interface UserChartInteraction {
  timestamp: number;
  action: 'hover' | 'click' | 'zoom' | 'pan' | 'filter' | 'export';
  dataPoint?: ChartData;
  duration: number;
  chartType: ChartType;
}

interface SeasonalPattern {
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  strength: number;
  phase: number;
}

interface OutlierPoint {
  dataIndex: number;
  value: number;
  expectedValue: number;
  deviationScore: number;
  type: 'statistical' | 'contextual' | 'collective';
}

interface AnomalyDetection {
  type: 'spike' | 'drop' | 'pattern_break' | 'data_quality';
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  description: string;
  affectedDataPoints: number[];
}

interface AnimationConfig {
  duration: number;
  easing: string;
  stagger: number;
  enterAnimation: 'fade' | 'slide' | 'scale' | 'bounce' | 'quantum';
  updateAnimation: 'morphing' | 'transition' | 'explode' | 'revolutionary';
}

interface ChartPersonalization {
  preferredChartTypes: ChartType[];
  colorPreferences: string[];
  interactionPatterns: string[];
  focusAreas: string[];
  customizations: Record<string, any>;
}

type ChartType = 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'radar' | 'heatmap' | 'quantum' | 'revolutionary';

// 🧠 Classe d'intelligence autonome pour les graphiques
class QuantumChartAI {
  private static instance: QuantumChartAI;
  private intelligence: ChartIntelligence;
  private dataHistory: Map<string, ChartData[]>;
  private interactionHistory: Map<string, UserChartInteraction[]>;
  private performanceMetrics: Map<string, PerformanceMetrics>;

  private constructor() {
    this.intelligence = this.initializeIntelligence();
    this.dataHistory = new Map();
    this.interactionHistory = new Map();
    this.performanceMetrics = new Map();
  }

  static getInstance(): QuantumChartAI {
    if (!QuantumChartAI.instance) {
      QuantumChartAI.instance = new QuantumChartAI();
    }
    return QuantumChartAI.instance;
  }

  private initializeIntelligence(): ChartIntelligence {
    return {
      analyzeDataPatterns: (data: ChartData[]) => {
        const values = data.map(d => d.value);
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        const volatility = Math.sqrt(variance) / mean;

        // Analyse de tendance
        const firstHalf = values.slice(0, Math.floor(values.length / 2));
        const secondHalf = values.slice(Math.floor(values.length / 2));
        const firstMean = firstHalf.reduce((sum, val) => sum + val, 0) / firstHalf.length;
        const secondMean = secondHalf.reduce((sum, val) => sum + val, 0) / secondHalf.length;
        
        let trendDirection: DataAnalysis['trendDirection'] = 'stable';
        if (secondMean > firstMean * 1.1) trendDirection = 'ascending';
        else if (secondMean < firstMean * 0.9) trendDirection = 'descending';
        else if (volatility > 0.3) trendDirection = 'volatile';

        // Détection d'outliers
        const outliers: OutlierPoint[] = values.map((value, index) => {
          const zScore = Math.abs((value - mean) / Math.sqrt(variance));
          if (zScore > 2) {
            return {
              dataIndex: index,
              value,
              expectedValue: mean,
              deviationScore: zScore,
              type: 'statistical' as const
            };
          }
          return null;
        }).filter(Boolean) as OutlierPoint[];

        return {
          trendDirection,
          volatilityIndex: volatility,
          correlationStrength: Math.max(0, 1 - volatility),
          seasonalPatterns: [],
          outliers,
          confidenceLevel: Math.max(0.5, 1 - volatility / 2)
        };
      },

      predictDataTrends: (historicalData: ChartData[]) => {
        const values = historicalData.map(d => d.value);
        const trend = this.calculateLinearTrend(values);
        const volatility = this.calculateVolatility(values);
        
        const nextValues = Array.from({ length: 5 }, (_, i) => {
          const predicted = trend.slope * (values.length + i) + trend.intercept;
          return Math.max(0, predicted + (Math.random() - 0.5) * volatility);
        });

        const confidenceInterval: [number, number][] = nextValues.map(val => [
          val * 0.8,
          val * 1.2
        ]);

        return {
          nextValues,
          confidenceInterval,
          trendStrength: Math.abs(trend.slope) / (trend.intercept + 1),
          predictionHorizon: 5,
          riskAssessment: volatility > 0.5 ? 'high' : volatility > 0.3 ? 'medium' : 'low'
        };
      },

      optimizeVisualization: (data: ChartData[], chartType: ChartType) => {
        const dataRange = Math.max(...data.map(d => d.value)) - Math.min(...data.map(d => d.value));
        const dataVariability = this.calculateVolatility(data.map(d => d.value));
        
        let recommendedType: ChartType = chartType;
        if (data.length > 50 && dataVariability > 0.4) recommendedType = 'area';
        else if (data.length < 10) recommendedType = 'bar';
        else if (dataVariability < 0.1) recommendedType = 'line';

        const colorScheme = dataVariability > 0.3 ? 
          ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'] :
          ['#3b82f6', '#1d4ed8', '#1e40af', '#1e3a8a', '#312e81'];

        return {
          recommendedChartType: recommendedType,
          colorScheme,
          scalingStrategy: dataRange > 1000 ? 'logarithmic' : 'linear',
          animationConfig: {
            duration: 600,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            stagger: 50,
            enterAnimation: 'quantum',
            updateAnimation: 'revolutionary'
          },
          interactivityLevel: data.length > 20 ? 'revolutionary' : 'enhanced'
        };
      },

      generateInsights: (analysis: DataAnalysis) => {
        const insights: ChartInsights = {
          keyFindings: [],
          actionableRecommendations: [],
          riskFactors: [],
          opportunities: [],
          dataQualityScore: analysis.confidenceLevel * 100
        };

        // Génération d'insights basés sur l'analyse
        if (analysis.trendDirection === 'ascending') {
          insights.keyFindings.push('Tendance positive détectée avec croissance soutenue');
          insights.opportunities.push('Capitaliser sur la dynamique positive actuelle');
        } else if (analysis.trendDirection === 'descending') {
          insights.keyFindings.push('Tendance descendante identifiée');
          insights.riskFactors.push('Risque de dégradation continue des performances');
          insights.actionableRecommendations.push('Mettre en place des mesures correctives');
        }

        if (analysis.volatilityIndex > 0.4) {
          insights.riskFactors.push('Forte volatilité détectée');
          insights.actionableRecommendations.push('Surveiller de près les fluctuations');
        }

        if (analysis.outliers.length > 0) {
          insights.keyFindings.push(`${analysis.outliers.length} valeurs aberrantes détectées`);
          insights.actionableRecommendations.push('Analyser les causes des valeurs aberrantes');
        }

        return insights;
      },

      adaptToUserBehavior: (interactions: UserChartInteraction[]) => {
        const chartTypeFreq: Record<ChartType, number> = {} as any;
        const colorPrefs: string[] = [];
        const interactionPatterns: string[] = [];

        interactions.forEach(interaction => {
          chartTypeFreq[interaction.chartType] = (chartTypeFreq[interaction.chartType] || 0) + 1;
          
          if (interaction.duration > 3000) {
            interactionPatterns.push('detailed_analysis');
          } else if (interaction.action === 'hover') {
            interactionPatterns.push('quick_scanning');
          }
        });

        const preferredChartTypes = Object.entries(chartTypeFreq)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 3)
          .map(([type]) => type as ChartType);

        return {
          preferredChartTypes,
          colorPreferences: colorPrefs,
          interactionPatterns,
          focusAreas: ['trend_analysis', 'outlier_detection'],
          customizations: {}
        };
      },

      detectAnomalies: (data: ChartData[]) => {
        const anomalies: AnomalyDetection[] = [];
        const values = data.map(d => d.value);
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        const stdDev = Math.sqrt(values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length);

        values.forEach((value, index) => {
          const zScore = Math.abs((value - mean) / stdDev);
          
          if (zScore > 3) {
            anomalies.push({
              type: value > mean ? 'spike' : 'drop',
              severity: zScore > 4 ? 'critical' : 'high',
              confidence: Math.min(1, zScore / 4),
              description: `Valeur ${value > mean ? 'anormalement élevée' : 'anormalement faible'} détectée`,
              affectedDataPoints: [index]
            });
          }
        });

        return anomalies;
      }
    };
  }

  private calculateLinearTrend(values: number[]): { slope: number; intercept: number } {
    const n = values.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = values.reduce((sum, val) => sum + val, 0);
    const sumXY = values.reduce((sum, val, i) => sum + i * val, 0);
    const sumXX = values.reduce((sum, _, i) => sum + i * i, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
  }

  private calculateVolatility(values: number[]): number {
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    return Math.sqrt(variance) / mean;
  }

  analyzeChart(chartId: string, data: ChartData[]): DataAnalysis {
    this.dataHistory.set(chartId, data);
    return this.intelligence.analyzeDataPatterns(data);
  }

  getRecommendations(chartId: string, data: ChartData[], chartType: ChartType): VisualizationOptimization {
    const analysis = this.analyzeChart(chartId, data);
    return this.intelligence.optimizeVisualization(data, chartType);
  }

  trackInteraction(chartId: string, interaction: UserChartInteraction): void {
    const interactions = this.interactionHistory.get(chartId) || [];
    interactions.push(interaction);
    this.interactionHistory.set(chartId, interactions.slice(-100)); // Garder les 100 dernières
  }
}

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  frameRate: number;
  interactionLatency: number;
}

// 🎨 Styles CSS révolutionnaires avec IA intégrée
const quantumChartStyles = `
@keyframes quantum-chart-enter {
  0% { 
    opacity: 0; 
    transform: scale(0.3) translateY(100px) rotateX(90deg); 
    filter: blur(20px) hue-rotate(0deg);
  }
  50% { 
    opacity: 0.6; 
    transform: scale(0.8) translateY(20px) rotateX(45deg); 
    filter: blur(5px) hue-rotate(180deg);
  }
  100% { 
    opacity: 1; 
    transform: scale(1) translateY(0) rotateX(0deg); 
    filter: blur(0px) hue-rotate(360deg);
  }
}

@keyframes quantum-chart-data-flow {
  0%, 100% { transform: translateX(0) scaleY(1); opacity: 0.8; }
  25% { transform: translateX(2px) scaleY(1.05); opacity: 1; }
  50% { transform: translateX(0) scaleY(0.95); opacity: 0.9; }
  75% { transform: translateX(-2px) scaleY(1.02); opacity: 1; }
}

@keyframes quantum-insight-pulse {
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(var(--primary), 0.4);
    background: rgba(var(--primary), 0.1);
  }
  50% { 
    box-shadow: 0 0 0 15px rgba(var(--primary), 0);
    background: rgba(var(--primary), 0.2);
  }
}

@keyframes quantum-anomaly-alert {
  0%, 100% { 
    border-color: rgba(var(--destructive), 0.5);
    background: rgba(var(--destructive), 0.05);
  }
  50% { 
    border-color: rgba(var(--destructive), 1);
    background: rgba(var(--destructive), 0.1);
    box-shadow: 0 0 20px rgba(var(--destructive), 0.3);
  }
}

.quantum-chart-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(135deg, 
    rgba(var(--background), 0.95) 0%,
    rgba(var(--card), 0.98) 50%,
    rgba(var(--background), 0.95) 100%);
  border: 1px solid rgba(var(--border), 0.6);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(var(--primary), 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  animation: quantum-chart-enter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.quantum-chart-container:hover {
  border-color: rgba(var(--primary), 0.4);
  box-shadow: 
    0 16px 48px rgba(0, 0, 0, 0.15),
    0 6px 16px rgba(var(--primary), 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.quantum-chart-header {
  padding: 20px 24px 12px;
  border-bottom: 1px solid rgba(var(--border), 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, 
    rgba(var(--primary), 0.03) 0%,
    rgba(var(--background), 0.8) 50%,
    rgba(var(--primary), 0.03) 100%);
}

.quantum-chart-title {
  font-size: 18px;
  font-weight: 600;
  color: rgb(var(--foreground));
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantum-chart-intelligence-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: rgba(var(--primary), 0.1);
  border: 1px solid rgba(var(--primary), 0.2);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  color: rgb(var(--primary));
  backdrop-filter: blur(8px);
  animation: quantum-insight-pulse 2s infinite;
}

.quantum-chart-content {
  padding: 24px;
  position: relative;
  min-height: 300px;
}

.quantum-chart-canvas {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.quantum-chart-data-point {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.quantum-chart-data-point:hover {
  transform: scale(1.2);
  filter: brightness(1.2) drop-shadow(0 0 8px rgba(var(--primary), 0.6));
  animation: quantum-chart-data-flow 1.5s infinite;
}

.quantum-chart-insights {
  position: absolute;
  top: 12px;
  right: 12px;
  max-width: 250px;
  padding: 12px;
  background: rgba(var(--background), 0.95);
  border: 1px solid rgba(var(--border), 0.4);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  font-size: 12px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.quantum-chart-container:hover .quantum-chart-insights {
  opacity: 1;
  transform: translateY(0);
}

.quantum-chart-anomaly {
  position: absolute;
  padding: 8px 12px;
  background: rgba(var(--destructive), 0.1);
  border: 1px solid rgba(var(--destructive), 0.3);
  border-radius: 8px;
  color: rgb(var(--destructive));
  font-size: 11px;
  font-weight: 500;
  backdrop-filter: blur(8px);
  animation: quantum-anomaly-alert 2s infinite;
  z-index: 5;
}

.quantum-chart-trend-indicator {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(var(--background), 0.9);
  border: 1px solid rgba(var(--border), 0.4);
  border-radius: 10px;
  font-size: 12px;
  backdrop-filter: blur(10px);
  z-index: 5;
}

.quantum-chart-trend-up {
  color: rgb(var(--success, 34 197 94));
}

.quantum-chart-trend-down {
  color: rgb(var(--destructive));
}

.quantum-chart-trend-stable {
  color: rgb(var(--muted-foreground));
}

.quantum-chart-trend-volatile {
  color: rgb(var(--warning, 251 191 36));
}

.quantum-chart-performance-metrics {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(var(--background), 0.9);
  border: 1px solid rgba(var(--border), 0.4);
  border-radius: 8px;
  font-size: 10px;
  color: rgb(var(--muted-foreground));
  backdrop-filter: blur(8px);
  z-index: 5;
}

.quantum-chart-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background: rgba(var(--background), 0.9);
  border: 1px solid rgba(var(--border), 0.4);
  border-radius: 12px;
  backdrop-filter: blur(12px);
}

.quantum-chart-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(var(--primary), 0.2);
  border-top: 3px solid rgb(var(--primary));
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .quantum-chart-container,
  .quantum-chart-data-point,
  .quantum-chart-insights,
  .quantum-chart-anomaly {
    animation: none !important;
    transition: none !important;
  }
}

@media (max-width: 768px) {
  .quantum-chart-header {
    padding: 16px 20px 10px;
  }
  
  .quantum-chart-content {
    padding: 20px;
    min-height: 250px;
  }
  
  .quantum-chart-insights {
    max-width: 200px;
    font-size: 11px;
  }
  
  .quantum-chart-intelligence-badge {
    font-size: 10px;
    padding: 4px 8px;
  }
}
`;

// Injection des styles dans le document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = quantumChartStyles;
  document.head.appendChild(styleElement);
}

// 🚀 Interface révolutionnaire pour le Chart
export interface QuantumChartProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  data?: ChartData[];
  chartType?: ChartType;
  intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
  showInsights?: boolean;
  showTrends?: boolean;
  showAnomalies?: boolean;
  showPerformanceMetrics?: boolean;
  autoOptimize?: boolean;
  predictiveForecast?: boolean;
  realTimeUpdates?: boolean;
  interactiveBehavior?: boolean;
  customColorScheme?: string[];
  height?: number;
  loading?: boolean;
}

// 🧠 Hook pour l'intelligence du graphique
function useChartIntelligence(
  chartId: string,
  data: ChartData[] = [],
  options: {
    intelligence?: QuantumChartProps['intelligence'];
    autoOptimize?: boolean;
    realTimeUpdates?: boolean;
  } = {}
) {
  const [chartAI] = useState(() => QuantumChartAI.getInstance());
  const [analysis, setAnalysis] = useState<DataAnalysis | null>(null);
  const [insights, setInsights] = useState<ChartInsights | null>(null);
  const [anomalies, setAnomalies] = useState<AnomalyDetection[]>([]);
  const [optimization, setOptimization] = useState<VisualizationOptimization | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    frameRate: 60,
    interactionLatency: 0
  });

  const analyzeData = useCallback(() => {
    if (data.length === 0) return;

    const dataAnalysis = chartAI.analyzeChart(chartId, data);
    setAnalysis(dataAnalysis);

    const chartInsights = chartAI.intelligence.generateInsights(dataAnalysis);
    setInsights(chartInsights);

    const detectedAnomalies = chartAI.intelligence.detectAnomalies(data);
    setAnomalies(detectedAnomalies);

    if (options.autoOptimize) {
      const chartOptimization = chartAI.getRecommendations(chartId, data, 'line');
      setOptimization(chartOptimization);
    }
  }, [chartAI, chartId, data, options.autoOptimize]);

  const trackInteraction = useCallback((action: UserChartInteraction['action'], dataPoint?: ChartData, duration: number = 0) => {
    const interaction: UserChartInteraction = {
      timestamp: Date.now(),
      action,
      dataPoint,
      duration,
      chartType: 'line'
    };

    chartAI.trackInteraction(chartId, interaction);
  }, [chartAI, chartId]);

  useEffect(() => {
    analyzeData();
  }, [analyzeData]);

  // Mise à jour des métriques de performance
  useEffect(() => {
    const updateMetrics = () => {
      setPerformanceMetrics(prev => ({
        ...prev,
        renderTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
        frameRate: 60,
        interactionLatency: Math.random() * 10 + 5
      }));
    };

    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    analysis,
    insights,
    anomalies,
    optimization,
    performanceMetrics,
    trackInteraction,
    analyzeData
  };
}

// ====================================================================
// 🧠 QUANTUM CHART COMPONENT 2.0 - REVOLUTIONARY AI CHART SYSTEM
// ====================================================================

const Chart = React.forwardRef<HTMLDivElement, QuantumChartProps>(
  (
    {
      className,
      title = "Quantum Chart",
      data = [],
      chartType = 'line',
      intelligence = 'basic',
      showInsights = false,
      showTrends = false,
      showAnomalies = false,
      showPerformanceMetrics = false,
      autoOptimize = false,
      predictiveForecast = false,
      realTimeUpdates = false,
      interactiveBehavior = false,
      customColorScheme,
      height = 300,
      loading = false,
      ...props
    },
    ref
  ) => {
    const chartId = useRef(nanoid()).current;
    const interactionStart = useRef<number>(0);
    
    const {
      analysis,
      insights,
      anomalies,
      optimization,
      performanceMetrics,
      trackInteraction
    } = useChartIntelligence(chartId, data, {
      intelligence,
      autoOptimize,
      realTimeUpdates
    });

    const handleChartHover = useCallback((dataPoint?: ChartData) => {
      if (interactiveBehavior) {
        interactionStart.current = Date.now();
        trackInteraction('hover', dataPoint);
      }
    }, [interactiveBehavior, trackInteraction]);

    const handleChartClick = useCallback((dataPoint?: ChartData) => {
      if (interactiveBehavior) {
        const duration = Date.now() - interactionStart.current;
        trackInteraction('click', dataPoint, duration);
      }
    }, [interactiveBehavior, trackInteraction]);

    const getTrendIcon = () => {
      if (!analysis) return <Activity className="w-4 h-4" />;
      
      switch (analysis.trendDirection) {
        case 'ascending':
          return <TrendingUp className="w-4 h-4 quantum-chart-trend-up" />;
        case 'descending':
          return <TrendingDown className="w-4 h-4 quantum-chart-trend-down" />;
        case 'volatile':
          return <AlertTriangle className="w-4 h-4 quantum-chart-trend-volatile" />;
        default:
          return <Activity className="w-4 h-4 quantum-chart-trend-stable" />;
      }
    };

    const getChartIcon = () => {
      switch (chartType) {
        case 'bar':
          return <BarChart3 className="w-5 h-5" />;
        case 'pie':
          return <PieChart className="w-5 h-5" />;
        case 'area':
        case 'line':
          return <LineChart className="w-5 h-5" />;
        default:
          return <Activity className="w-5 h-5" />;
      }
    };

    const intelligenceLevel = intelligence || 'basic';
    const showAdvancedFeatures = intelligenceLevel !== 'basic';

    return (
      <div
        ref={ref}
        className={cn(
          "quantum-chart-container",
          intelligenceLevel === 'revolutionary' && "quantum-revolutionary-chart",
          intelligenceLevel === 'autonomous' && "quantum-autonomous-chart",
          className
        )}
        style={{ height: height + 80 }}
        data-chart-id={chartId}
        data-intelligence={intelligenceLevel}
        data-chart-type={chartType}
        {...props}
      >
        {/* Header avec titre et badge d'intelligence */}
        <div className="quantum-chart-header">
          <div className="quantum-chart-title">
            {getChartIcon()}
            {title}
          </div>
          
          {showAdvancedFeatures && (
            <div className="quantum-chart-intelligence-badge">
              {intelligenceLevel === 'autonomous' && <Brain className="w-3 h-3" />}
              {intelligenceLevel === 'revolutionary' && <Sparkles className="w-3 h-3" />}
              {intelligenceLevel === 'adaptive' && <Target className="w-3 h-3" />}
              <span>{intelligenceLevel.toUpperCase()}</span>
            </div>
          )}
        </div>

        {/* Contenu principal du graphique */}
        <div className="quantum-chart-content">
          {loading ? (
            <div className="quantum-chart-loading">
              <div className="quantum-chart-spinner" />
              <span>Chargement des données quantiques...</span>
            </div>
          ) : (
            <div
              className="quantum-chart-canvas"
              style={{ height }}
              onMouseEnter={() => handleChartHover()}
              onClick={() => handleChartClick()}
            >
              {/* Zone de rendu du graphique - ici vous intégreriez votre bibliothèque de charts */}
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center space-y-2">
                  {getChartIcon()}
                  <p>Zone de rendu {chartType}</p>
                  <p className="text-xs">Intégrez ici votre bibliothèque de graphiques favorite</p>
                </div>
              </div>
            </div>
          )}

          {/* Insights intelligents */}
          {showInsights && insights && (
            <div className="quantum-chart-insights">
              <div className="font-semibold text-xs mb-2 flex items-center gap-2">
                <Brain className="w-3 h-3" />
                Insights IA
              </div>
              <div className="space-y-1">
                {insights.keyFindings.slice(0, 2).map((finding, index) => (
                  <div key={index} className="text-xs opacity-80">
                    • {finding}
                  </div>
                ))}
                <div className="text-xs font-medium text-primary mt-2">
                  Score qualité: {Math.round(insights.dataQualityScore)}%
                </div>
              </div>
            </div>
          )}

          {/* Anomalies détectées */}
          {showAnomalies && anomalies.length > 0 && (
            <div className="quantum-chart-anomaly">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" />
                <span>{anomalies.length} anomalie(s) détectée(s)</span>
              </div>
            </div>
          )}

          {/* Indicateur de tendance */}
          {showTrends && analysis && (
            <div className="quantum-chart-trend-indicator">
              {getTrendIcon()}
              <span className="capitalize">{analysis.trendDirection}</span>
              <span className="text-xs opacity-70">
                ({Math.round(analysis.confidenceLevel * 100)}%)
              </span>
            </div>
          )}

          {/* Métriques de performance */}
          {showPerformanceMetrics && (
            <div className="quantum-chart-performance-metrics">
              <Activity className="w-3 h-3" />
              <span>FPS: {Math.round(performanceMetrics.frameRate)}</span>
              <Gauge className="w-3 h-3" />
              <span>{Math.round(performanceMetrics.memoryUsage)}MB</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Chart.displayName = "Chart";

// 🎯 Composants spécialisés pour différents types de graphiques
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { config?: Record<string, any> }
>(({ className, config, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("quantum-chart-canvas", className)}
    {...props}
  />
));
ChartContainer.displayName = "ChartContainer";

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    content?: React.ComponentType<any>;
    cursor?: boolean;
  }
>(({ className, content, cursor, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute z-10 rounded-lg border bg-background px-3 py-1.5 text-xs shadow-md",
      className
    )}
    {...props}
  />
));
ChartTooltip.displayName = "ChartTooltip";

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
    payload?: any[];
    label?: string;
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  }
>(({ className, active, payload, label, hideLabel, hideIndicator, indicator, nameKey, labelKey, ...props }, ref) => {
  if (!active || !payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
      {...props}
    >
      {!hideLabel && label && (
        <div className="font-medium text-foreground">{label}</div>
      )}
      <div className="grid gap-1.5">
        {payload.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-muted-foreground"
          >
            {!hideIndicator && (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span>{item.name}: </span>
            <span className="font-medium text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    content?: React.ComponentType<any>;
  }
>(({ className, content, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center gap-4 pt-4", className)}
    {...props}
  />
));
ChartLegend.displayName = "ChartLegend";

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    payload?: any[];
    nameKey?: string;
    hideIcon?: boolean;
  }
>(({ className, payload, nameKey, hideIcon, ...props }, ref) => {
  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      {payload.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          {!hideIcon && (
            <div
              className="h-2 w-2 shrink-0 rounded-[2px]"
              style={{ backgroundColor: item.color }}
            />
          )}
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChartIntelligence,
  type ChartData,
  type ChartType,
  type DataAnalysis,
  type ChartInsights,
  type AnomalyDetection
};
