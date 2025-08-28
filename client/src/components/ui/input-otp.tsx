
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot, Minus, Zap, Shield, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & {
    intelligence?: "basic" | "adaptive" | "revolutionary" | "autonomous";
    securityLevel?: "standard" | "enhanced" | "quantum";
    quantumAnalytics?: boolean;
    containerClassName?: string;
  }
>(({ className, containerClassName, intelligence = "basic", securityLevel = "standard", quantumAnalytics = true, ...props }, ref) => (
  <div className={cn("relative", containerClassName)}>
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        intelligence === "autonomous" && "quantum-enhanced-container"
      )}
      className={cn(
        "disabled:cursor-not-allowed",
        intelligence === "autonomous" && "quantum-enhanced-input",
        className
      )}
      {...props}
    />
    {securityLevel === "quantum" && (
      <div className="flex items-center gap-1 mt-2 text-xs">
        <Shield className="h-3 w-3 text-green-400" />
        <span className="text-muted-foreground">Quantum Security</span>
      </div>
    )}
  </div>
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    variant?: "dot" | "dash" | "quantum";
  }
>(({ variant = "quantum", ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    {variant === "quantum" ? (
      <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
    ) : (
      <Dot />
    )}
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
