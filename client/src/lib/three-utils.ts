import * as THREE from 'three';

// ====================================================================
// THREE.JS QUANTUM ENGINE 2.0 - REVOLUTIONARY 3D RENDERING SYSTEM
// ====================================================================

// Quantum Particle System Manager
class QuantumParticleEngine {
  private particleSystems: Map<string, THREE.Points> = new Map();
  private animationClocks: Map<string, THREE.Clock> = new Map();
  private quantumFields: Map<string, any> = new Map();

  createQuantumParticleField(scene: THREE.Scene, config: any = {}): THREE.Points {
    const {
      count = 500,
      range = 25,
      colors = [0x8B5CF6, 0xEC4899, 0x06B6D4, 0x10B981, 0xF59E0B],
      size = 0.15,
      behavior = 'quantum'
    } = config;

    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const particleColors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Quantum positioning with spiral distribution
      const angle = (i / count) * Math.PI * 2 * 5;
      const radius = (i / count) * range * 0.8;
      
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 10;

      // Quantum velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      // Dynamic color selection
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = new THREE.Color(colors[colorIndex]);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;

      // Variable sizes for depth effect
      sizes[i] = size * (0.5 + Math.random() * 1.5);
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Quantum material with revolutionary effects
    const material = new THREE.PointsMaterial({
      size,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      alphaTest: 0.1,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    // Store for animation
    const id = `quantum_${Date.now()}`;
    this.particleSystems.set(id, particleSystem);
    this.animationClocks.set(id, new THREE.Clock());
    this.quantumFields.set(id, { config, behavior });

    return particleSystem;
  }

  animateQuantumField(particleSystem: THREE.Points, delta: number, brandData?: any): void {
    const positions = particleSystem.geometry.attributes.position.array as Float32Array;
    const velocities = particleSystem.geometry.attributes.velocity.array as Float32Array;
    const colors = particleSystem.geometry.attributes.color.array as Float32Array;
    
    const time = Date.now() * 0.001;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Quantum wave motion
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // Revolutionary physics simulation
      const waveX = Math.sin(time * 0.5 + x * 0.1) * 0.05;
      const waveY = Math.cos(time * 0.3 + z * 0.1) * 0.03;
      const waveZ = Math.sin(time * 0.7 + y * 0.1) * 0.04;

      positions[i] += velocities[i] + waveX;
      positions[i + 1] += velocities[i + 1] + waveY;
      positions[i + 2] += velocities[i + 2] + waveZ;

      // Boundary wrapping for infinite effect
      if (Math.abs(positions[i]) > 25) positions[i] *= -0.8;
      if (Math.abs(positions[i + 1]) > 15) positions[i + 1] *= -0.8;
      if (Math.abs(positions[i + 2]) > 25) positions[i + 2] *= -0.8;

      // Color evolution based on brand data
      if (brandData?.creativeDNA) {
        const colorShift = Math.sin(time + i * 0.01) * 0.1;
        colors[i] = Math.max(0, Math.min(1, colors[i] + colorShift * 0.1));
        colors[i + 1] = Math.max(0, Math.min(1, colors[i + 1] + colorShift * 0.05));
        colors[i + 2] = Math.max(0, Math.min(1, colors[i + 2] + colorShift * 0.15));
      }
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
    
    // Global rotation for hypnotic effect
    particleSystem.rotation.y += delta * 0.1;
    particleSystem.rotation.x += delta * 0.05;
  }
}

// Revolutionary Logo Generator
class RevolutionaryLogoEngine {
  private logoCache: Map<string, THREE.Group> = new Map();
  
  generateBrandLogo(scene: THREE.Scene, creativeDNA: any): THREE.Group {
    const cacheKey = creativeDNA?.quantumSignature || 'default';
    
    if (this.logoCache.has(cacheKey)) {
      const cached = this.logoCache.get(cacheKey)!.clone();
      scene.add(cached);
      return cached;
    }

    const group = new THREE.Group();
    
    // Extract visual essence
    const visualEssence = creativeDNA?.visualEssence || {
      primaryColors: ["#8B5CF6", "#EC4899", "#06B6D4"],
      secondaryColors: ["#10B981", "#F59E0B"],
      opacity: 0.85,
      saturation: 80
    };

    // Core geometric form based on brand DNA
    const coreGeometry = this.selectCoreGeometry(creativeDNA);
    const coreMaterial = this.createQuantumMaterial(visualEssence.primaryColors[0], visualEssence.opacity);
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    // Orbital elements
    const orbitalCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < orbitalCount; i++) {
      const orbital = this.createOrbitalElement(visualEssence, i);
      group.add(orbital);
    }

    // Energy field
    const energyField = this.createEnergyField(visualEssence);
    group.add(energyField);

    // Holographic effects
    const hologram = this.createHolographicLayer(visualEssence);
    group.add(hologram);

    scene.add(group);
    this.logoCache.set(cacheKey, group);
    
    return group;
  }

  private selectCoreGeometry(creativeDNA: any): THREE.BufferGeometry {
    const revolutionary = creativeDNA?.revolutionaryFactor || 10;
    
    if (revolutionary > 14) {
      // Impossible geometry
      return new THREE.IcosahedronGeometry(2, 2);
    } else if (revolutionary > 12) {
      // Advanced geometry
      return new THREE.OctahedronGeometry(2.2);
    } else {
      // Standard but optimized
      return new THREE.SphereGeometry(2, 32, 32);
    }
  }

  private createQuantumMaterial(color: string, opacity: number): THREE.Material {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity,
      envMapIntensity: 2.0,
      emissive: new THREE.Color(color).multiplyScalar(0.2)
    });
  }

  private createOrbitalElement(visualEssence: any, index: number): THREE.Mesh {
    const radius = 3 + index * 0.8;
    const geometry = new THREE.RingGeometry(radius, radius + 0.2, 32);
    const color = visualEssence.primaryColors[index % visualEssence.primaryColors.length] || "#8B5CF6";
    
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.7 - index * 0.1,
      metalness: 0.8,
      roughness: 0.2,
      side: THREE.DoubleSide
    });
    
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = Math.PI / 2 + (index * Math.PI / 6);
    ring.rotation.y = index * Math.PI / 4;
    
    return ring;
  }

  private createEnergyField(visualEssence: any): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(4.5, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(visualEssence.primaryColors[0] || "#8B5CF6"),
      transparent: true,
      opacity: 0.1,
      wireframe: true
    });
    
    return new THREE.Mesh(geometry, material);
  }

  private createHolographicLayer(visualEssence: any): THREE.Mesh {
    const geometry = new THREE.PlaneGeometry(8, 8, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(visualEssence.secondaryColors[0] || "#10B981"),
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI / 4;
    plane.position.z = -2;
    
    return plane;
  }
}

