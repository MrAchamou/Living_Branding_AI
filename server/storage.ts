import { type BrandCreation, type InsertBrandCreation, type Feedback, type InsertFeedback } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Brand Creation methods
  createBrandCreation(data: InsertBrandCreation): Promise<BrandCreation>;
  getBrandCreation(id: string): Promise<BrandCreation | undefined>;
  updateBrandCreation(id: string, data: Partial<BrandCreation>): Promise<BrandCreation | undefined>;
  
  // Feedback methods
  createFeedback(data: InsertFeedback): Promise<Feedback>;
  getFeedbacksByBrandId(brandId: string): Promise<Feedback[]>;
}

export class MemStorage implements IStorage {
  private brandCreations: Map<string, BrandCreation>;
  private feedbacks: Map<string, Feedback>;

  constructor() {
    this.brandCreations = new Map();
    this.feedbacks = new Map();
  }

  async createBrandCreation(insertData: InsertBrandCreation): Promise<BrandCreation> {
    const id = randomUUID();
    const now = new Date();
    
    const brandCreation: BrandCreation = {
      ...insertData,
      id,
      customWatermark: insertData.customWatermark || null,
      creativeDNA: null,
      visualUniverse: null,
      hypnoticPowerScore: null,
      revolutionLevel: null,
      ceoImpactScore: null,
      predictedCeoReaction: null,
      phases: null,
      status: "creating",
      createdAt: now,
      quantumSignature: null,
      aiGenerationMetadata: null,
      coherenceScore: null,
      learningContributions: null,
      futureCompatibilityScore: null,
    };
    
    this.brandCreations.set(id, brandCreation);
    return brandCreation;
  }

  async getBrandCreation(id: string): Promise<BrandCreation | undefined> {
    return this.brandCreations.get(id);
  }

  async updateBrandCreation(id: string, data: Partial<BrandCreation>): Promise<BrandCreation | undefined> {
    const existing = this.brandCreations.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...data };
    this.brandCreations.set(id, updated);
    return updated;
  }

  async createFeedback(insertData: InsertFeedback): Promise<Feedback> {
    const id = randomUUID();
    const now = new Date();
    
    const feedback: Feedback = {
      ...insertData,
      id,
      brandCreationId: insertData.brandCreationId || null,
      isAnonymous: insertData.isAnonymous || false,
      contributeToLearning: insertData.contributeToLearning || true,
      createdAt: now,
      sentimentScore: null,
      aiProcessedInsights: null,
      impactOnNextGeneration: null,
    };
    
    this.feedbacks.set(id, feedback);
    return feedback;
  }

  async getFeedbacksByBrandId(brandId: string): Promise<Feedback[]> {
    return Array.from(this.feedbacks.values()).filter(
      (feedback) => feedback.brandCreationId === brandId
    );
  }
}

export const storage = new MemStorage();
