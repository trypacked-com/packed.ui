import React from 'react';

const STATES = {
  ontime:    { label: 'On time',   bg: 'var(--status-ontime-bg)', fg: 'var(--status-ontime-fg)', dot: 'var(--green-500)' },
  boarding:  { label: 'Boarding',  bg: 'var(--status-info-bg)',   fg: 'var(--status-info-fg)',   dot: 'var(--sky-500)' },
  delayed:   { label: 'Delayed',   bg: 'var(--status-delay-bg)',  fg: 'var(--status-delay-fg)',  dot: 'var(--amber-500)' },
  cancelled: { label: 'Cancelled', bg: 'var(--status-cancel-bg)', fg: 'var(--status-cancel-fg)', dot: 'var(--red-500)' },
  landed:    { label: 'Landed',    bg: 'var(--sand-100)',         fg: 'var(--text-muted)',       dot: 'var(--sand-500)' },
};

/** Flight-status pill — the core vocabulary of the Packed journey feed. */
export function StatusPill({ status = 'ontime', label, pulse = false, style = {} }) {
  const s = STATES[status] || STATES.ontime;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      padding: '5px 12px 5px 10px', borderRadius: 'var(--radius-pill)',
      background: s.bg, color: s.fg,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
      lineHeight: 1, whiteSpace: 'nowrap', ...style,
    }}>
      <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
        {pulse && <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: s.dot, opacity: 0.5, animation: 'pkPulse 1.8s var(--ease-out) infinite' }} />}
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.dot }} />
      </span>
      {label || s.label}
      <style>{`@keyframes pkPulse{0%{transform:scale(1);opacity:.5}70%{transform:scale(2.4);opacity:0}100%{opacity:0}}`}</style>
    </span>
  );
}
