import { cn } from "@/registry/lib/utils";

type LogoProps = React.ComponentProps<"svg"> & {
  /** `auto` follows light/dark theme; `brand` and `inverse` are fixed. */
  variant?: "auto" | "brand" | "inverse";
  size?: "sm" | "default" | "lg";
};

const sizeClass = {
  sm: "size-6 min-w-6",
  default: "size-[length:var(--logo-default)] min-w-[length:var(--logo-min)]",
  lg: "size-10 min-w-10",
} as const;

const variantColors = {
  auto: {
    stroke: "var(--logo-mark-stroke)",
    body: "var(--logo-mark)",
    band: "var(--logo-mark-band)",
    bandOpacity: "var(--logo-mark-band-opacity)",
    latch: "var(--logo-mark-latch)",
  },
  brand: {
    stroke: "var(--brand)",
    body: "var(--brand)",
    band: "var(--brand-press)",
    bandOpacity: 0.32,
    latch: "var(--brand-subtle)",
  },
  inverse: {
    stroke: "var(--sand-0)",
    body: "var(--sand-0)",
    band: "var(--brand)",
    bandOpacity: 0.55,
    latch: "var(--brand)",
  },
} as const;

function Logo({
  variant = "auto",
  size = "default",
  className,
  ...props
}: LogoProps) {
  const colors = variantColors[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="none"
      role="img"
      aria-label="Packed"
      className={cn(sizeClass[size], "shrink-0", className)}
      {...props}
    >
      <path
        d="M179.688 164.062V132.812C179.688 119.344 185.038 106.428 194.561 96.9047C204.084 87.3814 217.001 82.0313 230.469 82.0313H269.531C282.999 82.0312 295.916 87.3814 305.439 96.9047C314.962 106.428 320.312 119.344 320.312 132.812V164.062"
        strokeWidth={33.6}
        strokeLinecap="round"
        fill="none"
        style={{ stroke: colors.stroke }}
      />
      <path
        d="M335.938 164.062H164.062C125.23 164.062 93.75 195.542 93.75 234.375V351.562C93.75 390.395 125.23 421.875 164.062 421.875H335.938C374.77 421.875 406.25 390.395 406.25 351.562V234.375C406.25 195.542 374.77 164.062 335.938 164.062Z"
        style={{ fill: colors.body }}
      />
      <path
        d="M406.25 248.438H93.75V279.688H406.25V248.438Z"
        opacity={0.85}
        style={{ fill: colors.band, fillOpacity: colors.bandOpacity }}
      />
      <path
        d="M285.938 239.062H214.063C202.844 239.062 193.75 248.157 193.75 259.375V268.75C193.75 279.968 202.844 289.062 214.063 289.062H285.938C297.156 289.062 306.25 279.968 306.25 268.75V259.375C306.25 248.157 297.156 239.062 285.938 239.062Z"
        style={{ fill: colors.latch }}
      />
    </svg>
  );
}

export { Logo };
