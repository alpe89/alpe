import { ColorMode } from '@hooks/Darkmode/types';
import { useDarkmode } from '@hooks/Darkmode';
import { FC, useMemo, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const DarkmodeSwitch: FC = () => {
  const { currentMode, toggleDarkmode } = useDarkmode();

  const isChecked = useMemo(
    () => (currentMode === ColorMode.DARK ? true : false),
    [currentMode]
  );

  return (
    <button
      className="rounded-xl bg-slate-300 dark:bg-gray-700 transition-colors p-0 w-14 h-6 relative"
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-label="Dark mode Switch"
      onClick={toggleDarkmode}
    >
      <div
        className={`rounded-full bg-gray-700 dark:bg-slate-100 w-8 h-8 flex justify-center items-center transition-all ease-in-out duration-500 absolute -top-1 ${
          isChecked ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isChecked ? (
          <FaMoon className="fill-yellow-500" />
        ) : (
          <FaSun className="fill-yellow-500" />
        )}
      </div>
    </button>
  );
};
