
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft, Brain, Activity, Zap, Settings, Eye, BarChart, Target } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// 🧠 QUANTUM SIDEBAR INTELLIGENCE 2.0 - Système d'intelligence révolutionnaire pour les sidebars
class QuantumSidebarIntelligence {
  private static instance: QuantumSidebarIntelligence;
  private sidebarAnalyzer = new Map();
  private behaviorPatterns = new Map();
  private contextAnalyzer = new Map();
  private adaptiveController = new Map();
  public quantumSignature: string;

  constructor() {
    if (QuantumSidebarIntelligence.instance) {
      return QuantumSidebarIntelligence.instance;
    }

    this.quantumSignature = `QSB-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    this.initializeQuantumIntelligence();
    QuantumSidebarIntelligence.instance = this;
  }

  private initializeQuantumIntelligence(): void {
    // 🧠 Analyseur de comportement de la sidebar
    this.sidebarAnalyzer.set('sidebar_behavior', {
      usagePatterns: { openFrequency: 0, averageOpenTime: 0, collapseFrequency: 0 },
      navigationPatterns: { mostUsedItems: [], navigationFlow: [], searchUsage: 0 },
      interactionDepth: { clickDepth: 0, scrollBehavior: 'minimal', hoverTime: 0 },
      preferenceAnalysis: { preferredWidth: 280, autoCollapse: false, stickyItems: [] }
    });

    // 🎯 Patterns comportementaux
    this.behaviorPatterns.set('user_behavior', {
      sidebarPreference: 'expanded', // expanded, collapsed, auto
      navigationStyle: 'hierarchical', // flat, hierarchical, search-based
      interactionSpeed: 'moderate', // fast, moderate, deliberate
      informationDensity: 'standard', // minimal, standard, detailed
      multitaskingLevel: 'moderate',
      expertiseLevel: 'intermediate'
    });

    // 🌐 Analyseur de contexte
    this.contextAnalyzer.set('sidebar_context', {
      applicationContext: 'productivity',
      screenSize: this.detectScreenSize(),
      deviceCapabilities: this.analyzeDeviceCapabilities(),
      workflowType: 'creative',
      sessionDuration: 'medium',
      contextualRelevance: 0.85
    });

    // 🤖 Contrôleur adaptatif
    this.adaptiveController.set('adaptive_features', {
      intelligentCollapsing: true,
      contextualMenus: true,
      predictiveSearch: true,
      adaptiveWidth: true,
      smartGrouping: true,
      autonomousOptimization: true
    });
  }

  private detectScreenSize(): string {
    if (typeof window === 'undefined') return 'desktop';
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private analyzeDeviceCapabilities(): any {
    const connection = (navigator as any).connection;
    const memory = (navigator as any).deviceMemory || 4;
    
    return {
      memory: memory > 8 ? 'high' : memory > 4 ? 'medium' : 'low',
      connection: connection?.effectiveType || '4g',
      cores: navigator.hardwareConcurrency || 4,
      performance: memory > 8 && navigator.hardwareConcurrency > 4 ? 'high' : 'standard'
    };
  }

  // 📊 Analyse comportementale de la sidebar
  analyzeSidebarInteraction(interaction: any): any {
    const behavior = this.sidebarAnalyzer.get('sidebar_behavior');
    const patterns = this.behaviorPatterns.get('user_behavior');

    if (interaction.type === 'open') {
      behavior.usagePatterns.openFrequency++;
      patterns.sidebarPreference = 'expanded';
    }

    if (interaction.type === 'collapse') {
      behavior.usagePatterns.collapseFrequency++;
      if (behavior.usagePatterns.collapseFrequency > behavior.usagePatterns.openFrequency) {
        patterns.sidebarPreference = 'collapsed';
      }
    }

    if (interaction.type === 'navigation') {
      behavior.navigationPatterns.mostUsedItems.push(interaction.item);
      behavior.navigationPatterns.navigationFlow.push({
        item: interaction.item,
        timestamp: Date.now(),
        context: interaction.context
      });
      
      // Déterminer le style de navigation
      const recentFlow = behavior.navigationPatterns.navigationFlow.slice(-5);
      const isHierarchical = recentFlow.some(nav => nav.item.includes('submenu'));
      patterns.navigationStyle = isHierarchical ? 'hierarchical' : 'flat';
    }

    if (interaction.type === 'search') {
      behavior.navigationPatterns.searchUsage++;
      if (behavior.navigationPatterns.searchUsage > 5) {
        patterns.navigationStyle = 'search-based';
      }
    }

    this.sidebarAnalyzer.set('sidebar_behavior', behavior);
    this.behaviorPatterns.set('user_behavior', patterns);

    return {
      behaviorInsight: behavior,
      userProfile: patterns,
      adaptationRecommendation: this.generateSidebarOptimizations(behavior, patterns)
    };
  }

  private generateSidebarOptimizations(behavior: any, patterns: any): any {
    return {
      widthOptimization: patterns.informationDensity === 'detailed' ? 'expand' : 'standard',
      collapseStrategy: behavior.usagePatterns.collapseFrequency > 10 ? 'auto' : 'manual',
      searchPriority: patterns.navigationStyle === 'search-based' ? 'prominent' : 'standard',
      groupingStrategy: behavior.navigationPatterns.mostUsedItems.length > 10 ? 'intelligent' : 'standard'
    };
  }

  // 🎨 Génération de styles adaptatifs
  generateAdaptiveStyles(context: string): any {
    const deviceCaps = this.contextAnalyzer.get('sidebar_context').deviceCapabilities;
    const patterns = this.behaviorPatterns.get('user_behavior');
    
    return {
      '--quantum-sidebar-width': patterns.informationDensity === 'detailed' ? '320px' : '280px',
      '--quantum-sidebar-animation-speed': deviceCaps.performance === 'high' ? '0.2s' : '0.3s',
      '--quantum-sidebar-backdrop': context === 'focus' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)',
      '--quantum-sidebar-glow': patterns.expertiseLevel === 'expert' ? 
        '0 0 15px rgba(99, 102, 241, 0.2)' : 'none',
      '--quantum-sidebar-density': patterns.informationDensity === 'minimal' ? 'compact' : 'standard'
    };
  }

  // 🚀 Optimisation autonome
  optimizeSidebarPerformance(metrics: any): any {
    return {
      renderingStrategy: metrics.itemCount > 50 ? 'virtualized' : 'standard',
      loadingStrategy: 'progressive_enhancement',
      searchStrategy: metrics.searchUsage > 0.3 ? 'instant' : 'on_demand',
      cacheStrategy: 'intelligent_caching'
    };
  }

  // 🎯 Suggestions intelligentes
  generateNavigationSuggestions(currentPath: string): any {
    const behavior = this.sidebarAnalyzer.get('sidebar_behavior');
    const mostUsed = behavior.navigationPatterns.mostUsedItems.slice(-10);
    
    return {
      suggestedItems: mostUsed.filter(item => item !== currentPath).slice(0, 3),
      contextualItems: this.getContextualSuggestions(currentPath),
      quickActions: ['search', 'collapse', 'expand']
    };
  }

  private getContextualSuggestions(currentPath: string): string[] {
    // Logique simple de suggestions contextuelles
    const suggestions = {
      'dashboard': ['analytics', 'reports'],
      'projects': ['create-project', 'templates'],
      'settings': ['profile', 'preferences']
    };
    
    return suggestions[currentPath] || [];
  }
}

// Instance globale de l'intelligence
const quantumSidebarIntelligence = new QuantumSidebarIntelligence();

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "open" | "closed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
  intelligence?: "basic" | "adaptive" | "autonomous"
  autonomousFeatures?: boolean
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
    intelligence?: "basic" | "adaptive" | "autonomous"
    autonomousFeatures?: boolean
  }
>(({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  intelligence = "autonomous",
  autonomousFeatures = true,
  className,
  style,
  children,
  ...props
}, ref) => {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // État interne géré par l'IA
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // 🧠 Analyse des interactions avec l'IA
      if (intelligence === "autonomous") {
        quantumSidebarIntelligence.analyzeSidebarInteraction({
          type: openState ? 'open' : 'collapse',
          timestamp: Date.now(),
          context: isMobile ? 'mobile' : 'desktop'
        });
      }

      // Cookies pour la persistance
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [openProp, setOpenProp, open, intelligence, isMobile]
  )

  // Raccourci clavier intelligent
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        setOpen((open) => !open)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [setOpen])

  // Auto-collapse intelligent basé sur l'IA
  React.useEffect(() => {
    if (intelligence === "autonomous" && autonomousFeatures) {
      const handleResize = () => {
        if (window.innerWidth < 768 && open) {
          setOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [intelligence, autonomousFeatures, open, setOpen]);

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Styles adaptatifs
  const adaptiveStyles = React.useMemo(() => {
    if (intelligence === "autonomous") {
      return quantumSidebarIntelligence.generateAdaptiveStyles('standard');
    }
    return {};
  }, [intelligence]);

  const state = open ? "open" : "closed"

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
      intelligence,
      autonomousFeatures
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar, intelligence, autonomousFeatures]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
            ...adaptiveStyles,
          } as React.CSSProperties}
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            // 🎨 Classes d'intelligence
            intelligence === "autonomous" && "quantum-autonomous-sidebar-wrapper",
            intelligence === "adaptive" && "quantum-adaptive-sidebar-wrapper",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
})
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}, ref) => {
  const { isMobile, state, openMobile, setOpenMobile, intelligence, autonomousFeatures } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          // 🎨 Styles quantiques pour mode non-collapsible
          intelligence === "autonomous" && [
            "quantum-sidebar-fixed",
            "border-r border-purple-200/30 dark:border-purple-700/30"
          ],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className={cn(
            "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
            // 🎨 Styles mobiles quantiques
            intelligence === "autonomous" && [
              "quantum-sidebar-mobile",
              "bg-gradient-to-b from-background to-background/95"
            ],
            side === "left" && "border-r",
            side === "right" && "border-l",
            className
          )}
          side={side}
          style={{
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
          } as React.CSSProperties}
        >
          {children}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      ref={ref}
      className="group peer hidden md:block text-sidebar-foreground"
      data-state={state}
      data-collapsible={state === "closed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* Overlay intelligent pour les interactions */}
      {autonomousFeatures && intelligence === "autonomous" && state === "closed" && (
        <div className="absolute inset-y-0 left-0 z-20 w-4 opacity-0 transition-opacity hover:opacity-100" />
      )}

      <div
        className={cn(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" && "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]",
          variant === "inset" && "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]",
          // 🎨 Styles quantiques pour desktop
          intelligence === "autonomous" && [
            "quantum-sidebar-desktop",
            "transition-all duration-300 ease-out"
          ],
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className={cn(
            "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
            // 🎨 Styles quantiques pour le contenu
            intelligence === "autonomous" && [
              "quantum-sidebar-content",
              "bg-gradient-to-b from-background to-background/98",
              "border-r border-purple-200/20 dark:border-purple-700/20",
              "shadow-lg shadow-purple-500/5"
            ]
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar, intelligence } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn(
        "h-7 w-7",
        // 🎨 Trigger quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-trigger",
          "bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100",
          "dark:from-purple-900/20 dark:to-blue-900/20 dark:hover:from-purple-800/30 dark:hover:to-blue-800/30",
          "border border-purple-200/50 hover:border-purple-300/70",
          "shadow-sm hover:shadow-md transition-all duration-200"
        ],
        className
      )}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar, intelligence } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=closed]_&]:cursor-e-resize [[data-side=right][data-state=closed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        // 🎨 Rail quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-rail",
          "hover:after:bg-gradient-to-b hover:after:from-purple-400 hover:after:to-blue-400"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=closed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        // 🎨 Inset quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-inset",
          "transition-all duration-300 ease-out"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        // 🎨 Input quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-input",
          "bg-gradient-to-r from-purple-50/50 to-blue-50/50",
          "dark:from-purple-900/10 dark:to-blue-900/10",
          "border-purple-200/50 focus-visible:border-purple-400/70",
          "placeholder:text-purple-400/70"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { intelligence, autonomousFeatures } = useSidebar()

  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn(
        "flex flex-col gap-2 p-2",
        // 🎨 Header quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-header",
          "bg-gradient-to-r from-purple-50/30 to-blue-50/30",
          "dark:from-purple-900/10 dark:to-blue-900/10",
          "border-b border-purple-200/30 dark:border-purple-700/30"
        ],
        className
      )}
      {...props}
    >
      {/* 🧠 Indicateur d'intelligence */}
      {autonomousFeatures && intelligence === "autonomous" && (
        <div className="flex items-center justify-between px-2 py-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Brain className="h-3 w-3 text-purple-500 animate-pulse" />
            <span className="font-medium text-purple-600 dark:text-purple-400">
              IA Sidebar 2.0
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Activity className="h-2 w-2 text-green-400" />
            <span>Active</span>
          </div>
        </div>
      )}
      {props.children}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn(
        "flex flex-col gap-2 p-2",
        // 🎨 Footer quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-footer",
          "bg-gradient-to-r from-purple-50/20 to-blue-50/20",
          "dark:from-purple-900/10 dark:to-blue-900/10",
          "border-t border-purple-200/30 dark:border-purple-700/30"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn(
        "mx-2 w-auto bg-sidebar-border",
        // 🎨 Separator quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-separator",
          "bg-gradient-to-r from-transparent via-purple-300/50 to-transparent",
          "dark:via-purple-600/50"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        // 🎨 Content quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-content-area",
          "scroll-smooth"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn(
        "relative flex w-full min-w-0 flex-col p-2",
        // 🎨 Group quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-group",
          "hover:bg-purple-50/30 dark:hover:bg-purple-900/10",
          "transition-colors duration-200"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  const { intelligence } = useSidebar()

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        // 🎨 Group label quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-group-label",
          "text-purple-600/80 dark:text-purple-400/80",
          "hover:text-purple-700 dark:hover:text-purple-300"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  const { intelligence } = useSidebar()

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // After
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        // 🎨 Group action quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-group-action",
          "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100",
          "dark:hover:from-purple-900/30 dark:hover:to-blue-900/30",
          "hover:scale-110 transition-all duration-200"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        quantum: "quantum-sidebar-menu-button bg-gradient-to-r from-purple-50/50 to-blue-50/50 hover:from-purple-100 hover:to-blue-100 dark:from-purple-900/10 dark:to-blue-900/10 dark:hover:from-purple-800/20 dark:hover:to-blue-800/20",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state, intelligence } = useSidebar()

  // Intelligence autonome pour la variante
  const intelligentVariant = React.useMemo(() => {
    if (intelligence === "autonomous" && isActive) {
      return "quantum";
    }
    return variant;
  }, [intelligence, isActive, variant]);

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-active={isActive}
      className={cn(
        sidebarMenuButtonVariants({ variant: intelligentVariant, size }),
        // 🎨 Styles quantiques supplémentaires
        intelligence === "autonomous" && [
          "quantum-sidebar-menu-item",
          "transition-all duration-200 ease-out",
          isActive && [
            "shadow-md shadow-purple-500/20",
            "border-l-2 border-purple-500"
          ]
        ],
        className
      )}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "closed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  const { intelligence } = useSidebar()

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increase hit area
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        // 🎨 Menu action quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-menu-action",
          "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100",
          "dark:hover:from-purple-900/30 dark:hover:to-blue-900/30",
          "hover:scale-110 transition-all duration-200"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { intelligence } = useSidebar()

  return (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:h-4 peer-data-[size=sm]/menu-button:min-w-4 peer-data-[size=sm]/menu-button:text-xs",
        "peer-data-[size=default]/menu-button:h-5 peer-data-[size=default]/menu-button:min-w-5 peer-data-[size=default]/menu-button:text-xs",
        "peer-data-[size=lg]/menu-button:h-6 peer-data-[size=lg]/menu-button:min-w-6 peer-data-[size=lg]/menu-button:text-sm",
        "group-data-[collapsible=icon]:hidden",
        // 🎨 Badge quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-menu-badge",
          "bg-gradient-to-r from-purple-500 to-blue-500 text-white",
          "animate-pulse"
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  const { intelligence } = useSidebar()

  // Générer une largeur aléatoire entre 50% et 90%
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn(
        "rounded-md h-8 flex gap-2 px-2 items-center",
        // 🎨 Skeleton quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-skeleton",
          "animate-pulse bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100",
          "dark:from-purple-900/20 dark:via-blue-900/20 dark:to-purple-900/20"
        ],
        intelligence !== "autonomous" && "animate-pulse bg-sidebar-accent",
        className
      )}
      {...props}
    >
      {showIcon && (
        <div
          className={cn(
            "size-4 rounded-sm",
            intelligence === "autonomous" ? 
              "bg-purple-200 dark:bg-purple-700" : 
              "bg-sidebar-primary"
          )}
        />
      )}
      <div
        className={cn(
          "h-4 rounded-sm flex-1",
          intelligence === "autonomous" ? 
            "bg-purple-200 dark:bg-purple-700" : 
            "bg-sidebar-primary"
        )}
        style={{ width }}
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
  const { intelligence } = useSidebar()

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-foreground/50",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        // 🎨 Sub button quantique
        intelligence === "autonomous" && [
          "quantum-sidebar-sub-button",
          "transition-all duration-200",
          isActive && [
            "bg-gradient-to-r from-purple-50 to-blue-50",
            "dark:from-purple-900/20 dark:to-blue-900/20",
            "border-l-2 border-purple-400"
          ]
        ],
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

// 🎨 Styles CSS quantiques
if (typeof document !== 'undefined') {
  const quantumStyles = `
    .quantum-autonomous-sidebar-wrapper {
      --quantum-sidebar-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .quantum-sidebar-desktop {
      box-shadow: inset -1px 0 0 rgba(99, 102, 241, 0.1);
    }

    .quantum-sidebar-content {
      backdrop-filter: blur(8px);
      border-image: linear-gradient(to bottom, 
        rgba(99, 102, 241, 0.1), 
        rgba(147, 51, 234, 0.05), 
        rgba(99, 102, 241, 0.1)) 1;
    }

    .quantum-sidebar-trigger:hover {
      transform: scale(1.05);
    }

    .quantum-sidebar-menu-button {
      position: relative;
      overflow: hidden;
    }

    .quantum-sidebar-menu-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(99, 102, 241, 0.1),
        transparent
      );
      transition: left 0.3s ease;
    }

    .quantum-sidebar-menu-button:hover::before {
      left: 100%;
    }

    .quantum-sidebar-skeleton {
      background-size: 200% 100%;
      animation: quantum-skeleton-shimmer 2s infinite;
    }

    @keyframes quantum-skeleton-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .quantum-sidebar-rail:hover {
      background: linear-gradient(to bottom, 
        rgba(99, 102, 241, 0.1), 
        rgba(147, 51, 234, 0.1));
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.textContent = quantumStyles;
  if (!document.head.querySelector('style[data-quantum-sidebar]')) {
    styleSheet.setAttribute('data-quantum-sidebar', 'true');
    document.head.appendChild(styleSheet);
  }
}

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
  quantumSidebarIntelligence
}
