"use client"

import type * as React from "react"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-sans"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-popover text-foreground border border-border-subtle rounded-lg shadow-lg font-sans",
          title: "text-strong font-semibold",
          description: "text-muted-text",
          actionButton:
            "bg-brand text-on-brand hover:bg-brand-hover rounded-md transition-colors",
          cancelButton:
            "bg-surface-sunken text-strong hover:bg-brand-subtle rounded-md transition-colors",
          closeButton:
            "bg-popover text-subtle border-border-subtle hover:bg-brand-subtle hover:text-strong transition-colors",
          success:
            "[&_[data-icon]]:text-status-ontime-fg [&_[data-icon]]:bg-status-ontime-bg",
          warning:
            "[&_[data-icon]]:text-status-delay-fg [&_[data-icon]]:bg-status-delay-bg",
          error:
            "[&_[data-icon]]:text-status-cancel-fg [&_[data-icon]]:bg-status-cancel-bg",
          info: "[&_[data-icon]]:text-status-info-fg [&_[data-icon]]:bg-status-info-bg",
          icon: "flex items-center justify-center rounded-md",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--text-strong)",
          "--normal-border": "var(--border-subtle)",
          "--border-radius": "var(--radius-lg)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
