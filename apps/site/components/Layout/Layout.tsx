import { Navbar } from '@components/Navbar';
import { FC } from 'react';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="px-3">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

Layout.displayName = 'Layout';
