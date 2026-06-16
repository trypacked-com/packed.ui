import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Resting elevation. @default "sm" */
  elevation?: 'flat' | 'xs' | 'sm' | 'md' | 'lg';
  /** Apply default inner padding. @default true */
  padded?: boolean;
  /** Lift & deepen shadow on hover. @default false */
  interactive?: boolean;
  /** Render as a different element. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** The warm surface container — the workhorse layout primitive. */
export function Card(props: CardProps): JSX.Element;
