import { useContext, useMemo, useReducer } from 'react';

import styles from './navbar.module.scss';

import {
  STATIC_LINKS,
  PUBLIC_LINKS,
  PRIVATE_LINKS,
  ADMIN_LINKS,
} from './navbar.const';
import NavbarLink from './NavbarLink';

import UserContext from '../../context/user';

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin = false }: NavbarProps) => {
  const userContext = useContext(UserContext);

  const isAuthenticated = useMemo(() => {
    return !!userContext?.userData;
  }, [userContext]);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationLinks}>
        {STATIC_LINKS.map((linkData) => (
          <NavbarLink key={linkData.to} {...linkData} />
        ))}
        {isAuthenticated
          ? PRIVATE_LINKS.map((linkData) => (
              <NavbarLink key={linkData.to} {...linkData} />
            ))
          : PUBLIC_LINKS.map((linkData) => (
              <NavbarLink key={linkData.to} {...linkData} />
            ))}
        {isAdmin
          ? ADMIN_LINKS.map((linkData) => (
              <NavbarLink key={linkData.to} {...linkData} />
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Navbar;
