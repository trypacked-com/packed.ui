import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — drives initials and fallback colour. */
  name?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Show a brand status ring. @default false */
  ring?: boolean;
}

/** Round avatar with image or coloured initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
