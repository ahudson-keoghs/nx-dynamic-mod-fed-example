import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const Dynamicremote1 = React.lazy(() => import('dynamicremote1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dynamicremote1">Dynamicremote1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="dynamichost" />} />
        <Route path="/dynamicremote1" element={<Dynamicremote1 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
