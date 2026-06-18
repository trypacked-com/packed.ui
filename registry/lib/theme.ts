/**
 * React Native theme mirror — flat values only.
 * Gradients are web-only (`registry/styles/packed-theme-effects.css`); use
 * LinearGradient with scale stop colours when needed on native.
 */
export const theme = {
  light: {
    onGrad: "#ffffff",
    onGradMuted: "rgba(255, 255, 255, 0.82)",
    onGradShadow: "0 1px 10px rgba(56, 50, 43, 0.42)",
    glassBarBlur: 10,
    glassTileBlur: 12,
    glassBarBg: "rgba(255, 255, 255, 0.82)",
    glassOnPhoto: "rgba(34, 31, 26, 0.28)",
    glassTile: "rgba(255, 255, 255, 0.72)",
    photoFallbackStops: ["#eae0d4", "#ffe2d1", "#d2eafa"] as const,
    scrimBottomStops: [
      "rgba(34, 31, 26, 0.78)",
      "rgba(34, 31, 26, 0.38)",
      "transparent",
    ] as const,
  },
  dark: {
    onGrad: "#ffffff",
    onGradMuted: "rgba(255, 255, 255, 0.82)",
    onGradShadow: "0 1px 10px rgba(56, 50, 43, 0.42)",
    glassBarBlur: 10,
    glassTileBlur: 12,
    glassBarBg: "rgba(34, 31, 26, 0.78)",
    glassOnPhoto: "rgba(34, 31, 26, 0.28)",
    glassTile: "rgba(34, 31, 26, 0.68)",
    photoFallbackStops: ["#322c25", "#2a1b12", "#122636"] as const,
    scrimBottomStops: [
      "rgba(34, 31, 26, 0.78)",
      "rgba(34, 31, 26, 0.38)",
      "transparent",
    ] as const,
  },
} as const;

export type PackedTheme = typeof theme;
