import React, { createContext, useState } from 'react';

const context: {
  activeNavLinkId?: any;
  setActiveNavLinkId?: any;
} = {
  activeNavLinkId: {},
  setActiveNavLinkId: () => {}
};

export const NavContext = createContext(context);

export const NavContextProvider = NavContext.Provider;
export const NavContextConsumer = NavContext.Consumer;

export default function NavProvider({ children }: any) {
  const [activeNavLinkId, setActiveNavLinkId] = useState('introduceContainer');
  return (
    <NavContextProvider
      value={{
        activeNavLinkId,
        setActiveNavLinkId
      }}>
      {children}
    </NavContextProvider>
  );
}
