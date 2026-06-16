import React from 'react';

const SIZES = {
  sm: { padding: '7px 14px', fontSize: 'var(--text-sm)', gap: '6px', radius: 'var(--radius-md)', icon: 16 },
  md: { padding: '10px 18px', fontSize: 'var(--text-base)', gap: '8px', radius: 'var(--radius-md)', icon: 18 },
  lg: { padding: '14px 24px', fontSize: 'var(--text-lg)', gap: '10px', radius: 'var(--radius-lg)', icon: 20 },
};

const VARIANTS = {
  primary: {
    background: 'var(--brand)', color: 'var(--on-brand)', border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)',
    hover: { background: 'var(--brand-hover)' },
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-xs)',
    hover: { background: 'var(--sand-50)', borderColor: 'var(--border-strong)' },
  },
  ghost: {
    background: 'transparent', color: 'var(--text-brand)', border: '1px solid transparent',
    hover: { background: 'var(--brand-subtle)' },
  },
  danger: {
    background: 'var(--red-500)', color: '#fff', border: '1px solid transparent',
    hover: { background: 'var(--red-600)' },
  },
};

/**
 * Packed primary action button. Pill-friendly, warm, with a soft brand glow on the primary variant.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  pill = false,
  disabled = false,
  type = 'button',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: s.fontSize,
    lineHeight: 1, letterSpacing: '-0.01em', whiteSpace: 'nowrap',
    padding: s.padding, borderRadius: pill ? 'var(--radius-pill)' : s.radius,
    background: v.background, color: v.color, border: v.border, boxShadow: v.boxShadow || 'none',
    width: fullWidth ? '100%' : 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    transform: hover && !disabled ? 'translateY(-1px)' : 'translateY(0)',
    ...(hover && !disabled ? v.hover : null),
    ...style,
  };

  const Tag = as;
  return (
    <Tag
      type={as === 'button' ? type : undefined}
      disabled={as === 'button' ? disabled : undefined}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
