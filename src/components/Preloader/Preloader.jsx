import { useEffect, useState } from 'react';
import './Preloader.scss';

const LETTERS = 'ALISI ART'.split('');
const MIN_MS = 2400;

export const Preloader = ({ onComplete }) => {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const wait = Math.max(0, MIN_MS - elapsed);
      setTimeout(() => {
        setHiding(true);
        setTimeout(onComplete, 700);
      }, wait);
    };

    // Wait for all images in the document to load
    const checkImages = () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      if (imgs.length === 0) { finish(); return; }

      let remaining = imgs.length;
      const dec = () => { remaining--; if (remaining === 0) finish(); };

      imgs.forEach(img => {
        if (img.complete) dec();
        else {
          img.addEventListener('load', dec, { once: true });
          img.addEventListener('error', dec, { once: true });
        }
      });
    };

    // Give React one tick to render images into DOM
    const timer = setTimeout(checkImages, 50);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader${hiding ? ' preloader--hiding' : ''}`} aria-hidden='true'>
      <div className='preloader__inner'>
        <div className='preloader__word'>
          {LETTERS.map((ch, i) => (
            <span
              key={i}
              className='preloader__letter'
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>

        <div className='preloader__tagline'>
          <span className='preloader__tagline-text'>original paintings</span>
        </div>

        <div className='preloader__track'>
          <div className='preloader__fill' />
        </div>
      </div>
    </div>
  );
};
