import React from 'react';

/** On/off toggle. Controlled via `checked` + `onChange`. */
export function Switch({ checked = false, onChange = () => {}, label, disabled = false, id, style = {}, ...rest }) {
  const fieldId = id || React.useId();
  const track = { width: 44, height: 26, padding: 3 };
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
        position: 'relative', flexShrink: 0, width: track.width, height: track.height,
        borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--brand)' : 'var(--sand-300)',
        transition: 'background var(--dur-base) var(--ease-out)',
      }}>
        <span style={{
          position: 'absolute', top: track.padding, left: track.padding,
          width: track.height - track.padding * 2, height: track.height - track.padding * 2,
          borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)',
          transform: checked ? `translateX(${track.width - track.height}px)` : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-soft)',
        }} />
      </span>
      <input id={fieldId} type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked, e)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
