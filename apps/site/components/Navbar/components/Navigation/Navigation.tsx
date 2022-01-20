import { FC, useMemo } from 'react';
import { NavigationItem } from '../NavigationItem';
import { NavigationProps } from './types';

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
      <NavigationItem href="/" mobile={mobile}>
        About
      </NavigationItem>
      <NavigationItem href="/blog" mobile={mobile}>
        Blog
      </NavigationItem>
      <NavigationItem href="/demos" mobile={mobile}>
        Demos
      </NavigationItem>
    </>
  );
};

Navigation.displayName = 'Navigation';
