import { grib } from '../../assets/images/index';
import { Originalsp } from '../../components/originalsp/Originalsp';
import { useI18n } from '../../i18n';
import './Originals.scss';
export const Originals = () => {
  const { t } = useI18n();
  return (
    <div className='originals'>
      <img className='originals__image' src={grib} alt='Grib' />
      <h1 className='originals__title'>{t('originals.title')}</h1>
      <h2 className='originals__subtitle'>{t('originals.subtitle')}</h2>
      <div className='originals__pictures'>
        <Originalsp />
      </div>
    </div>
  );
};
