import React from 'react';

/** Underline tab bar. Controlled via `value` + `onChange`. */
export function Tabs({ items = [], value, onChange = () => {}, style = {} }) {
  const current = value ?? items[0]?.value;
  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1.5px solid var(--border-subtle)', fontFamily: 'var(--font-sans)', ...style }}>
      {items.map((it) => {
        const active = it.value === current;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.value)}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 14px', border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
              color: active ? 'var(--text-brand)' : 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-out)',
            }}
          >
            {it.icon}
            {it.label}
            {it.count != null && (
              <span style={{ fontSize: 'var(--text-2xs)', fontWeight: 'var(--fw-bold)', padding: '1px 7px', borderRadius: 'var(--radius-pill)', background: active ? 'var(--brand-subtle)' : 'var(--sand-100)', color: active ? 'var(--text-brand)' : 'var(--text-muted)' }}>{it.count}</span>
            )}
            <span style={{
              position: 'absolute', left: 8, right: 8, bottom: -1.5, height: 2.5, borderRadius: '2px 2px 0 0',
              background: 'var(--brand)', transform: active ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform var(--dur-base) var(--ease-out)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
