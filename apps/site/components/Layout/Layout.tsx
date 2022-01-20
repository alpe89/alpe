import { Navbar } from '@components/Navbar';
import { FC } from 'react';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

Layout.displayName = 'Layout';
