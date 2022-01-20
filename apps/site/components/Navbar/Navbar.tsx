import Link from 'next/link';
import { FC } from 'react';
import { DarkmodeSwitch, Logo } from './components';

export const Navbar: FC = () => {
  return (
    <header className="flex justify-between text-gray-800 dark:text-slate-100 px-3 py-10 h-14 align-center">
      <Logo />
      <nav className="self-center flex-grow-2 flex justify-around items-center gap-36">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/demos">
          <a>Demos</a>
        </Link>
      </nav>
      <div className="self-center">
        <DarkmodeSwitch />
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';
