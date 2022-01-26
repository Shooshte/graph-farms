import React from 'react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import Navbar from '../components/navbar/index';

import {
  ADMIN_LINKS,
  PUBLIC_LINKS,
  PRIVATE_LINKS,
  STATIC_LINKS,
} from '../components/navbar/navbar.const';
import { createMockRouter } from './utils/mockRouter';

describe('Navbar', () => {
  it('Should render only the public and static links when user is not authenticated and not an admin', () => {
    const { getByText, queryByText } = render(
      <RouterContext.Provider value={createMockRouter({ query: { id: '22' } })}>
        <Navbar isAuthenticated={false} isAdmin={false} />
      </RouterContext.Provider>
    );

    ADMIN_LINKS.forEach((linkData) => {
      expect(queryByText(linkData.text)).toBeFalsy();
    });

    PRIVATE_LINKS.forEach((linkData) => {
      expect(queryByText(linkData.text)).toBeFalsy();
    });

    PUBLIC_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });

    STATIC_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });
  });

  it('Should render the static and private links when user is authenticated and not an admin', () => {
    const { getByText, queryByText } = render(
      <RouterContext.Provider value={createMockRouter({ query: { id: '22' } })}>
        <Navbar isAuthenticated={true} isAdmin={false} />
      </RouterContext.Provider>
    );

    ADMIN_LINKS.forEach((linkData) => {
      expect(queryByText(linkData.text)).toBeFalsy();
    });

    PRIVATE_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });

    PUBLIC_LINKS.forEach((linkData) => {
      expect(queryByText(linkData.text)).toBeFalsy();
    });

    STATIC_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });
  });

  it('Should render the static, private and admin links when user is authenticated and an admin', () => {
    const { getByText, queryByText } = render(
      <RouterContext.Provider value={createMockRouter({ query: { id: '22' } })}>
        <Navbar isAuthenticated={true} isAdmin={true} />
      </RouterContext.Provider>
    );

    ADMIN_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });

    PRIVATE_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });

    PUBLIC_LINKS.forEach((linkData) => {
      expect(queryByText(linkData.text)).toBeFalsy();
    });

    STATIC_LINKS.forEach((linkData) => {
      const anchor = getByText(linkData.text);
      expect(anchor.getAttribute('href')).toEqual(linkData.to);
    });
  });
});
