import React from 'react';
import Head from 'next/head';

import { LayoutComponent } from '../components/layout/layout.component';
import { DiscoverComponent } from '../components/discover/discover.component';
import { withApollo } from '../components/with-apollo';
import { DiscoverFilterComponent } from '../components/discover/filter/discover-filter.component';

function SearchPage() {
  return (
    <>
      <Head>
        <title>Bobarr - Discover</title>
      </Head>
      <LayoutComponent>
        <DiscoverComponent />
        <DiscoverFilterComponent />
      </LayoutComponent>
    </>
  );
}

export default withApollo({ ssr: false })(SearchPage);
