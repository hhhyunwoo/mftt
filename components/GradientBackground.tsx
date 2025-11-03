/**
 * GradientBackground Component
 *
 * Provides a modern gradient background with soft pastel tones.
 */
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient layer - soft lavender to blush */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50" />

      {/* Overlay gradient for additional depth and softness */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/20" />
    </div>
  );
}
