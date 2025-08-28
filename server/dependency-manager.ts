
import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";

// 🔧 AUTONOMOUS DEPENDENCY MANAGER - Gestionnaire autonome de dépendances
class AutonomousDependencyManager {
  private static instance: AutonomousDependencyManager;
  private dependencyCache: Map<string, boolean> = new Map();
  private criticalDependencies = ['concurrently', 'tsx'];

  static getInstance(): AutonomousDependencyManager {
    if (!AutonomousDependencyManager.instance) {
      AutonomousDependencyManager.instance = new AutonomousDependencyManager();
    }
    return AutonomousDependencyManager.instance;
  }

  constructor() {
    this.initializeManager();
  }

  private initializeManager(): void {
    console.log("🔧 Initializing Autonomous Dependency Manager...");
    this.validateCriticalDependencies();
  }

  private validateCriticalDependencies(): void {
    for (const dep of this.criticalDependencies) {
      const isAvailable = this.checkDependencyAvailability(dep);
      this.dependencyCache.set(dep, isAvailable);
      
      if (!isAvailable) {
        console.log(`⚠️ Critical dependency missing: ${dep}`);
        this.autoFixDependency(dep);
      }
    }
  }

  private checkDependencyAvailability(dependency: string): boolean {
    try {
      // Vérifier dans node_modules
      const nodeModulesPath = path.join(process.cwd(), 'node_modules', '.bin', dependency);
      if (existsSync(nodeModulesPath)) {
        return true;
      }

      // Vérifier avec which/where
      const command = process.platform === 'win32' ? 'where' : 'which';
      execSync(`${command} ${dependency}`, { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  }

  private autoFixDependency(dependency: string): void {
    console.log(`🔄 Auto-fixing dependency: ${dependency}`);
    try {
      // Reinstaller la dépendance spécifique
      execSync(`npm install ${dependency}`, { stdio: 'inherit' });
      
      // Mettre à jour le cache
      this.dependencyCache.set(dependency, true);
      console.log(`✅ Successfully fixed: ${dependency}`);
    } catch (error) {
      console.error(`❌ Failed to fix dependency ${dependency}:`, error);
    }
  }

  // Méthode publique pour vérifier et corriger automatiquement
  public ensureDependenciesAvailable(): Promise<boolean> {
    return new Promise((resolve) => {
      let allAvailable = true;
      
      for (const dep of this.criticalDependencies) {
        if (!this.dependencyCache.get(dep)) {
          allAvailable = false;
          this.autoFixDependency(dep);
        }
      }
      
      resolve(allAvailable);
    });
  }

  public getDependencyStatus(): Map<string, boolean> {
    return new Map(this.dependencyCache);
  }
}

export const globalDependencyManager = AutonomousDependencyManager.getInstance();
