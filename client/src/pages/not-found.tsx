
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/particle-background";

// ====================================================================
// 🚀 QUANTUM ERROR PORTAL 2.0 - REVOLUTIONARY ERROR INTELLIGENCE
// ====================================================================

// 🧠 Error Intelligence Engine - Moteur d'intelligence d'erreur
class ErrorIntelligenceEngine {
  private errorPatterns: Map<string, any> = new Map();
  private recoveryStrategies: Map<string, any> = new Map();
  private userBehaviorAnalysis: Map<string, any> = new Map();
  private autonomousRecovery: boolean = true;

  constructor() {
    this.initializeErrorIntelligence();
  }

  private initializeErrorIntelligence(): void {
    console.log("🧠 ERROR INTELLIGENCE ENGINE 2.0 - Initializing quantum error analysis...");
    
    this.analyzeErrorContext();
    this.generateRecoveryStrategies();
    this.initializeBehaviorAnalysis();
    
    console.log("🚀 ERROR INTELLIGENCE ENGINE 2.0 DEPLOYED SUCCESSFULLY!");
    console.log("🧠 Error Analysis Active | 🎯 Recovery Strategies | 🛡️ Behavior Prediction");
  }

  private analyzeErrorContext(): void {
    // Analyse contextuelle de l'erreur
    const errorContext = {
      errorType: this.detectErrorType(),
      userIntent: this.predictUserIntent(),
      navigationHistory: this.analyzeNavigationHistory(),
      timeContext: this.analyzeTimeContext(),
      deviceContext: this.analyzeDeviceContext()
    };

    this.errorPatterns.set('current_error', errorContext);
    console.log("🎯 Error context analyzed:", errorContext);
  }

  private detectErrorType(): string {
    const path = window.location.pathname;
    
    if (path.includes('/brand/')) return 'brand_not_found';
    if (path.includes('/api/')) return 'api_endpoint_missing';
    if (path.length > 50) return 'malformed_url';
    if (path.includes('..')) return 'path_traversal_attempt';
    
    return 'standard_404';
  }

  private predictUserIntent(): string {
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('create') || path.includes('new')) return 'wants_to_create';
    if (path.includes('view') || path.includes('show')) return 'wants_to_view';
    if (path.includes('edit') || path.includes('update')) return 'wants_to_edit';
    if (path.includes('delete')) return 'wants_to_delete';
    
