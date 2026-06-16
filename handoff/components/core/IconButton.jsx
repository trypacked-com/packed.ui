import React from 'react';

const SIZES = {
  sm: { box: 32, icon: 16, radius: 'var(--radius-sm)' },
  md: { box: 40, icon: 20, radius: 'var(--radius-md)' },
  lg: { box: 48, icon: 22, radius: 'var(--radius-md)' },
};

const VARIANTS = {
  solid:   { background: 'var(--brand)', color: 'var(--on-brand)', border: '1px solid transparent', hover: { background: 'var(--brand-hover)' } },
  soft:    { background: 'var(--brand-subtle)', color: 'var(--text-brand)', border: '1px solid transparent', hover: { background: 'var(--brand-subtle-2)' } },
  outline: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-default)', hover: { background: 'var(--sand-50)', borderColor: 'var(--border-strong)' } },
  ghost:   { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent', hover: { background: 'var(--sand-100)', color: 'var(--text-strong)' } },
};

/** Square icon-only button. Use for toolbar & inline actions. */
export function IconButton({
  variant = 'ghost', size = 'md', round = false, disabled = false,
  'aria-label': ariaLabel, children, style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: s.box, height: s.box, padding: 0,
        borderRadius: round ? 'var(--radius-pill)' : s.radius,
        background: v.background, color: v.color, border: v.border,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
        ...(hover && !disabled ? v.hover : null), ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
