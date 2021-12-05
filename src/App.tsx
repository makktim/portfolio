import React from 'react';

import NavProvider from './context/NavContext';
import HomeInit from './HomeInit';
import Nav from './nav/Nav';

export default function App() {
  return (
    <div style={{ background: '#212121' }}>
      <NavProvider>
        <Nav />
        <HomeInit />
      </NavProvider>
    </div>
  );
}
