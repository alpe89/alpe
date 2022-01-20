import { FC, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { NavigationProps } from './types';
import { useRouter } from 'next/router';

export const Navigation: FC<NavigationProps> = ({ mobile = false }) => {
  const classes = useMemo(
    () =>
      `relative text-lg font-bold ${
        mobile
          ? 'dark:text-gray-700 text-slate-100'
          : 'text-gray-700 dark:text-slate-100'
      }`,
    [mobile]
  );
  return (
    <>
      <Link href="/">
        <a className={classes}>About</a>
      </Link>
      <Link href="/blog">
        <a className={classes}>Blog</a>
      </Link>
      <Link href="/demos">
        <a className={classes}>Demos</a>
      </Link>
    </>
  );
};

Navigation.displayName = 'Navigation';
