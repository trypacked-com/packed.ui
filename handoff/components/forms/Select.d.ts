import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  helper?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Options as strings or {value,label} objects. */
  options?: SelectOption[];
}

/** Native select styled to match the Packed input. */
export function Select(props: SelectProps): JSX.Element;
