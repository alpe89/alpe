import { FC, useMemo } from 'react';
import Link from 'next/link';
import { NavigationItemProps } from './types';
import { useRouter } from 'next/router';

export const NavigationItem: FC<NavigationItemProps> = ({
  href,
  children,
  mobile = false,
  ...props
}) => {
  const router = useRouter();

  const isSelected = useMemo(
    () => href === router.asPath,
    [href, router.asPath]
  );

  const computedClasses = useMemo(() => {
    let classes = 'relative text-lg font-bold text-shadow-sm';

    if (isSelected) {
      classes +=
        ' bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600';
    } else {
      classes += mobile
        ? ' dark:text-gray-700 text-slate-100'
        : ' text-gray-700 dark:text-slate-100';
    }

    return classes;
  }, [isSelected, mobile]);

  return (
    <Link {...props} href={href}>
      <a className={computedClasses}>{children}</a>
    </Link>
  );
};

NavigationItem.displayName = 'NavigationItem';
