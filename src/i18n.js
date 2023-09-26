import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: ['en', 'ru', 'pl'],
        fallback: 'en',
        lng: 'en',
        debug: false,
        detection: {
            order: ['cookie', 'localStorage'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: 'locales/{{lng}}/translation.json',
        },
        interpolation: {
            escapeValue: false,
        },
    });

/*
пример использования

hook:
1) const { t } = useTranslation();
2) {t('test')}

Trans:
1) import { Trans } from 'react-i18next';
2) <Trans i18Key="someLink">
    some text <b>bold text</b> - <a>link</a>
   </Trans>

test и someLink это ключи в json объекте с переводами
*/

export default i18next;
