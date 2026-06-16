import * as React from 'react';

export interface ToastProps {
  /** @default "brand" */
  tone?: 'brand' | 'sky' | 'success' | 'warning' | 'danger';
  icon?: React.ReactNode;
  title: React.ReactNode;
  message?: React.ReactNode;
  /** Timestamp, e.g. "2m ago". */
  time?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}

/** Notification toast that mirrors the push alerts clients receive. */
export function Toast(props: ToastProps): JSX.Element;
