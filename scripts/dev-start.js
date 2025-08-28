
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
    this.checkClientDependencies();
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

  checkClientDependencies() {
    const clientPath = path.join(process.cwd(), 'client');
    const clientPackageJson = path.join(clientPath, 'package.json');
    
    if (!existsSync(clientPackageJson)) {
      console.log("⚡ Initializing client dependencies...");
      this.initializeClient();
    } else {
      console.log("✅ Client dependencies validated");
    }
  }

  initializeClient() {
    try {
      const clientPath = path.join(process.cwd(), 'client');
      if (existsSync(clientPath)) {
        process.chdir(clientPath);
        execSync('npm install', { stdio: 'inherit' });
        process.chdir('..');
        console.log("✅ Client dependencies installed");
      }
    } catch (error) {
      console.error("❌ Failed to initialize client:", error.message);
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
    
    try {
      // Commandes séparées et correctement formatées
      const backendCmd = 'npx tsx server/index.ts';
      const frontendCmd = 'cd client && npm run dev -- --host 0.0.0.0 --port 5173';
      
      // Utilisation directe de npx concurrently
      const concurrentlyCmd = `npx concurrently --kill-others --prefix-colors "cyan.bold,magenta.bold" --names "BACKEND,FRONTEND" "${backendCmd}" "${frontendCmd}"`;
      
      const child = spawn('sh', ['-c', concurrentlyCmd], {
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'development' }
      });

      child.on('error', (error) => {
        console.error('❌ Development server error:', error);
        process.exit(1);
      });

      child.on('exit', (code) => {
        if (code !== 0) {
          console.error(`❌ Process exited with code ${code}`);
          process.exit(code);
        }
      });

    } catch (error) {
      console.error('❌ Failed to start development environment:', error);
      this.fallbackStart();
    }
  }

  fallbackStart() {
    console.log("🔄 Starting fallback mode...");
    
    // Démarrage séquentiel en fallback
    console.log("🚀 Starting backend...");
    const backend = spawn('npx', ['tsx', 'server/index.ts'], {
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'development' }
    });

    setTimeout(() => {
      console.log("🚀 Starting frontend...");
      const frontend = spawn('sh', ['-c', 'cd client && npm run dev -- --host 0.0.0.0 --port 5173'], {
        stdio: 'inherit'
      });
    }, 2000);
  }
}

new QuantumDevStarter();