// Quantum Lighting System
class QuantumLightingEngine {
  private lights: THREE.Light[] = [];
  private lightConfigs: Map<string, any> = new Map();

  setupRevolutionaryLighting(scene: THREE.Scene, creativeDNA: any): void {
    // Clear existing lights
    this.clearLights(scene);

    // Adaptive lighting based on brand essence
    const visualEssence = creativeDNA?.visualEssence || {};
    const emotionalResonance = creativeDNA?.emotionalResonance || {};

    // Quantum ambient lighting
    const ambientIntensity = 0.2 + (emotionalResonance.trust || 0.8) * 0.3;
    const ambient = new THREE.AmbientLight(0x404040, ambientIntensity);
    scene.add(ambient);
    this.lights.push(ambient);

    // Primary directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(8, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);
    this.lights.push(mainLight);

    // Dynamic color lights based on brand palette
    const colors = visualEssence.primaryColors || ["#8B5CF6", "#EC4899", "#06B6D4"];
    colors.forEach((color: string, index: number) => {
      const light = new THREE.PointLight(new THREE.Color(color), 2.5, 50);
      const angle = (index / colors.length) * Math.PI * 2;
      light.position.set(
        Math.cos(angle) * 12,
        5 + Math.sin(angle) * 3,
        Math.sin(angle) * 12
      );
      scene.add(light);
      this.lights.push(light);
    });

    // Hypnotic accent lighting
    const hypnoticLight = new THREE.SpotLight(0xffffff, 3, 30, Math.PI / 6, 0.5);
    hypnoticLight.position.set(0, 20, 0);
    hypnoticLight.target.position.set(0, 0, 0);
    scene.add(hypnoticLight);
    scene.add(hypnoticLight.target);
    this.lights.push(hypnoticLight);
  }

  animateLighting(delta: number, brandData?: any): void {
    const time = Date.now() * 0.001;
    
    this.lights.forEach((light, index) => {
      if (light instanceof THREE.PointLight) {
        // Orbital motion for point lights
        const radius = 12;
        const speed = 0.5 + index * 0.2;
        const angle = time * speed + index * Math.PI / 2;
        
        light.position.x = Math.cos(angle) * radius;
        light.position.z = Math.sin(angle) * radius;
        light.position.y = 5 + Math.sin(time * 0.8 + index) * 3;

        // Intensity pulsing
        const baseIntensity = 2.5;
        const pulse = Math.sin(time * 2 + index) * 0.5 + 0.5;
        light.intensity = baseIntensity + pulse * 1.0;
      }
      
      if (light instanceof THREE.SpotLight) {
        // Hypnotic rotation
        light.position.x = Math.sin(time * 0.3) * 5;
        light.position.z = Math.cos(time * 0.3) * 5;
      }
    });
  }

