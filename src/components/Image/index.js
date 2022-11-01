import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, fallback, className }, ref) => {
  const [noImage, setNoImage] = useState('');

  const handleError = () => {
    setNoImage(fallback);
  };

  return (
    <img
      ref={ref}
      src={noImage || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      onError={handleError}
    />
  );
});

export default Image;
