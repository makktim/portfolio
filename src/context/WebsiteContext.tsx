import React, { createContext, useEffect, useState } from 'react';
import huContent from '../content/hu.json';
import enContent from '../content/en.json';

const context: {
  setLanguage?: any;
  language?: any;
  ContentInfo?: any;
} = {};

export const WebsiteContext = createContext(context);

export const WebsiteContextProvider = WebsiteContext.Provider;
export const WebsiteContextConsumer = WebsiteContext.Consumer;

export default function NavProvider({ children }: any) {
  const [language, setStateLanguage] = useState('');
  const [ContentInfo, setContentInfo]: any = useState(huContent);

  useEffect(() => {
    checkLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkLanguage = () => {
    if (localStorage.getItem('language') != null) {
      const _language: any = localStorage.getItem('language');
      setStateLanguage(_language);
    } else {
      setLanguage('en');
    }
    if (localStorage.getItem('language') === 'hu') {
      setContentInfo(huContent);
    } else {
      setContentInfo(enContent);
    }
  };

  const setLanguage = (language: string) => {
    setStateLanguage(language);
    localStorage.setItem('language', language);
    if (language === 'hu') {
      setContentInfo(huContent);
    } else {
      setContentInfo(enContent);
    }
  };

  return (
    <WebsiteContextProvider
      value={{
        setLanguage,
        language: language,
        ContentInfo
      }}>
      {children}
    </WebsiteContextProvider>
  );
}
