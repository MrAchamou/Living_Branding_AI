
"use client"

import * as React from "react"
import { Brain, Activity, Zap, Table as TableIcon, BarChart, Filter, Search, Download } from "lucide-react"
import { cn } from "@/lib/utils"

// 🧠 QUANTUM TABLE INTELLIGENCE 2.0 - Système d'intelligence révolutionnaire pour les tables
class QuantumTableIntelligence {
  private static instance: QuantumTableIntelligence;
  private tableAnalyzer = new Map();
  private behaviorPatterns = new Map();
  private contextAnalyzer = new Map();
  private dataProcessor = new Map();
  public quantumSignature: string;

  constructor() {
    if (QuantumTableIntelligence.instance) {
      return QuantumTableIntelligence.instance;
    }

    this.quantumSignature = `QTB-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    this.initializeQuantumIntelligence();
    QuantumTableIntelligence.instance = this;
  }

  private initializeQuantumIntelligence(): void {
    // 🧠 Analyseur de comportement des tables
    this.tableAnalyzer.set('table_behavior', {
      interactionPatterns: { scrolling: 0, sorting: 0, filtering: 0, selection: 0 },
      columnAnalysis: { mostViewed: [], resizeFrequency: 0, hiddenColumns: [], priorities: [] },
      dataEngagement: { rowsPerPage: 10, scrollDepth: 0, timeSpentPerRow: 0, searchUsage: 0 },
      navigationStyle: { linearReading: true, jumpNavigation: false, focusedBrowsing: false }
    });

    // 🎯 Patterns comportementaux
    this.behaviorPatterns.set('user_behavior', {
      readingPattern: 'sequential', // sequential, scanning, targeted
      dataPreference: 'summary', // detailed, summary, visual
      interactionSpeed: 'moderate', // fast, moderate, deliberate
      filteringStyle: 'progressive', // progressive, comprehensive, minimal
      sortingPreference: 'logical', // alphabetical, numerical, logical, temporal
      comprehensionLevel: 'intermediate'
    });

    // 🌐 Analyseur de contexte
    this.contextAnalyzer.set('table_context', {
      dataType: 'mixed', // textual, numerical, mixed, temporal
      dataComplexity: 'moderate', // simple, moderate, complex
      tableSize: 'medium', // small, medium, large, massive
      usageScenario: 'analysis', // display, analysis, editing, reporting
      deviceOptimization: this.detectOptimalDevice(),
      contextualRelevance: 0.88
    });

    // 📊 Processeur de données
    this.dataProcessor.set('data_processing', {
      sortingAlgorithms: new Map(),
      filteringRules: new Map(),
      searchPatterns: new Map(),
      columnMetrics: new Map(),
      performanceMetrics: { renderTime: 0, searchTime: 0, sortTime: 0 }
    });
  }

  private detectOptimalDevice(): any {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const hasTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
    
    return {
      type: width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop',
      hasTouch,
      optimalColumns: width < 768 ? 2 : width < 1024 ? 4 : 6,
      recommendedDensity: width < 768 ? 'compact' : 'standard'
    };
  }

  // 📊 Analyse comportementale des tables
  analyzeTableInteraction(interaction: any): any {
    const behavior = this.tableAnalyzer.get('table_behavior');
    const patterns = this.behaviorPatterns.get('user_behavior');

    if (interaction.type === 'scroll') {
      behavior.interactionPatterns.scrolling++;
      behavior.dataEngagement.scrollDepth = Math.max(
        behavior.dataEngagement.scrollDepth, 
        interaction.depth || 0
      );
      
      if (interaction.speed > 500) {
        patterns.readingPattern = 'scanning';
      } else {
        patterns.readingPattern = 'sequential';
      }
    }

    if (interaction.type === 'sort') {
      behavior.interactionPatterns.sorting++;
      patterns.sortingPreference = interaction.sortType || 'logical';
      behavior.columnAnalysis.priorities.push({
        column: interaction.column,
        importance: interaction.frequency || 1,
        timestamp: Date.now()
      });
    }

    if (interaction.type === 'filter') {
      behavior.interactionPatterns.filtering++;
      patterns.filteringStyle = interaction.filterCount > 3 ? 'comprehensive' : 'progressive';
      
      const processor = this.dataProcessor.get('data_processing');
      const filterRules = processor.filteringRules;
      filterRules.set(interaction.column, {
        rule: interaction.rule,
        frequency: (filterRules.get(interaction.column)?.frequency || 0) + 1,
        lastUsed: Date.now()
      });
    }

    if (interaction.type === 'search') {
      behavior.dataEngagement.searchUsage++;
      patterns.readingPattern = 'targeted';
      
      const processor = this.dataProcessor.get('data_processing');
      const searchPatterns = processor.searchPatterns;
      searchPatterns.set(interaction.query, {
        frequency: (searchPatterns.get(interaction.query)?.frequency || 0) + 1,
        resultCount: interaction.resultCount || 0,
        timestamp: Date.now()
      });
    }

    if (interaction.type === 'column_resize') {
      behavior.columnAnalysis.resizeFrequency++;
      behavior.columnAnalysis.mostViewed.push(interaction.column);
    }

    // Détermination du niveau de compréhension
    const totalInteractions = Object.values(behavior.interactionPatterns).reduce((a: any, b: any) => a + b, 0);
    if (totalInteractions > 50) {
      patterns.comprehensionLevel = 'expert';
    } else if (totalInteractions > 20) {
      patterns.comprehensionLevel = 'advanced';
    }

    this.tableAnalyzer.set('table_behavior', behavior);
    this.behaviorPatterns.set('user_behavior', patterns);

    return {
      behaviorInsight: behavior,
      userProfile: patterns,
      tableOptimization: this.generateTableOptimizations(behavior, patterns)
    };
  }

  private generateTableOptimizations(behavior: any, patterns: any): any {
    const device = this.contextAnalyzer.get('table_context').deviceOptimization;
    
    return {
      columnLayout: patterns.readingPattern === 'scanning' ? 'compact' : 'spacious',
      sortingStrategy: patterns.sortingPreference,
      filteringUI: patterns.filteringStyle === 'comprehensive' ? 'advanced' : 'simple',
      paginationSize: patterns.interactionSpeed === 'fast' ? 25 : 10,
      searchPlacement: behavior.dataEngagement.searchUsage > 5 ? 'prominent' : 'standard',
      responsiveStrategy: device.type
    };
  }

  // 🎨 Génération de styles adaptatifs
  generateAdaptiveStyles(tableSize: 'small' | 'medium' | 'large'): any {
    const patterns = this.behaviorPatterns.get('user_behavior');
    const device = this.contextAnalyzer.get('table_context').deviceOptimization;
    
    return {
      '--quantum-table-density': patterns.dataPreference === 'detailed' ? 'spacious' : 'compact',
      '--quantum-table-row-height': device.type === 'mobile' ? '48px' : '40px',
      '--quantum-table-font-size': patterns.comprehensionLevel === 'expert' ? '0.875rem' : '1rem',
      '--quantum-table-border-style': patterns.readingPattern === 'scanning' ? 'solid' : 'subtle',
      '--quantum-table-hover-intensity': patterns.interactionSpeed === 'fast' ? '0.1' : '0.05'
    };
  }

  // 🚀 Optimisation autonome
  optimizeTablePerformance(metrics: any): any {
    return {
      renderingStrategy: metrics.rowCount > 1000 ? 'virtualized' : 'standard',
      sortingStrategy: metrics.dataComplexity === 'high' ? 'server_side' : 'client_side',
      filteringStrategy: metrics.columnCount > 10 ? 'indexed' : 'linear',
      searchStrategy: metrics.searchFrequency > 0.3 ? 'real_time' : 'on_demand'
    };
  }

  // 🎯 Suggestions intelligentes de colonnes
  generateColumnSuggestions(currentColumns: string[], data: any[]): any {
    const behavior = this.tableAnalyzer.get('table_behavior');
    const device = this.contextAnalyzer.get('table_context').deviceOptimization;
    
    return {
      priorityColumns: behavior.columnAnalysis.mostViewed.slice(0, device.optimalColumns),
      hiddenColumns: currentColumns.slice(device.optimalColumns),
      suggestedOrder: this.optimizeColumnOrder(behavior.columnAnalysis.priorities),
      responsiveBreakpoints: this.generateResponsiveBreakpoints(currentColumns)
    };
  }

  private optimizeColumnOrder(priorities: any[]): string[] {
    return priorities
      .sort((a, b) => b.importance - a.importance)
      .map(p => p.column)
      .slice(0, 8);
  }

  private generateResponsiveBreakpoints(columns: string[]): any {
    return {
      mobile: columns.slice(0, 2),
      tablet: columns.slice(0, 4),
      desktop: columns
    };
  }
}

// Instance globale de l'intelligence
const quantumTableIntelligence = new QuantumTableIntelligence();

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  intelligence?: "basic" | "adaptive" | "autonomous";
  dataSize?: "small" | "medium" | "large";
  autonomousFeatures?: boolean;
  showIntelligence?: boolean;
  virtualizable?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ 
    className, 
    intelligence = "autonomous",
    dataSize = "medium", 
    autonomousFeatures = true,
    showIntelligence = false,
    virtualizable = false,
    ...props 
  }, ref) => {
    const [tableMetrics, setTableMetrics] = React.useState({
      totalInteractions: 0,
      lastInteraction: Date.now(),
      scrollDepth: 0,
      activeFilters: 0
    });

    // 🧠 Gestionnaire d'interactions intelligent
    const handleTableInteraction = React.useCallback((type: string, details: any = {}) => {
      if (intelligence === "autonomous") {
        const analysis = quantumTableIntelligence.analyzeTableInteraction({
          type,
          ...details,
          timestamp: Date.now()
        });

        setTableMetrics(prev => ({
          ...prev,
          totalInteractions: prev.totalInteractions + 1,
          lastInteraction: Date.now()
        }));
      }
    }, [intelligence]);

    // 🎨 Styles adaptatifs dynamiques
    const adaptiveStyles = React.useMemo(() => {
      if (intelligence === "autonomous") {
        return quantumTableIntelligence.generateAdaptiveStyles(dataSize);
      }
      return {};
    }, [intelligence, dataSize]);

    // 📊 Gestionnaire de scroll intelligent
    const handleScroll = React.useCallback((event: React.UIEvent<HTMLTableElement>) => {
      const target = event.target as HTMLElement;
      const scrollPercentage = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
      
      handleTableInteraction('scroll', {
        depth: scrollPercentage,
        speed: Math.abs(scrollPercentage - tableMetrics.scrollDepth)
      });

      setTableMetrics(prev => ({
        ...prev,
        scrollDepth: scrollPercentage
      }));
    }, [handleTableInteraction, tableMetrics.scrollDepth]);

    return (
      <div className="relative">
        {/* 🚀 Header intelligent */}
        {showIntelligence && intelligence === "autonomous" && (
          <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-500 animate-pulse" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                IA Table 2.0
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3 text-green-400" />
                <span>Interactions: {tableMetrics.totalInteractions}</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="h-3 w-3 text-blue-400" />
                <span>Scroll: {Math.round(tableMetrics.scrollDepth)}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Filter className="h-3 w-3 text-purple-400" />
                <span>Filtres: {tableMetrics.activeFilters}</span>
              </div>
            </div>
          </div>
        )}

        {/* 🎯 Contrôles intelligents */}
        {autonomousFeatures && intelligence === "autonomous" && (
          <div className="flex items-center justify-between mb-4 p-2 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <TableIcon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Contrôles intelligents</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleTableInteraction('search', { query: 'auto' })}
                className="p-1 rounded hover:bg-muted-foreground/10 transition-colors"
                title="Recherche intelligente"
              >
                <Search className="h-3 w-3" />
              </button>
              <button 
                onClick={() => handleTableInteraction('filter', { type: 'smart' })}
                className="p-1 rounded hover:bg-muted-foreground/10 transition-colors"
                title="Filtrage intelligent"
              >
                <Filter className="h-3 w-3" />
              </button>
              <button 
                onClick={() => handleTableInteraction('export', { format: 'optimal' })}
                className="p-1 rounded hover:bg-muted-foreground/10 transition-colors"
                title="Export optimisé"
              >
                <Download className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}

        <div className={cn(
          "relative w-full overflow-auto",
          // 🎨 Container intelligent
          intelligence === "autonomous" && [
            "quantum-table-container",
            "rounded-lg border border-purple-200/30 dark:border-purple-700/30",
            "shadow-lg shadow-purple-500/5"
          ]
        )}>
          <table
            ref={ref}
            className={cn(
              "w-full caption-bottom text-sm",
              // 🎨 Classes d'intelligence
              intelligence === "autonomous" && [
                "quantum-autonomous-table",
                "table-fixed" // Pour un meilleur contrôle des colonnes
              ],
              intelligence === "adaptive" && "quantum-adaptive-table",
              className
            )}
            style={adaptiveStyles}
            onScroll={handleScroll}
            {...props}
          />

          {/* 🌟 Overlay d'intelligence */}
          {autonomousFeatures && intelligence === "autonomous" && (
            <div className="absolute top-2 right-2 pointer-events-none">
              <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
                <Zap className="h-3 w-3 text-purple-400 animate-pulse" />
                <span>Signature: {quantumTableIntelligence.quantumSignature.slice(-6)}</span>
              </div>
            </div>
          )}
        </div>

        {/* 📊 Panneau de développement */}
        {showIntelligence && intelligence === "autonomous" && process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-3 bg-black/5 dark:bg-white/5 rounded border text-xs space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium">Quantum Signature:</span>
                <div className="font-mono text-purple-600">{quantumTableIntelligence.quantumSignature}</div>
              </div>
              <div>
                <span className="font-medium">Taille des données:</span>
                <div className="capitalize">{dataSize}</div>
              </div>
              <div>
                <span className="font-medium">Interactions totales:</span>
                <div>{tableMetrics.totalInteractions}</div>
              </div>
              <div>
                <span className="font-medium">Profondeur de scroll:</span>
                <div>{Math.round(tableMetrics.scrollDepth)}%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
  }
>(({ className, intelligence = "autonomous", ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:border-b",
      // 🎨 Header intelligent
      intelligence === "autonomous" && [
        "quantum-table-header",
        "bg-gradient-to-r from-purple-50/50 to-blue-50/50",
        "dark:from-purple-900/10 dark:to-blue-900/10",
        "border-b-2 border-purple-200/50 dark:border-purple-700/50"
      ],
      intelligence === "adaptive" && "bg-muted/50",
      className
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
  }
>(({ className, intelligence = "autonomous", ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:last-child]:border-0",
      // 🎨 Body intelligent
      intelligence === "autonomous" && [
        "quantum-table-body",
        "[&_tr:hover]:bg-gradient-to-r [&_tr:hover]:from-purple-50/30 [&_tr:hover]:to-blue-50/30",
        "dark:[&_tr:hover]:from-purple-900/10 dark:[&_tr:hover]:to-blue-900/10"
      ],
      intelligence === "adaptive" && "[&_tr:hover]:bg-muted/50",
      className
    )}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
  }
>(({ className, intelligence = "autonomous", ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      // 🎨 Footer intelligent
      intelligence === "autonomous" && [
        "quantum-table-footer",
        "bg-gradient-to-r from-purple-50/30 to-blue-50/30",
        "dark:from-purple-900/10 dark:to-blue-900/10",
        "border-t-2 border-purple-200/50 dark:border-purple-700/50"
      ],
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
    isSelected?: boolean;
  }
>(({ className, intelligence = "autonomous", isSelected = false, onClick, ...props }, ref) => {
  const handleClick = React.useCallback((event: React.MouseEvent<HTMLTableRowElement>) => {
    if (intelligence === "autonomous") {
      quantumTableIntelligence.analyzeTableInteraction({
        type: 'row_select',
        selected: !isSelected,
        timestamp: Date.now()
      });
    }
    onClick?.(event);
  }, [intelligence, isSelected, onClick]);

  return (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        // 🎨 Row intelligent
        intelligence === "autonomous" && [
          "quantum-table-row",
          "transition-all duration-200 ease-out",
          isSelected && [
            "bg-gradient-to-r from-purple-100/50 to-blue-100/50",
            "dark:from-purple-900/20 dark:to-blue-900/20",
            "border-l-2 border-purple-500"
          ],
          "hover:shadow-sm hover:scale-[1.01]"
        ],
        isSelected && "data-[state=selected]:bg-muted",
        className
      )}
      onClick={handleClick}
      data-state={isSelected ? "selected" : undefined}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
    sortable?: boolean;
    sortDirection?: "asc" | "desc" | null;
  }
>(({ 
  className, 
  intelligence = "autonomous", 
  sortable = false, 
  sortDirection = null,
  onClick,
  children,
  ...props 
}, ref) => {
  const handleClick = React.useCallback((event: React.MouseEvent<HTMLTableCellElement>) => {
    if (intelligence === "autonomous" && sortable) {
      quantumTableIntelligence.analyzeTableInteraction({
        type: 'sort',
        column: children?.toString() || 'unknown',
        direction: sortDirection === 'asc' ? 'desc' : 'asc',
        timestamp: Date.now()
      });
    }
    onClick?.(event);
  }, [intelligence, sortable, sortDirection, onClick, children]);

  return (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        // 🎨 Head intelligent
        intelligence === "autonomous" && [
          "quantum-table-head",
          sortable && [
            "cursor-pointer select-none",
            "hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-blue-100/50",
            "dark:hover:from-purple-900/20 dark:hover:to-blue-900/20",
            "transition-all duration-200",
            "relative"
          ]
        ],
        sortable && "cursor-pointer hover:bg-muted/50",
        className
      )}
      onClick={sortable ? handleClick : onClick}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <div className={cn(
            "flex flex-col text-xs transition-colors",
            intelligence === "autonomous" ? "text-purple-400" : "text-muted-foreground"
          )}>
            <span className={sortDirection === 'asc' ? 'text-primary' : ''}>▲</span>
            <span className={sortDirection === 'desc' ? 'text-primary' : ''}>▼</span>
          </div>
        )}
      </div>
      
      {/* 🧠 Indicateur d'intelligence sur la colonne */}
      {intelligence === "autonomous" && sortable && (
        <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full opacity-50" />
      )}
    </th>
  );
});
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
  }
>(({ className, intelligence = "autonomous", ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0",
      // 🎨 Cell intelligent
      intelligence === "autonomous" && [
        "quantum-table-cell",
        "transition-all duration-150",
        "hover:bg-purple-50/30 dark:hover:bg-purple-900/10"
      ],
      intelligence === "adaptive" && "hover:bg-muted/30",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & {
    intelligence?: "basic" | "adaptive" | "autonomous";
  }
>(({ className, intelligence = "autonomous", ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "mt-4 text-sm text-muted-foreground",
      // 🎨 Caption intelligent
      intelligence === "autonomous" && [
        "quantum-table-caption",
        "text-center font-medium",
        "text-purple-600/80 dark:text-purple-400/80"
      ],
      className
    )}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

// 🎨 Styles CSS quantiques
if (typeof document !== 'undefined') {
  const quantumStyles = `
    .quantum-table-container {
      position: relative;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.95), 
        rgba(248, 250, 252, 0.95));
      backdrop-filter: blur(8px);
    }

    .quantum-autonomous-table {
      position: relative;
    }

    .quantum-table-row {
      position: relative;
    }

    .quantum-table-row::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0;
      background: linear-gradient(to right, 
        rgba(99, 102, 241, 0.3), 
        rgba(147, 51, 234, 0.3));
      transition: width 0.3s ease;
    }

    .quantum-table-row:hover::before {
      width: 3px;
    }

    .quantum-table-head {
      position: relative;
      background: linear-gradient(135deg, 
        rgba(248, 250, 252, 0.8), 
        rgba(241, 245, 249, 0.8));
    }

    .quantum-table-head::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(to right, 
        transparent, 
        rgba(99, 102, 241, 0.3), 
        transparent);
    }

    .quantum-table-cell {
      position: relative;
    }

    @keyframes quantum-table-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .quantum-table-row[data-state="selected"] {
      animation: quantum-table-pulse 2s infinite;
    }

    .quantum-adaptive-table {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .quantum-table-container::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    .quantum-table-container::-webkit-scrollbar-track {
      background: rgba(99, 102, 241, 0.1);
      border-radius: 4px;
    }

    .quantum-table-container::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.6), 
        rgba(147, 51, 234, 0.6));
      border-radius: 4px;
    }

    .quantum-table-container::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, 
        rgba(99, 102, 241, 0.8), 
        rgba(147, 51, 234, 0.8));
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.textContent = quantumStyles;
  if (!document.head.querySelector('style[data-quantum-table]')) {
    styleSheet.setAttribute('data-quantum-table', 'true');
    document.head.appendChild(styleSheet);
  }
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  quantumTableIntelligence
}