  private clearLights(scene: THREE.Scene): void {
    this.lights.forEach(light => {
      scene.remove(light);
      if (light instanceof THREE.SpotLight && light.target) {
        scene.remove(light.target);
      }
    });
    this.lights = [];
  }
}

// Advanced Animation Controller
class QuantumAnimationController {
  private animationMixers: THREE.AnimationMixer[] = [];
  private clock: THREE.Clock = new THREE.Clock();

  createRevolutionaryAnimation(
    logo: THREE.Group,
    particles: THREE.Points,
    lights: QuantumLightingEngine,
    creativeDNA: any
  ): () => void {
    const revolutionaryFactor = creativeDNA?.revolutionaryFactor || 10;
    const hypnoticPower = parseFloat(creativeDNA?.hypnoticPowerScore || "12.0");
    
    return () => {
      const delta = this.clock.getDelta();
      const time = Date.now() * 0.001;

      // Logo animation based on revolutionary factor
      if (logo) {
        const rotationSpeed = (revolutionaryFactor / 15) * 0.5;
        logo.rotation.x += delta * rotationSpeed;
        logo.rotation.y += delta * rotationSpeed * 0.7;
        
        // Hypnotic scaling
        const scale = 1 + Math.sin(time * 1.5) * 0.1 * (hypnoticPower / 15);
        logo.scale.setScalar(scale);

        // Impossible floating effect
        logo.position.y = Math.sin(time * 0.8) * 0.5;
      }

      // Particle system animation
      if (particles) {
        particleEngine.animateQuantumField(particles, delta, creativeDNA);
      }

      // Lighting animation
      lights.animateLighting(delta, creativeDNA);
    };
  }
}

// Initialize quantum engines
const particleEngine = new QuantumParticleEngine();
const logoEngine = new RevolutionaryLogoEngine();
const lightingEngine = new QuantumLightingEngine();
const animationController = new QuantumAnimationController();

// Legacy compatibility functions (enhanced)
export const createPurpleGradientMaterial = () => {
  return new THREE.MeshStandardMaterial({
    color: 0x8B5CF6,
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 2.0,
    emissive: new THREE.Color(0x8B5CF6).multiplyScalar(0.1)
  });
};

export const createParticleSystem = (scene: THREE.Scene, config?: any) => {
  return particleEngine.createQuantumParticleField(scene, config);
};

export const createRevolutionaryLogo = (scene: THREE.Scene, creativeDNA?: any) => {
  return logoEngine.generateBrandLogo(scene, creativeDNA);
};

export const setupLighting = (scene: THREE.Scene, creativeDNA?: any) => {
  lightingEngine.setupRevolutionaryLighting(scene, creativeDNA);
  return lightingEngine;
};

export const animateScene = (
  logo: THREE.Group,
  particles: THREE.Points,
  delta: number,
  lightingEngine?: QuantumLightingEngine,
  creativeDNA?: any
) => {
  // Enhanced animation with quantum effects
  if (lightingEngine) {
    lightingEngine.animateLighting(delta, creativeDNA);
  }
  
  if (particles) {
    particleEngine.animateQuantumField(particles, delta, creativeDNA);
  }
  
  if (logo) {
    const revolutionaryFactor = creativeDNA?.revolutionaryFactor || 10;
    const speed = (revolutionaryFactor / 15) * 0.5;
    
    logo.rotation.x += delta * speed;
    logo.rotation.y += delta * speed * 0.7;
    
    const time = Date.now() * 0.001;
    logo.position.y = Math.sin(time * 0.8) * 0.3;
    
    const scale = 1 + Math.sin(time * 1.2) * 0.05;
    logo.scale.setScalar(scale);
  }
};

// Revolutionary new exports
export const QuantumEngines = {
  particles: particleEngine,
  logo: logoEngine,
  lighting: lightingEngine,
  animation: animationController
};

export const createQuantumScene = (scene: THREE.Scene, creativeDNA: any) => {
  // Create complete quantum scene
  const particles = particleEngine.createQuantumParticleField(scene, {
    count: 800,
    range: 30,
    behavior: 'quantum',
    colors: creativeDNA?.visualEssence?.primaryColors?.map((c: string) => new THREE.Color(c).getHex()) || 
            [0x8B5CF6, 0xEC4899, 0x06B6D4, 0x10B981]
  });
  
  const logo = logoEngine.generateBrandLogo(scene, creativeDNA);
  lightingEngine.setupRevolutionaryLighting(scene, creativeDNA);
  
  const animate = animationController.createRevolutionaryAnimation(
    logo, particles, lightingEngine, creativeDNA
  );
  
  return {
    particles,
    logo,
    lighting: lightingEngine,
    animate,
    quantumSignature: creativeDNA?.quantumSignature || `QS-${Date.now().toString(16).toUpperCase()}`
  };
};