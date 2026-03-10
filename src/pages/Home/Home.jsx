import { useNavigate } from 'react-router-dom';
import { bigSea } from '../../assets/index';
import { Pictures } from '../../components/Pictures/Pictures';
import { useI18n } from '../../i18n';
import './Home.scss';

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className='home'>
      <div className='home__hero'>
        <img className='home__image' src={bigSea} alt='Sea' />
        <h1 className='home__title'>{t('home.title')}</h1>
        <div className='home__buttons'>
          <button
            className='home__buttons-button'
            onClick={() => navigate('/originals')}
          >
            {t('home.shopOriginals')}
          </button>
          <button
            className='home__buttons-button'
            onClick={() => navigate('/prints')}
          >
            {t('home.shopPrints')}
          </button>
        </div>
      </div>

      <div className='home__gallery'>
        <Pictures />
      </div>
    </div>
  );
};
