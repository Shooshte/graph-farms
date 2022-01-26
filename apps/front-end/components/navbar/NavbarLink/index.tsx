import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './navbarLink.module.scss';

import { NavbarLinkData } from '../navbar.const';

const NavbarLink = ({ className, to, text }: NavbarLinkData) => {
  const router = useRouter();

  const renderClassName = useMemo(() => {
    const currentPath = router.pathname;
    const isActive = currentPath === to;
    return `${className ? className : ''} ${
      isActive ? styles.activeNavbarLink : styles.navbarLink
    }`;
  }, [className, router, to]);

  return (
    <li className={renderClassName}>
      <Link href={to} passHref={true}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarLink;
