import { FC } from 'react';
import { DarkmodeSwitch } from '@components/DarkmodeSwitch/DarkmodeSwitch';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between px-3 py-10 h-14 align-center">
        <nav className="self-center text-gray-800 dark:text-slate-100 text-5xl font-extrabold">
          Alpe.Dev
        </nav>
        <div className="self-center">
          <DarkmodeSwitch />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

Layout.displayName = 'Layout';
