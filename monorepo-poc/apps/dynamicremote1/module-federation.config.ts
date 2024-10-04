import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'dynamicremote1',

  library: { type: 'var', name: 'dynamicremote1' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
