import React from 'react';

import { withApollo } from '../components/with-apollo';
import { LayoutComponent } from '../components/layout/layout.component';
import { SettingsComponent } from '../components/settings/settings.component';

function SettingsPage() {
  return (
    <LayoutComponent>
      <SettingsComponent />
    </LayoutComponent>
  );
}

export default withApollo({ ssr: false })(SettingsPage);
