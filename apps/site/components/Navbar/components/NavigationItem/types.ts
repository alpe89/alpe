import { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export type NavigationItemProps = PropsWithChildren<LinkProps> & {
  href: string;
  children: string;
  mobile?: boolean;
};
