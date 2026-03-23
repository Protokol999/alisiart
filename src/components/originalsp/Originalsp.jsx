import { useNavigate } from 'react-router-dom';
import {
  picture1,
  picture10,
  picture13,
  picture14,
  picture16,
  picture2,
  picture3,
  picture4,
  picture6,
  picture7,
  picture8,
  picture9,
  sea,
  sheep
} from '../../assets/images/index';
import './Originalsp.scss';
const origin = [
  {
    id: 'painting-1',
    src: picture1,
    alt: 'Painting 1',
    className: 'originalsp__item--1'
  },
  {
    id: 'painting-2',
    src: picture2,
    alt: 'Painting 2',
    className: 'originalsp__item--2'
  },
  {
    id: 'painting-3',
    src: picture3,
    alt: 'Painting 3',
    className: 'originalsp__item--3'
  },
  {
    id: 'painting-4',
    src: picture4,
    alt: 'Painting 4',
    className: 'originalsp__item--4'
  },
  {
    id: 'painting-5',
    src: picture9,
    alt: 'Painting 5',
    className: 'originalsp__item--5'
  },
  {
    id: 'painting-6',
    src: picture16,
    alt: 'Painting 6',
    className: 'originalsp__item--6'
  },
  {
    id: 'painting-7',
    src: picture6,
    alt: 'Painting 7',
    className: 'originalsp__item--7'
  },
  {
    id: 'painting-8',
    src: picture7,
    alt: 'Painting 8',
    className: 'originalsp__item--8'
  },
  {
    id: 'painting-9',
    src: picture13,
    alt: 'Painting 9',
    className: 'originalsp__item--9'
  },
  {
    id: 'painting-10',
    src: sheep,
    alt: 'Painting 10',
    className: 'originalsp__item--10'
  },
  {
    id: 'painting-11',
    src: sea,
    alt: 'Painting 11',
    className: 'originalsp__item--11'
  },
  {
    id: 'painting-12',
    src: picture8,
    alt: 'Painting 12',
    className: 'originalsp__item--12'
  },
  {
    id: 'painting-13',
    src: picture10,
    alt: 'Painting 13',
    className: 'originalsp__item--13'
  },
  {
    id: 'painting-14',
    src: picture14,
    alt: 'Painting 14',
    className: 'originalsp__item--14'
  }
];

export const Originalsp = () => {
  const navigate = useNavigate();
  return (
    <section className='originalsp'>
      {origin.map(({ src, alt, className, id }) => (
        <div
          key={id}
          className={`originalsp__item ${className}`}
          onClick={() => navigate(`/paintings/${id}`)}
        >
          <img className='originalsp__image' src={src} alt={alt} />
        </div>
      ))}
    </section>
  );
};
