import React from 'react';

const SIZES = {
  sm: { padding: '8px 12px', fontSize: 'var(--text-sm)', height: 36 },
  md: { padding: '11px 14px', fontSize: 'var(--text-base)', height: 44 },
  lg: { padding: '14px 16px', fontSize: 'var(--text-lg)', height: 52 },
};

/** Text field with label, helper, error and optional adornments. */
export function Input({
  label, helper, error, size = 'md', iconLeft = null, iconRight = null,
  id, style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--brand)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: s.padding, background: 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus ? `0 0 0 3px var(--ring-focus)` : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        ...style,
      }}>
        {iconLeft && <span style={{ display: 'flex', color: 'var(--text-subtle)' }}>{iconLeft}</span>}
        <input
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: s.fontSize, color: 'var(--text-strong)', padding: 0,
          }}
          {...rest}
        />
        {iconRight && <span style={{ display: 'flex', color: 'var(--text-subtle)' }}>{iconRight}</span>}
      </div>
      {(helper || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--red-600)' : 'var(--text-muted)' }}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
