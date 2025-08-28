import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  createQuantumScene,
  QuantumEngines,
  animateScene
} from "@/lib/three-utils";

// ====================================================================
// THREE.JS QUANTUM SCENE 2.0 - REVOLUTIONARY 3D VISUALIZATION
// ====================================================================

interface ThreeSceneProps {
  isVisible?: boolean;
  creativeDNA?: any;
  brandData?: any;
  hypnoticMode?: boolean;
  performanceMode?: 'turbo' | 'balanced' | 'cinematic';
  onSceneReady?: (sceneData: any) => void;
  onPerformanceUpdate?: (metrics: any) => void;
}

// Performance Monitor for Revolutionary Graphics
class ScenePerformanceMonitor {
  private frameCount = 0;
  private lastTime = 0;
  private fps = 60;
  private frameTime = 16.67;
  private gpuMemory = 0;

  updateMetrics(renderer: THREE.WebGLRenderer) {
    const now = performance.now();
    this.frameCount++;
    
    if (now - this.lastTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastTime = now;
    }
    
    // Estimate GPU memory usage
    const info = renderer.info;
    this.gpuMemory = info.memory.geometries + info.memory.textures;
    
    return {
      fps: this.fps,
      frameTime: this.frameTime,
      drawCalls: info.render.calls,
      triangles: info.render.triangles,
      gpuMemory: this.gpuMemory,
      status: this.getPerformanceStatus()
    };
  }

  private getPerformanceStatus(): string {
    if (this.fps >= 55) return 'excellent';
    if (this.fps >= 45) return 'good';
    if (this.fps >= 30) return 'fair';
    return 'poor';
  }
}

