import styles from './navbar.module.scss';

import {
  STATIC_LINKS,
  PUBLIC_LINKS,
  PRIVATE_LINKS,
  ADMIN_LINKS,
} from './navbar.const';
import NavbarLink from './NavbarLink';

interface NavbarProps {
  isAdmin: boolean;
  isAuthenticated: boolean;
}

const Navbar = ({ isAdmin = false, isAuthenticated = false }: NavbarProps) => {
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
