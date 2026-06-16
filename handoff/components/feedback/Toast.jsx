import React from 'react';

const TONES = {
  brand:   { accent: 'var(--brand)',     iconBg: 'var(--brand-subtle)',         iconFg: 'var(--text-brand)' },
  sky:     { accent: 'var(--sky-500)',   iconBg: 'var(--sky-50)',               iconFg: 'var(--sky-700)' },
  success: { accent: 'var(--green-500)', iconBg: 'var(--status-ontime-bg)',     iconFg: 'var(--status-ontime-fg)' },
  warning: { accent: 'var(--amber-500)', iconBg: 'var(--status-delay-bg)',      iconFg: 'var(--status-delay-fg)' },
  danger:  { accent: 'var(--red-500)',   iconBg: 'var(--status-cancel-bg)',     iconFg: 'var(--status-cancel-fg)' },
};

/** Notification toast — mirrors the push alerts clients receive. */
export function Toast({ tone = 'brand', icon = null, title, message, time, onClose, style = {} }) {
  const t = TONES[tone] || TONES.brand;
  return (
    <div role="status" style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      width: 360, maxWidth: '100%', padding: '14px 14px 14px 16px',
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)', borderLeft: `3px solid ${t.accent}`,
      fontFamily: 'var(--font-sans)', ...style,
    }}>
      {icon && (
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, flexShrink: 0, borderRadius: 'var(--radius-md)', background: t.iconBg, color: t.iconFg }}>{icon}</span>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)' }}>{title}</span>
          {time && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', whiteSpace: 'nowrap' }}>{time}</span>}
        </div>
        {message && <p style={{ margin: '2px 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.45 }}>{message}</p>}
      </div>
      {onClose && (
        <button aria-label="Dismiss" onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-subtle)', padding: 2, display: 'flex' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}