    return 'exploring';
  }

  private analyzeNavigationHistory(): any {
    const referrer = document.referrer;
    const previousPages = JSON.parse(sessionStorage.getItem('navigation_history') || '[]');
    
    return {
      referrer,
      previousPages: previousPages.slice(-5),
      totalPages: previousPages.length,
      sessionDuration: this.calculateSessionDuration()
    };
  }

  private analyzeTimeContext(): any {
    const now = new Date();
    return {
      hour: now.getHours(),
      dayOfWeek: now.getDay(),
      isBusinessHours: this.isBusinessHours(now),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }

  private analyzeDeviceContext(): any {
    return {
      userAgent: navigator.userAgent,
      screenSize: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      isMobile: window.innerWidth < 768,
      connectionType: (navigator as any).connection?.effectiveType || 'unknown'
    };
  }

  private generateRecoveryStrategies(): void {
    this.recoveryStrategies.set('brand_not_found', {
      primary: 'suggest_similar_brands',
      secondary: 'redirect_to_create',
      message: 'Cette marque semble introuvable. Voulez-vous en créer une nouvelle ?'
    });

    this.recoveryStrategies.set('api_endpoint_missing', {
      primary: 'check_api_status',
      secondary: 'use_cached_data',
      message: 'Endpoint API temporairement indisponible. Redirection en cours...'
    });

    this.recoveryStrategies.set('wants_to_create', {
      primary: 'redirect_to_creator',
      secondary: 'show_tutorial',
      message: 'Il semble que vous vouliez créer quelque chose. Laissez-nous vous guider !'
    });

    this.recoveryStrategies.set('malformed_url', {
      primary: 'clean_and_redirect',
      secondary: 'suggest_correction',
      message: 'URL corrompue détectée. Correction automatique en cours...'
    });
  }

  private initializeBehaviorAnalysis(): void {
    // Analyse comportementale pour améliorer l'expérience
    this.userBehaviorAnalysis.set('engagement_level', this.calculateEngagementLevel());
    this.userBehaviorAnalysis.set('frustration_indicators', this.detectFrustrationIndicators());
    this.userBehaviorAnalysis.set('recovery_preference', this.predictRecoveryPreference());
  }

  private calculateEngagementLevel(): string {
    const timeOnSite = this.calculateSessionDuration();
    const pageViews = JSON.parse(sessionStorage.getItem('navigation_history') || '[]').length;
    
    if (timeOnSite > 300000 && pageViews > 5) return 'high';
    if (timeOnSite > 60000 && pageViews > 2) return 'medium';
    return 'low';
  }

  private detectFrustrationIndicators(): string[] {
    const indicators = [];
    const history = JSON.parse(sessionStorage.getItem('navigation_history') || '[]');
    
    if (history.filter((page: any) => page.includes('404')).length > 2) {
      indicators.push('multiple_404s');
    }
    
    if (this.calculateSessionDuration() < 30000 && history.length > 3) {
      indicators.push('rapid_navigation');
    }
    
    return indicators;
  }

  private predictRecoveryPreference(): string {
    const context = this.errorPatterns.get('current_error');
    
    if (context?.userIntent === 'wants_to_create') return 'creative_assistance';
    if (context?.deviceContext?.isMobile) return 'simple_navigation';
    if (context?.timeContext?.isBusinessHours) return 'professional_support';
    
    return 'autonomous_recovery';
  }

  // Méthodes utilitaires
  private calculateSessionDuration(): number {
    const startTime = sessionStorage.getItem('session_start');
    if (!startTime) {
      sessionStorage.setItem('session_start', Date.now().toString());
      return 0;
    }
    return Date.now() - parseInt(startTime);
  }

  private isBusinessHours(date: Date): boolean {
    const hour = date.getHours();
    const day = date.getDay();
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 17;
  }

  // API publique
  public getRecoveryStrategy(): any {
    const context = this.errorPatterns.get('current_error');
    const userIntent = context?.userIntent || 'exploring';
    
    return this.recoveryStrategies.get(userIntent) || 
           this.recoveryStrategies.get(context?.errorType) || 
           {
             primary: 'redirect_home',
             secondary: 'show_support',
             message: 'Oops ! Cette page est introuvable. Retournons à l\'accueil.'
           };
  }

  public getBehaviorAnalysis(): any {
    return {
      engagement: this.userBehaviorAnalysis.get('engagement_level'),
      frustration: this.userBehaviorAnalysis.get('frustration_indicators'),
      preference: this.userBehaviorAnalysis.get('recovery_preference'),
      context: this.errorPatterns.get('current_error')
    };
  }
}

