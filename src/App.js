import React from 'react';
import {useTranslation} from "react-i18next";

export default function App() {
    const {t, i18n} = useTranslation();
  return (
      <div>
          <button onClick={() => {
              i18n.changeLanguage(i18n.language === 'fr' ? 'en':'fr');
          }}>{i18n.language.toUpperCase()}</button>
          <form >
              <label htmlFor="fname">{t('other:fname')}</label><br/>
              <input type="text" name={"fname"}/><br/>
              <label htmlFor="lname">{t('lname')}</label><br/>
              <input type="text" name={"lname"}/>
          </form>
          <button>{t('submitBtn')}</button><br/>
      </div>
  )
}
