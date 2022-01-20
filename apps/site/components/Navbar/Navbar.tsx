import { FC } from 'react';
import { DarkmodeSwitch, Logo } from './components';

export const Navbar: FC = () => {
  return (
    <header className="flex justify-between px-3 py-10 h-14 align-center">
      <nav className="self-center text-gray-800 dark:text-slate-100 text-5xl font-extrabold">
        <Logo />
      </nav>
      <div className="self-center">
        <DarkmodeSwitch />
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';
