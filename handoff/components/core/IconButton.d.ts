import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "ghost" */
  variant?: 'solid' | 'soft' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fully circular. @default false */
  round?: boolean;
  /** Required for accessibility. */
  'aria-label': string;
  /** The icon node (e.g. an SVG). */
  children?: React.ReactNode;
}

/** Square or round icon-only button for toolbars and inline actions. */
export function IconButton(props: IconButtonProps): JSX.Element;
