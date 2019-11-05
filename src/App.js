import React, {useState} from 'react';
import i18next from 'i18next';

i18next.init({
    lng: 'en',
    debug: 'true',
    resources: {
        en: {
            translation: {
                'fname': 'First name',
                'lname': 'Last name',
                'submitBtn': 'Continue',
                'langBtn': 'Fr'
            }
        },
        fr: {
            translation: {
                'fname': 'Premier nom',
                'lname': 'Nom de famille',
                'submitBtn': 'Continuer',
                'langBtn': 'En'
            }
        }
    }
}, () => {});

export default function App() {
    const [lang, setLang] = useState(i18next.language);
    function changeLang(lang) {
        i18next.changeLanguage(lang);
        setLang(lang);
    }

  return (
      <div>
          <button onClick={() => {changeLang(lang === 'fr' ? 'en' : 'fr')}}>{lang.toUpperCase()}</button>
          <form >
              <label htmlFor="fname">{i18next.t('fname')}</label><br/>
              <input type="text" name={"fname"}/><br/>
              <label htmlFor="lname">{i18next.t('lname')}</label><br/>
              <input type="text" name={"lname"}/>
          </form>
          <button>{i18next.t('submitBtn')}</button>
      </div>
  )
}
