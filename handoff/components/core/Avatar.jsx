import React from 'react';

const SIZES = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 };
const PALETTE = ['var(--orange-400)', 'var(--sky-400)', 'var(--green-500)', 'var(--amber-500)', 'var(--orange-600)'];

function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
}

/** Round avatar with image, initials fallback, and optional status ring. */
export function Avatar({ src = '', name = '', size = 'md', ring = false, style = {}, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  const color = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: px, height: px, borderRadius: '50%', overflow: 'hidden',
        background: src ? 'var(--sand-200)' : color, color: '#fff',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)',
        fontSize: px * 0.4, lineHeight: 1, flexShrink: 0,
        boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--brand)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials(name)}
    </span>
  );
}
