import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: 'neutral' | 'brand' | 'sky' | 'success' | 'warning' | 'danger' | 'solid';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Compact label for statuses, counts and categories. */
export function Badge(props: BadgeProps): JSX.Element;
