import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

export default function App() {
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState(i18n.language);
    function changeLang(lang) {
        i18n.changeLanguage(lang);
        setLang(lang);
    }

  return (
      <div>
          <button onClick={() => {changeLang(lang === 'fr' ? 'en' : 'fr')}}>{lang.toUpperCase()}</button>
          <form >
              <label htmlFor="fname">{t('fname')}</label><br/>
              <input type="text" name={"fname"}/><br/>
              <label htmlFor="lname">{t('lname')}</label><br/>
              <input type="text" name={"lname"}/>
          </form>
          <button>{t('submitBtn')}</button>
      </div>
  )
}
