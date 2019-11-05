import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import en from './i18n/en'
import fr from './i18n/fr'

i18n.use(initReactI18next).init({
    resources: {en, fr},
    lng:'en',
    ns: ['translation', 'unique'],
    defaultNS: 'translation',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    debug: true,
});

export default i18n;