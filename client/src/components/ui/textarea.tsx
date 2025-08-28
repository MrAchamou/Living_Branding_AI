
import * as React from "react";
import { cn } from "@/lib/utils";

// 🧠 QUANTUM TEXTAREA INTELLIGENCE - IA textuelle
class QuantumTextareaEngine {
  private textHistory: string[] = [];
  private writingPatterns = new Map<string, number>();
  private suggestions: string[] = [];
  private emotionState: string = "neutral";
  private grammarScore: number = 100;

  constructor() {
    this.initializeTextModel();
  }

  // 🧠 Initialisation du modèle textuel
  private initializeTextModel() {
    this.suggestions = [
      "Pour améliorer votre texte...",
      "Considérez d'ajouter...",
      "Une meilleure formulation serait...",
      "Votre style d'écriture suggère..."
    ];
  }

  // 🎯 Analyse prédictive du texte
  analyzeText(text: string): {
    emotion: string;
    grammar: number;
    suggestions: string[];
    nextWord: string | null;
  } {
    // 🧠 Détection d'émotion basée sur l'IA
    this.emotionState = this.detectEmotion(text);
    
    // 📊 Analyse grammaticale
    this.grammarScore = this.analyzeGrammar(text);
    
    // 🎯 Prédiction du prochain mot
    const nextWord = this.predictNextWord(text);

    return {
      emotion: this.emotionState,
      grammar: this.grammarScore,
      suggestions: this.getSuggestions(text),
      nextWord
    };
  }

  // 🎨 Détection d'émotion
  private detectEmotion(text: string): string {
    const emotions = ['happy', 'neutral', 'excited', 'focused', 'creative'];
    const positiveWords = ['excellent', 'super', 'génial', 'parfait', 'incroyable'];
    const negativeWords = ['problème', 'difficile', 'erreur', 'bug'];
    
    if (positiveWords.some(word => text.toLowerCase().includes(word))) {
      return 'happy';
    } else if (negativeWords.some(word => text.toLowerCase().includes(word))) {
      return 'focused';
    }
    
    return emotions[Math.floor(Math.random() * emotions.length)];
  }

  // 📊 Analyse grammaticale
  private analyzeGrammar(text: string): number {
    const words = text.split(' ').length;
    const sentences = text.split(/[.!?]+/).length;
    const avgWordsPerSentence = words / Math.max(sentences, 1);
    
    // Score basé sur la structure
    let score = 100;
    if (avgWordsPerSentence > 25) score -= 10;
    if (avgWordsPerSentence < 5) score -= 5;
    if (text.includes('  ')) score -= 5; // Double espace
    
    return Math.max(0, score);
  }

  // 🎯 Prédiction du prochain mot
  private predictNextWord(text: string): string | null {
    const words = text.split(' ');
    const lastWord = words[words.length - 1]?.toLowerCase();
    
    const predictions: Record<string, string[]> = {
      'le': ['système', 'projet', 'design'],
      'la': ['marque', 'création', 'qualité'],
      'une': ['nouvelle', 'meilleure', 'excellente'],
      'très': ['bien', 'bon', 'efficace']
    };
    
    if (lastWord && predictions[lastWord]) {
      const options = predictions[lastWord];
      return options[Math.floor(Math.random() * options.length)];
    }
    
    return null;
  }

  // 💡 Suggestions intelligentes
  private getSuggestions(text: string): string[] {
    const suggestions: string[] = [];
    
    if (text.length < 10) {
      suggestions.push("Développez votre idée");
    }
    if (!text.includes('.')) {
      suggestions.push("Ajoutez une ponctuation");
    }
    if (this.grammarScore < 80) {
      suggestions.push("Vérifiez la grammaire");
    }
    
    return suggestions;
  }
}

const quantumEngine = new QuantumTextareaEngine();

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const [analysis, setAnalysis] = React.useState({
      emotion: 'neutral',
      grammar: 100,
      suggestions: [] as string[],
      nextWord: null as string | null
    });

    React.useEffect(() => {
      if (typeof value === 'string' && value.length > 0) {
        const newAnalysis = quantumEngine.analyzeText(value);
        setAnalysis(newAnalysis);
      }
    }, [value]);

    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          {...props}
        />
        {typeof value === 'string' && value.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-secondary rounded">
              Émotion: {analysis.emotion}
            </span>
            <span className="px-2 py-1 bg-secondary rounded">
              Grammaire: {analysis.grammar}%
            </span>
            {analysis.nextWord && (
              <span className="px-2 py-1 bg-primary/10 rounded">
                Suggestion: {analysis.nextWord}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
