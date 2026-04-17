import { cn } from "@/lib/cn";

/**
 * Silhueta elegante em verde/dourado como placeholder da foto do advogado.
 * Substituir por <Image> quando a foto real estiver disponível.
 */
export function PhotoPlaceholder({
  className,
  label = "Foto a incluir",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-br from-green-800 to-green-950 aspect-[4/5]",
        className,
      )}
      aria-label={label}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="portraitGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.15)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0)" />
          </radialGradient>
          <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f2419" />
            <stop offset="100%" stopColor="#1e3a2e" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#portraitGlow)" />
        <ellipse cx="200" cy="170" rx="58" ry="68" fill="url(#silhouette)" opacity="0.9" />
        <path
          d="M90 500 C 90 400 130 320 200 315 C 270 320 310 400 310 500 Z"
          fill="url(#silhouette)"
          opacity="0.9"
        />
        <path
          d="M200 312 L 200 370"
          stroke="#D4AF37"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
      <div className="absolute bottom-3 right-3 text-[0.65rem] uppercase tracking-[0.2em] text-cream-400">
        {label}
      </div>
    </div>
  );
}
