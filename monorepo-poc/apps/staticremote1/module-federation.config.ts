import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'staticremote1',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
