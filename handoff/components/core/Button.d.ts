import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** Fully rounded pill shape. @default false */
  pill?: boolean;
  /** Render as a different element, e.g. "a". @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * The primary call-to-action button for Packed. Warm, rounded, with a soft
 * brand glow on the primary variant.
 *
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
