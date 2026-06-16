import React from 'react';

/** Checkbox with label. Controlled via `checked` + `onChange`. */
export function Checkbox({ label, checked = false, onChange = () => {}, disabled = false, id, style = {}, ...rest }) {
  const fieldId = id || React.useId();
  return (
    <label
      htmlFor={fieldId}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)',
        opacity: disabled ? 0.5 : 1, ...style,
      }}
    >
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, borderRadius: 'var(--radius-xs)',
        background: checked ? 'var(--brand)' : 'var(--surface-card)',
        border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      }}>
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        )}
      </span>
      <input id={fieldId} type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked, e)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
