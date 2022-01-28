interface IntroTestData {
  imageUrl?: string;
  password: string;
  display: number;
  title?: string;
  username: string;
}

describe('/shop', () => {
  describe('intro widget', () => {
    const testCasesData: IntroTestData[] = [
      {
        display: 1,
        username: 'admin',
        password: 'admin',
        imageUrl: '',
        title: 'You work here!',
      },
      {
        display: 0,
        username: 'regular',
        password: 'regular',
      },
      {
        display: 1,
        username: 'test1',
        password: 'test1',
        imageUrl:
          '/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534951009808-766178b47a4f%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=1024&q=100',
        title: 'Special retiree discounts every tuesday!',
      },
      {
        display: 1,
        username: 'test2',
        password: 'test2',
        imageUrl:
          '/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1461354464878-ad92f492a5a0%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=1024&q=100',
        title: 'Welcome to the produce store!',
      },
    ];

    testCasesData.forEach(
      ({ display, username, password, title, imageUrl }) => {
        const testDescription = `The intro title should be ${title} when logged in as ${username}`;
        it(testDescription, () => {
          cy.login({ username, password });

          if (!display) {
            cy.contains('GraphFarm shop');
            cy.get('[data-testid="intro').should('not.exist');
          } else {
            cy.get('[data-testid="intro"]').contains(title);
            if (imageUrl) {
              cy.get('[data-testid="intro"] img').should(
                'have.attr',
                'src',
                imageUrl
              );
            } else {
              cy.get('[data-testid="intro"] img').should(
                'have.attr',
                'src',
                '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRocket.0ccea22a.svg&w=1024&q=100'
              );
            }
          }
        });
      }
    );
  });
});
