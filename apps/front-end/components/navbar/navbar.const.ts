import styles from './NavbarLink/navbarLink.module.scss';

export interface NavbarLinkData {
  className?: string;
  to: string;
  text: string;
}

export const ADMIN_LINKS: NavbarLinkData[] = [
  {
    to: '/admin',
    text: 'admin',
  },
];

export const PRIVATE_LINKS: NavbarLinkData[] = [
  {
    to: '/shop',
    text: 'shop',
  },
  { to: '/profile', text: 'profile' },
];

export const PUBLIC_LINKS: NavbarLinkData[] = [
  {
    to: '/login',
    text: 'login',
  },
  { to: '/register', text: 'register' },
];

export const STATIC_LINKS: NavbarLinkData[] = [
  {
    className: styles.brand,
    to: '/',
    text: 'about',
  },
];
