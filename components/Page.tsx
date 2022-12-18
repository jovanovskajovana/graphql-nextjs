import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../constants/theme';

import GlobalStyles from '../styles/GlobalStyles';
import { PageLayout } from '../styles/Layout';

import SEO from './SEO';

/**
 * The page layout including all global styles and theme provider,
 * used as a wrapper in the _app.
 */
const Page: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SEO />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <PageLayout>{children}</PageLayout>
    </ThemeProvider>
  </>
);

export default Page;
