import React, { useState, useEffect } from 'react';
import huContent from '../language/huContent.json';
import enContent from '../language/enContent.json';
import { WebSiteContextProvider } from './WebsiteContext';


export default function HomePageState(props: any) {
  const [language, setStateLanguage] = useState('');
  const [ContentInfo, setContentInfo]: any = useState(huContent);

  useEffect(() => {
    _checkThemeAndLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   Default theme: light, default language: English
  const _checkThemeAndLanguage = () => {
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
    <WebSiteContextProvider
      value={{
        language: language,
        setLanguage: setLanguage,
        ContentInfo
      }}
    >
      {props.children}
    </WebSiteContextProvider>
  );
}
