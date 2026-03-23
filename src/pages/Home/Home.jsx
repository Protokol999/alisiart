import { useNavigate } from 'react-router-dom';
import { alina, bigSea } from '../../assets/images/index';
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
      <div className='home__about'>
        <img className='home__about-image' src={alina} alt='Alina' />
        <div className='home__about-text'>
          <h2 className='home__about-text-title'>{t('home.aboutTitle')}</h2>
          <button
            className='home__about-text-button'
            onClick={() => navigate('about')}
          >
            {t('home.aboutText')}
          </button>
        </div>
      </div>
    </div>
  );
};
