import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function LanguageSelector() {
  let location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const generateLanguage = (newLocale: any, location: any) => {
    const language = i18n.language;

    const pathname = location.pathname.split('/');

    if (pathname.length > 0 && pathname[1] === language) {
      pathname[1] = newLocale;
    }

    const pahtnameResult = pathname.join('/');

    return pahtnameResult;
  };

  return (
    <div>
        <h1>{t('Select language')}</h1>
        <div >
          <Link to={generateLanguage('es', location)}>
            <button  onClick={() => changeLanguage('es')}>
              es
            </button>
          </Link>
          <Link to={generateLanguage('en', location)}>
            <button  onClick={() => changeLanguage('en')}>
              en
            </button>
          </Link>
        </div>
    </div>
  );
}
