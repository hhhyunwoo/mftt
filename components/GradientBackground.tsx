/**
 * GradientBackground Component
 *
 * Provides a dynamic, inspiring background that conveys growth and energy.
 */
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-cyan-100 to-amber-100" />

      {/* Animated gradient orbs for depth and movement */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-0 right-4 w-96 h-96 bg-gradient-to-br from-cyan-300/40 to-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Light overlay for softness */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/50" />
    </div>
  );
}
