import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  helper?: string;
  /** Error message — turns the field red and replaces helper. */
  error?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
}

/** Text field with label, helper, error state and optional icon adornments. */
export function Input(props: InputProps): JSX.Element;
