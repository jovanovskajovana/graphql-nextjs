import React, { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

/**
 * A SEO handler that gets data from each page
 * and assigns it to the Head.
 */
const SEO: FC<SEOProps> = ({ title, description }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content={description || 'Test app build with Next.js'}
    />
    <link rel="icon" href="/favicon.ico" />
    <title>{title || 'Next.js plus GraphQL'}</title>
  </Head>
);

export default SEO;
