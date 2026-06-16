import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar with optional icons and counts. Controlled. */
export function Tabs(props: TabsProps): JSX.Element;
