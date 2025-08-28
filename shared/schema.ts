import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer, decimal, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// 🏢 Schéma principal de création de marque
export const BrandCreationSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Le nom de la marque est requis"),
  sector: z.string().optional(),
  description: z.string().optional(),
  targetAudience: z.string().optional(),
  values: z.array(z.string()).default([]),
  colorPalette: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string().optional(),
  }).optional(),
  typography: z.object({
    primaryFont: z.string(),
    secondaryFont: z.string().optional(),
  }).optional(),
  visualStyle: z.enum(["modern", "classic", "minimalist", "bold", "elegant"]).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type BrandCreation = z.infer<typeof BrandCreationSchema>;

// 🎯 Schéma d'analyse de marque
export const BrandAnalysisSchema = z.object({
  brandId: z.string(),
  creativityScore: z.number().min(0).max(1),
  marketPotential: z.number().min(0).max(1),
  revolutionaryFactor: z.number().min(0).max(1),
  hypnoticAppeal: z.number().min(0).max(1),
  ceoImpact: z.number().min(0).max(1),
  overallScore: z.number().min(0).max(1),
  insights: z.array(z.string()).default([]),
  recommendations: z.array(z.string()).default([]),
  analysisDate: z.date().default(() => new Date()),
});

export type BrandAnalysis = z.infer<typeof BrandAnalysisSchema>;

// 💭 Schéma de feedback utilisateur
export const FeedbackSchema = z.object({
  id: z.string(),
  brandId: z.string(),
  userId: z.string().optional(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  category: z.enum(["design", "functionality", "creativity", "overall"]),
  sentimentScore: z.number().min(0).max(1).optional(),
  createdAt: z.date().default(() => new Date()),
});

export type Feedback = z.infer<typeof FeedbackSchema>;

// 🎨 Schéma de palette de couleurs avancée
export const ColorPaletteSchema = z.object({
  id: z.string(),
  name: z.string(),
  colors: z.array(z.object({
    hex: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    name: z.string(),
    role: z.enum(["primary", "secondary", "accent", "neutral", "text"]),
    saturation: z.number().min(0).max(100),
    brightness: z.number().min(0).max(100),
  })),
  harmony: z.enum(["monochromatic", "analogous", "complementary", "triadic", "tetradic"]),
  mood: z.enum(["energetic", "calm", "professional", "playful", "elegant"]),
  createdAt: z.date().default(() => new Date()),
});

export type ColorPalette = z.infer<typeof ColorPaletteSchema>;

// 📊 Schéma d'analytics utilisateur
export const UserAnalyticsSchema = z.object({
  id: z.string(),
  sessionId: z.string(),
  userId: z.string().optional(),
  events: z.array(z.object({
    type: z.enum(["page_view", "brand_create", "brand_edit", "feedback_submit", "export"]),
    timestamp: z.date(),
    data: z.record(z.any()).optional(),
  })),
  behaviorPatterns: z.object({
    timeSpent: z.number(), // en millisecondes
    actionsCount: z.number(),
    engagementLevel: z.enum(["low", "medium", "high"]),
    preferredFeatures: z.array(z.string()),
  }).optional(),
  createdAt: z.date().default(() => new Date()),
});

export type UserAnalytics = z.infer<typeof UserAnalyticsSchema>;

// 🧠 Schéma d'intelligence artificielle
export const AIInsightSchema = z.object({
  id: z.string(),
  type: z.enum(["brand_optimization", "market_trend", "user_behavior", "performance"]),
  title: z.string(),
  description: z.string(),
  confidence: z.number().min(0).max(1),
  actionable: z.boolean().default(false),
  priority: z.enum(["low", "medium", "high", "critical"]),
  metadata: z.record(z.any()).optional(),
  generatedAt: z.date().default(() => new Date()),
});

export type AIInsight = z.infer<typeof AIInsightSchema>;

// 🎭 Schéma de template de marque
export const BrandTemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  preview: z.object({
    colors: z.array(z.string()),
    fonts: z.array(z.string()),
    style: z.string(),
  }),
  config: z.object({
    colorPalette: ColorPaletteSchema.omit({ id: true, createdAt: true }),
    typography: z.object({
      primaryFont: z.string(),
      secondaryFont: z.string(),
      sizes: z.record(z.number()),
    }),
    layout: z.record(z.any()),
  }),
  popularity: z.number().min(0).max(1).default(0),
  createdAt: z.date().default(() => new Date()),
});

export type BrandTemplate = z.infer<typeof BrandTemplateSchema>;

// 🚀 Schémas d'API Request/Response
export const CreateBrandRequestSchema = z.object({
  name: z.string().min(1),
  sector: z.string().optional(),
  description: z.string().optional(),
  templateId: z.string().optional(),
});

export const UpdateBrandRequestSchema = CreateBrandRequestSchema.partial();

export const BrandListResponseSchema = z.object({
  brands: z.array(BrandCreationSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
});

// 🌟 Schéma de configuration système
export const SystemConfigSchema = z.object({
  ai: z.object({
    enabled: z.boolean().default(true),
    version: z.string().default("2.0"),
    features: z.array(z.string()).default([
      "auto_optimization",
      "behavior_analysis", 
      "trend_detection",
      "smart_recommendations"
    ]),
  }),
  analytics: z.object({
    enabled: z.boolean().default(true),
    retention: z.number().default(90), // jours
  }),
  performance: z.object({
    cacheEnabled: z.boolean().default(true),
    compressionEnabled: z.boolean().default(true),
    maxFileSize: z.number().default(50 * 1024 * 1024), // 50MB
  }),
});

export type SystemConfig = z.infer<typeof SystemConfigSchema>;

// 🎪 Export de tous les schémas pour validation
export const schemas = {
  BrandCreationSchema,
  BrandAnalysisSchema,
  FeedbackSchema,
  ColorPaletteSchema,
  UserAnalyticsSchema,
  AIInsightSchema,
  BrandTemplateSchema,
  CreateBrandRequestSchema,
  UpdateBrandRequestSchema,
  BrandListResponseSchema,
  SystemConfigSchema,
};

// 🏆 Types utilitaires
export type APIResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
};

export type PaginatedResponse<T> = APIResponse<{
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
}>;

// 🎯 Export par défaut
export default schemas;