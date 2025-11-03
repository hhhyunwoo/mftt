/**
 * GradientBackground Component
 *
 * Provides a soft mint/turquoise gradient background that covers the entire viewport.
 * This creates the signature keeyonghan.com style with layered gradients for depth.
 */
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient layer - mint to turquoise */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-cyan-200 to-emerald-100" />

      {/* Overlay gradient for additional depth and softness */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/30" />
    </div>
  );
}
