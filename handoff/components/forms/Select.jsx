import React from 'react';

/** Native select styled to match the Packed input. */
export function Select({ label, helper, options = [], size = 'md', id, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const pad = size === 'sm' ? '8px 12px' : size === 'lg' ? '14px 16px' : '11px 14px';
  const fs = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-lg)' : 'var(--text-base)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%',
            padding: pad, paddingRight: 38, fontFamily: 'inherit', fontSize: fs,
            color: 'var(--text-strong)', background: 'var(--surface-card)',
            border: `1.5px solid ${focus ? 'var(--brand)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-md)', outline: 'none', cursor: 'pointer',
            boxShadow: focus ? '0 0 0 3px var(--ring-focus)' : 'none',
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
            ...style,
          }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const labelText = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{labelText}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', display: 'flex' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </div>
      {helper && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{helper}</span>}
    </div>
  );
}
