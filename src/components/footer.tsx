import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-center mt-2 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
      <p>{t('footer.copyright', { year })} – {t('footer.allRights')}</p>
    </footer>
  );
};

export default Footer;
