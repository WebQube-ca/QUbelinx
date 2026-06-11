export const profileBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const profileColors = {
  canvas: "#07080f",
  surface: "rgba(255,255,255,0.04)",
  surfaceElevated: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHighlight: "rgba(139,92,246,0.35)",
  textPrimary: "#f8fafc",
  textSecondary: "rgba(248,250,252,0.62)",
  textMuted: "rgba(248,250,252,0.42)",
  accent: "#8b5cf6",
  accentSoft: "rgba(139,92,246,0.18)",
  cyan: "#22d3ee",
  cyanSoft: "rgba(34,211,238,0.14)",
} as const;

export const profileRadii = {
  sm: "0.875rem",
  md: "1.125rem",
  lg: "1.5rem",
  xl: "1.75rem",
  "2xl": "2rem",
  pill: "9999px",
} as const;

export const profileSpacing = {
  pageX: "1rem",
  pageXSm: "1.25rem",
  pageXLg: "2rem",
  section: "1.5rem",
  card: "1rem",
  cardLg: "1.25rem",
} as const;

export const profileShadows = {
  card: "0 4px 24px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.06)",
  cardHover: "0 12px 40px rgba(0,0,0,0.32), 0 0 0 1px rgba(139,92,246,0.2)",
  glow: "0 0 80px rgba(139,92,246,0.15)",
} as const;

export const stagger = {
  fast: 0.04,
  base: 0.06,
  slow: 0.08,
} as const;

export const easePremium = [0.22, 1, 0.36, 1] as const;
