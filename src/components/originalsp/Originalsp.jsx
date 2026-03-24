import { useNavigate } from 'react-router-dom';
import './Originalsp.scss';

export const Originalsp = ({ items, variant }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`originalsp ${variant ? `originalsp--${variant}` : ''}`}
    >
      {items.map(({ id, media }, index) => {
        const image = media.find(m => m.type === 'image')?.src;

        return (
          <div
            key={id}
            className={`originalsp__item originalsp__item--${index + 1}`}
            onClick={() => navigate(`/paintings/${id}`)}
          >
            <img className='originalsp__image' src={image} alt='' />
          </div>
        );
      })}
    </section>
  );
};
