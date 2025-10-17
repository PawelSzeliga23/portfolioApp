import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    return (
        <div className='absolute top-3 right-10 px-2 py-2 dark:text-white text-black rounded-full bg-transparent z-50'>
            <button onClick={() => i18n.changeLanguage('en')} className={`mx-2 cursor-pointer transition-text duration-300 ease-in-out ${i18n.language === 'en' ? 'dark:text-purple-500 text-lime-500' : ''}`}>EN</button>| 
            <button onClick={() => i18n.changeLanguage('pl')} className={`mx-2 cursor-pointer transition-text duration-300 ease-in-out ${i18n.language === 'pl' ? 'dark:text-purple-500 text-lime-500' : ''}`}>PL</button>
        </div>);
}

export default LanguageToggle;