import React from 'react';

const TONES = {
  neutral: { bg: 'var(--sand-100)', fg: 'var(--text-body)' },
  brand:   { bg: 'var(--brand-subtle)', fg: 'var(--text-brand)' },
  sky:     { bg: 'var(--sky-50)', fg: 'var(--sky-700)' },
  success: { bg: 'var(--status-ontime-bg)', fg: 'var(--status-ontime-fg)' },
  warning: { bg: 'var(--status-delay-bg)', fg: 'var(--status-delay-fg)' },
  danger:  { bg: 'var(--status-cancel-bg)', fg: 'var(--status-cancel-fg)' },
  solid:   { bg: 'var(--brand)', fg: 'var(--on-brand)' },
};

/** Compact status / category label. Optional leading dot. */
export function Badge({ tone = 'neutral', dot = false, children, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 10px', borderRadius: 'var(--radius-pill)',
        background: t.bg, color: t.fg,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-semibold)',
        lineHeight: 1.4, letterSpacing: '0.01em', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
