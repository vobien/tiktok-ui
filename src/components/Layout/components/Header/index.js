import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo tiktok" />
        </div>

        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear-btn')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={cx('actions')}></div>
      </div>
    </div>
  );
}

export default Header;
