import { bigSea } from '../../assets/images/index';
import { Originalsp } from '../../components/originalsp/Originalsp';
import { painting } from '../../data/paintings';
import { useI18n } from '../../i18n';
import './Originals.scss';
export const Originals = () => {
  const { t } = useI18n();
  const lastThree = painting.slice(-3);
  const rest = painting.slice(0, -3);
  return (
    <div className='originals'>
      <img className='originals__image' src={bigSea} alt='Grib' />
      <h1 className='originals__title'>{t('originals.title')}</h1>
      <h2 className='originals__subtitle'>{t('originals.subtitle')}</h2>
      <div className='originals__pictures'>
        <Originalsp items={rest} />
      </div>
      <div className='originals__canvases'>
        <h2 className='originals__canvases--title'>
          {t('originals.canvases')}
        </h2>
        <Originalsp items={lastThree} variant='canvases' />
      </div>
    </div>
  );
};
