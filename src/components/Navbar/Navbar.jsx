import { NavLink } from 'react-router-dom';
import { useI18n } from '../../i18n';
import './Navbar.scss';

export const Navbar = () => {
  const { language, setLanguage, t } = useI18n();
  const nextLanguage = language === 'en' ? 'ru' : 'en';

  return (
    <nav className='navbar'>
      <div className='navbar__list'>
        <NavLink to='/'>{t('navbar.home')}</NavLink>
        <NavLink to='/originals'>{t('navbar.originals')}</NavLink>
        <NavLink to='/prints'>{t('navbar.prints')}</NavLink>
        <NavLink to='/commissions'>{t('navbar.commissions')}</NavLink>
        <NavLink to='/about'>{t('navbar.about')}</NavLink>
        <NavLink to='/contact'>{t('navbar.contact')}</NavLink>
      </div>

      <button
        type='button'
        className='navbar__language-toggle'
        aria-label={t('navbar.language')}
        onClick={() => setLanguage(nextLanguage)}
      >
        <span className={language === 'en' ? 'is-active' : ''}>EN</span>
        <span className='navbar__language-divider'>/</span>
        <span className={language === 'ru' ? 'is-active' : ''}>RU</span>
      </button>
    </nav>
  );
};
