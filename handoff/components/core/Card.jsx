import React from 'react';

/** Warm surface container. The workhorse layout primitive. */
export function Card({
  elevation = 'sm', padded = true, interactive = false,
  as = 'div', children, style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = { flat: 'none', xs: 'var(--shadow-xs)', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' };
  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : shadows[elevation],
        padding: padded ? 'var(--space-5)' : 0,
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
