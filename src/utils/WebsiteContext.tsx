import { createContext } from 'react';
import huContent from '../language/huContent.json';

const context: {
  language?: string | null;
  setLanguage: (language: string) => void;
  ContentInfo?: any;
} = {
  language: null,
  ContentInfo: huContent,
  setLanguage: () => {}
};

export const WebSiteContext = createContext(context);

export const WebSiteContextProvider = WebSiteContext.Provider;
export const WebSiteContextConsumer = WebSiteContext.Consumer;
