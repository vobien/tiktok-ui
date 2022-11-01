import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';

const defaultImage =
  'https://icdn.dantri.com.vn/thumb_w/640/2021/03/14/hot-girl-9-x-dep-goi-camdocx-1615737535134.jpeg';

const Image = forwardRef(({ src, alt, fallback = defaultImage, className }, ref) => {
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
