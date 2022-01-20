import { FC, useCallback, useState } from 'react';
import {
  DarkmodeSwitch,
  HamburgerButton,
  Logo,
  Navigation,
} from './components';

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <header className="flex justify-between text-gray-700 dark:text-slate-100 px-3 py-10 h-14 align-center">
      <Logo />
      <nav className="self-center justify-around items-center gap-24 lg:gap-36 hidden md:flex">
        <Navigation />
      </nav>
      <div className="self-center flex justify-center items-center gap-3">
        <DarkmodeSwitch />
        <HamburgerButton onClick={handleHamburgerClick} />
      </div>
      <aside
        className={`md:hidden absolute w-full z-50 top-20 bottom-0 left-0 bg-gray-800 dark:bg-white ${
          showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } transition-all duration-300`}
      >
        <nav className="self-center flex flex-col justify-start items-center gap-8 pt-3">
          <Navigation mobile />
        </nav>
      </aside>
    </header>
  );
};

Navbar.displayName = 'Navbar';
