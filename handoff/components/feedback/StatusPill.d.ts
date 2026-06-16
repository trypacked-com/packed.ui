import * as React from 'react';

export interface StatusPillProps {
  /** @default "ontime" */
  status?: 'ontime' | 'boarding' | 'delayed' | 'cancelled' | 'landed';
  /** Override the default label, e.g. "Delayed 40m". */
  label?: string;
  /** Animate the dot — use for live/active flights. @default false */
  pulse?: boolean;
  style?: React.CSSProperties;
}

/**
 * Flight-status pill — the core vocabulary of the Packed journey feed.
 *
 * @startingPoint section="Feedback" subtitle="Flight status in every state" viewport="700x140"
 */
export function StatusPill(props: StatusPillProps): JSX.Element;
