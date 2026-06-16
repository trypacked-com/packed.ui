import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a removable "×" and fire this on click. */
  onRemove?: (() => void) | null;
  /** Optional leading icon node. */
  leadingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Removable chip for filters and multi-select inputs. */
export function Tag(props: TagProps): JSX.Element;
