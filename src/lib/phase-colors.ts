/**
 * Phase color tokens — single source of truth for case study section colors.
 * All values reference CSS custom properties defined in globals.css.
 * Import this file wherever phase colors are needed (page data, renderers, etc.)
 */
export const PHASE_COLORS = {
  discover: "var(--color-accent-cyan)",    // #00e5ff — DESCOBRIR
  define:   "var(--color-accent-yellow)",  // #ffd60a — DEFINIR
  idealize: "var(--color-accent-orange)",  // #ff9f0a — IDEALIZAR
  solution: "var(--color-accent-pink)",    // #e040fb — SOLUÇÃO
  test:     "var(--color-accent-green)",   // #30d158 — TESTAR
  results:  "var(--color-accent-red)",     // #ff6b6b — RESULTADOS
  neutral:  "var(--color-text-secondary)", // #8879a8 — PRÓXIMOS PASSOS / fallback
} as const;

export type PhaseColorKey = keyof typeof PHASE_COLORS;