export default function QuantumThreeScene({ 
  isVisible = true, 
  creativeDNA, 
  brandData,
  hypnoticMode = true,
  performanceMode = 'cinematic',
  onSceneReady,
  onPerformanceUpdate
}: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const quantumSceneRef = useRef<any>(null);
  const animationRef = useRef<number | null>(null);
  const performanceMonitor = useRef<ScenePerformanceMonitor>(new ScenePerformanceMonitor());
  
  const [sceneStatus, setSceneStatus] = useState<string>('initializing');
  const [performanceMetrics, setPerformanceMetrics] = useState<any>({});

  // Revolutionary scene initialization
  const initializeQuantumScene = useCallback(() => {
    if (!mountRef.current) return;

    try {
      setSceneStatus('creating_quantum_reality');

      // Scene setup with quantum parameters
      const scene = new THREE.Scene();
      
      // Dynamic background based on creative DNA
      const bgColor = creativeDNA?.visualEssence?.primaryColors?.[0] || "#0a0a0a";
      scene.background = new THREE.Color(bgColor).multiplyScalar(0.1);
      scene.fog = new THREE.Fog(scene.background.getHex(), 30, 100);
      
      sceneRef.current = scene;

      // Camera with adaptive settings
      const aspect = 1; // Will be updated
      const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
      camera.position.set(0, 0, 8);
      cameraRef.current = camera;

      // Renderer with revolutionary settings
      const renderer = new THREE.WebGLRenderer({ 
        antialias: performanceMode !== 'turbo', 
        alpha: true,
        powerPreference: performanceMode === 'cinematic' ? 'high-performance' : 'low-power'
      });
      
      renderer.setSize(400, 400);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, performanceMode === 'turbo' ? 1 : 2));
      renderer.shadowMap.enabled = performanceMode !== 'turbo';
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);

      setSceneStatus('quantum_controls_calibration');

      // Revolutionary controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = hypnoticMode ? 0.03 : 0.08;
      controls.enableZoom = true;
      controls.enablePan = false;
      controls.maxDistance = 15;
      controls.minDistance = 4;
      controls.autoRotate = hypnoticMode;
      controls.autoRotateSpeed = hypnoticMode ? 1.5 : 0;
      controlsRef.current = controls;

      setSceneStatus('generating_quantum_universe');

      // Create quantum scene with creative DNA
      const quantumScene = createQuantumScene(scene, creativeDNA);
      quantumSceneRef.current = quantumScene;

      setSceneStatus('quantum_reality_active');

      // Scene ready callback
      if (onSceneReady) {
        onSceneReady({
          scene,
          camera,
          renderer,
          quantumScene,
          signature: quantumScene.quantumSignature
        });
      }

      return { scene, camera, renderer, controls, quantumScene };

    } catch (error) {
      console.error('Quantum scene initialization failed:', error);
      setSceneStatus('quantum_malfunction');
      return null;
    }
  }, [creativeDNA, hypnoticMode, performanceMode, onSceneReady]);

  // Revolutionary animation loop
  const startQuantumAnimation = useCallback((sceneData: any) => {
    if (!sceneData) return;

    const { scene, camera, renderer, controls, quantumScene } = sceneData;
    const clock = new THREE.Clock();
    
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = clock.getDelta();
      
      // Update controls
      if (controls) {
        controls.update();
      }

      // Quantum animation
      if (quantumScene?.animate) {
        quantumScene.animate();
      }

      // Performance monitoring
      if (performanceMonitor.current && onPerformanceUpdate) {
        const metrics = performanceMonitor.current.updateMetrics(renderer);
        setPerformanceMetrics(metrics);
        onPerformanceUpdate(metrics);
      }

      // Render the quantum reality
      renderer.render(scene, camera);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, [isVisible, onPerformanceUpdate]);

  // Handle window resize with quantum precision
  const handleResize = useCallback(() => {
    if (!cameraRef.current || !rendererRef.current || !mountRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height, 500);
    
    cameraRef.current.aspect = 1;
    cameraRef.current.updateProjectionMatrix();
    
    rendererRef.current.setSize(size, size);
  }, []);

  // Update creative DNA dynamically
  useEffect(() => {
    if (!quantumSceneRef.current || !sceneRef.current) return;

    // Regenerate quantum scene with new DNA
    const newQuantumScene = createQuantumScene(sceneRef.current, creativeDNA);
    
    // Remove old scene elements
    if (quantumSceneRef.current.particles) {
      sceneRef.current.remove(quantumSceneRef.current.particles);
    }
    if (quantumSceneRef.current.logo) {
      sceneRef.current.remove(quantumSceneRef.current.logo);
    }

    quantumSceneRef.current = newQuantumScene;
  }, [creativeDNA]);

  // Initialize scene
  useEffect(() => {
    const sceneData = initializeQuantumScene();
    if (sceneData) {
      startQuantumAnimation(sceneData);
    }

    // Resize listener
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      // Cleanup quantum reality
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, [initializeQuantumScene, startQuantumAnimation, handleResize]);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Quantum Canvas Container */}
      <div 
        ref={mountRef}
        className={`
          relative w-[400px] h-[400px] rounded-2xl overflow-hidden
          ${hypnoticMode ? 'animate-pulse-slow' : ''}
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          boxShadow: hypnoticMode 
            ? '0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 60px rgba(236, 72, 153, 0.2)'
            : '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}
      />

      {/* Quantum Status Overlay */}
      {sceneStatus !== 'quantum_reality_active' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl">
          <div className="text-center text-white">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto" />
            <p className="text-sm font-medium">
              {sceneStatus === 'initializing' && 'Initializing Quantum Reality...'}
              {sceneStatus === 'creating_quantum_reality' && 'Creating Quantum Reality...'}
              {sceneStatus === 'quantum_controls_calibration' && 'Calibrating Quantum Controls...'}
              {sceneStatus === 'generating_quantum_universe' && 'Generating Brand Universe...'}
              {sceneStatus === 'quantum_malfunction' && 'Quantum Malfunction Detected'}
            </p>
          </div>
        </div>
      )}

      {/* Performance Metrics (Development Mode) */}
      {process.env.NODE_ENV === 'development' && performanceMetrics.fps && (
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs p-2 rounded font-mono">
          <div>FPS: {performanceMetrics.fps}</div>
          <div>Calls: {performanceMetrics.drawCalls}</div>
          <div>Status: {performanceMetrics.status}</div>
        </div>
      )}

      {/* Quantum Signature */}
      {quantumSceneRef.current?.quantumSignature && (
        <div className="absolute bottom-2 right-2 text-xs text-purple-300/60 font-mono">
          {quantumSceneRef.current.quantumSignature}
        </div>
      )}
    </div>
  );
}

// Legacy export for compatibility
export { QuantumThreeScene };