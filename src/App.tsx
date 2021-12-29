import React from 'react';
import WebsiteContextProvider from './context/WebsiteContext';
import HomeInit from './HomeInit';

export default function App() {
  return (
    <div style={{ background: '#212121' }}>
      <WebsiteContextProvider>
        <HomeInit />
      </WebsiteContextProvider>
    </div>
  );
}
