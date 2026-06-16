import React from 'react';

/** Removable tag / chip for filters & selections. */
export function Tag({ children, onRemove = null, leadingIcon = null, style = {}, ...rest }) {
  const [hoverX, setHoverX] = React.useState(false);
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: onRemove ? '5px 6px 5px 12px' : '5px 12px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        color: 'var(--text-body)', fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', lineHeight: 1, ...style,
      }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {onRemove && (
        <button
          aria-label="Remove"
          onClick={onRemove}
          onMouseEnter={() => setHoverX(true)}
          onMouseLeave={() => setHoverX(false)}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 18, height: 18, padding: 0, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: hoverX ? 'var(--sand-200)' : 'transparent', color: 'var(--text-muted)',
            transition: 'background var(--dur-fast) var(--ease-out)',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}
