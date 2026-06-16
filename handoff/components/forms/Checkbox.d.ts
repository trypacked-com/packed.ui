import * as React from 'react';

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Checkbox with label. Controlled via `checked` + `onChange`. */
export function Checkbox(props: CheckboxProps): JSX.Element;
