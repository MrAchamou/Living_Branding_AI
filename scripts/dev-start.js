
#!/usr/bin/env node

// 🚀 QUANTUM DEV STARTER - Démarreur de développement autonome
import { execSync, spawn } from "child_process";
import { existsSync } from "fs";
import path from "path";

class QuantumDevStarter {
  constructor() {
    this.criticalDeps = ['concurrently', 'tsx'];
    this.init();
  }

  init() {
    console.log("🚀 QUANTUM DEV STARTER - Initializing...");
    this.validateEnvironment();
    this.startDevelopment();
  }

  validateEnvironment() {
    console.log("🔍 Validating development environment...");
    
    for (const dep of this.criticalDeps) {
      if (!this.checkDep(dep)) {
        console.log(`⚡ Auto-fixing missing dependency: ${dep}`);
        this.fixDep(dep);
      }
    }
  }

  checkDep(dep) {
    try {
      const nodeBin = path.join(process.cwd(), 'node_modules', '.bin', dep);
      return existsSync(nodeBin);
    } catch {
      return false;
    }
  }

  fixDep(dep) {
    try {
      execSync(`npm install ${dep}`, { stdio: 'inherit' });
      console.log(`✅ Fixed: ${dep}`);
    } catch (error) {
      console.error(`❌ Failed to fix ${dep}:`, error.message);
    }
  }

  startDevelopment() {
    console.log("🚀 Starting Quantum Development Environment...");
    
    // Utiliser le chemin complet vers concurrently
    const concurrentlyPath = path.join(process.cwd(), 'node_modules', '.bin', 'concurrently');
    
    const args = [
      '--kill-others',
      '--prefix-colors', 'cyan.bold,magenta.bold',
      '--names', 'BACKEND,FRONTEND',
      'NODE_ENV=development tsx server/index.ts',
      'cd client && npm run dev -- --host 0.0.0.0'
    ];

    const child = spawn('node', [concurrentlyPath, ...args], {
      stdio: 'inherit',
      shell: true
    });

    child.on('error', (error) => {
      console.error('❌ Development server error:', error);
      process.exit(1);
    });
  }
}

new QuantumDevStarter();
