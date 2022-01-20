import { ButtonHTMLAttributes, FC } from 'react';
import { FaBars } from 'react-icons/fa';

export const HamburgerButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <button
      role="button"
      className="rounded-full ring-1 hover:ring-orange-600 focus:ring-orange-600 bg-gray-800 dark:bg-slate-100 w-8 h-8 flex justify-center items-center transition-all ease-in-out duration-500 md:hidden"
      {...props}
    >
      <FaBars className="dark:fill-gray-700 fill-slate-100 hover:fill-orange-600 transition-colors ease-in-out duration-500" />
    </button>
  );
};
