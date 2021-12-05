import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '../context/NavContext';

export const useNav = (navLinkId: any) => {
  const ref = useRef(null);

  const { setActiveNavLinkId } = useContext(NavContext);

  /*   const isOnScreen = useOnScreen(ref); */

  useEffect(() => {
    setActiveNavLinkId(navLinkId);
    /*     if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    } */
  }, [setActiveNavLinkId, navLinkId]);

  return ref;
};
