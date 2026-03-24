import { prints } from '../../assets/images';
import { useI18n } from '../../i18n';
import './Prints.scss';
export const Prints = () => {
  const { t } = useI18n();
  return (
    <div className='prints'>
      <img className='prints__image' src={prints} alt='prints' />
      <h2 className='prints__title'>{t('prints.title')}</h2>
      <h2 className='prints__description'>{t('prints.description')}</h2>
    </div>
  );
};