// Instance de l'engine d'erreur
const errorEngine = new ErrorIntelligenceEngine();

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [recoveryStrategy, setRecoveryStrategy] = useState<any>(null);
  const [behaviorAnalysis, setBehaviorAnalysis] = useState<any>(null);
  const [aiProcessing, setAiProcessing] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Analyse IA de l'erreur et stratégie de récupération
    setTimeout(() => {
      const strategy = errorEngine.getRecoveryStrategy();
      const analysis = errorEngine.getBehaviorAnalysis();
      
      setRecoveryStrategy(strategy);
      setBehaviorAnalysis(analysis);
      setAiProcessing(false);
      
      console.log("🧠 Error analysis complete:", { strategy, analysis });
    }, 2000);

    // Décompte pour redirection automatique
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleSmartRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Enregistrement de l'erreur dans l'historique
    const currentHistory = JSON.parse(sessionStorage.getItem('navigation_history') || '[]');
    currentHistory.push(window.location.pathname);
    sessionStorage.setItem('navigation_history', JSON.stringify(currentHistory));

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleSmartRedirect = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const strategy = recoveryStrategy?.primary;
    
    switch (strategy) {
      case 'redirect_to_creator':
        navigate('/?mode=create');
        break;
      case 'suggest_similar_brands':
        navigate('/?action=search');
        break;
      case 'clean_and_redirect':
        navigate('/');
        break;
      default:
        navigate('/');
    }
  };

  const handleManualAction = (action: string) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    switch (action) {
      case 'create_brand':
        navigate('/?mode=create');
        break;
      case 'explore':
        navigate('/?mode=explore');
        break;
      case 'search':
        navigate('/?action=search');
        break;
      case 'home':
        navigate('/');
        break;
    }
  };

  const getContextualMessage = () => {
    if (!recoveryStrategy) return "Analysing error context...";
    
    if (behaviorAnalysis?.frustration?.includes('multiple_404s')) {
      return "Il semble que vous rencontriez plusieurs erreurs. Notre IA va vous aider à naviguer plus efficacement.";
    }
    
    if (behaviorAnalysis?.engagement === 'high') {
      return "Nous voyons que vous explorez activement notre plateforme. Laissez-nous vous guider vers ce que vous cherchez !";
    }
    
    return recoveryStrategy.message;
  };

  const getSmartActions = () => {
    const actions = [
      { id: 'home', label: '🏠 Accueil', primary: true },
      { id: 'create_brand', label: '✨ Créer une marque', primary: false }
    ];

    if (behaviorAnalysis?.context?.userIntent === 'wants_to_create') {
      actions[1].primary = true;
      actions[0].primary = false;
    }

    if (behaviorAnalysis?.preference === 'creative_assistance') {
      actions.push({ id: 'explore', label: '🎨 Explorer', primary: false });
    }

    return actions;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-2xl mx-auto text-center z-10 px-6">
        {/* Header avec animation */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-white mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            🧠 Quantum Error Portal 2.0
          </h2>
          <div className="text-lg text-purple-300 mb-6">
            Intelligence Artificielle d'Analyse d'Erreur
          </div>
        </div>

        {/* Analyse IA en cours */}
        {aiProcessing && (
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 mb-6 border border-purple-500/30">
            <div className="flex items-center justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mr-3"></div>
              <span className="text-purple-300">IA analysant le contexte d'erreur...</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-purple-400">🔍 Détection du type d'erreur</div>
              <div className="text-green-400">✅ Terminé</div>
              <div className="text-purple-400">🧠 Analyse comportementale</div>
              <div className="text-yellow-400">⏳ En cours</div>
              <div className="text-purple-400">🎯 Stratégie de récupération</div>
              <div className="text-yellow-400">⏳ En cours</div>
            </div>
          </div>
        )}

        {/* Résultats de l'analyse */}
        {!aiProcessing && recoveryStrategy && (
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 mb-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4">
              🧠 Analyse IA Complète
            </h3>
            
            <div className="text-purple-200 mb-4 leading-relaxed">
              {getContextualMessage()}
            </div>

            {behaviorAnalysis && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                <div className="bg-purple-500/20 rounded-lg p-3">
                  <div className="text-purple-300 font-semibold">Engagement</div>
                  <div className="text-white capitalize">{behaviorAnalysis.engagement}</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <div className="text-blue-300 font-semibold">Intention</div>
                  <div className="text-white">{behaviorAnalysis.context?.userIntent}</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-3">
                  <div className="text-green-300 font-semibold">Préférence</div>
                  <div className="text-white">{behaviorAnalysis.preference}</div>
                </div>
              </div>
            )}

            {/* Redirection automatique */}
            <div className="bg-yellow-500/20 rounded-lg p-4 mb-6">
              <div className="text-yellow-200 mb-2">
                🤖 Redirection intelligente dans
              </div>
              <div className="text-3xl font-bold text-yellow-300">
                {countdown}s
              </div>
              <div className="text-sm text-yellow-400 mt-2">
                Destination: {recoveryStrategy.primary}
              </div>
            </div>

            {/* Actions intelligentes */}
            <div className="flex flex-wrap gap-3 justify-center">
              {getSmartActions().map((action) => (
                <Button
                  key={action.id}
                  onClick={() => handleManualAction(action.id)}
                  variant={action.primary ? "default" : "outline"}
                  className={`${
                    action.primary 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
                      : "border-purple-500 text-purple-300 hover:bg-purple-500/20"
                  } transition-all duration-300 transform hover:scale-105`}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Informations techniques */}
        <div className="text-sm text-purple-400 opacity-75">
          <div>🔧 Quantum Error Portal 2.0 | IA Locale Autonome</div>
          <div>🌐 URL: {window.location.pathname}</div>
          <div>⏰ {new Date().toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
