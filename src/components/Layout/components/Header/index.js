import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCloudArrowUp,
  faEllipsisVertical,
  faGlobeAsia,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faMoon,
  faQuestionCircle,
  faSignIn,
  faSpinner,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    leftIcon: <FontAwesomeIcon icon={faGlobeAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    leftIcon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    leftIcon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyborad shortcuts',
  },
  {
    leftIcon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    rightIcon: <FontAwesomeIcon icon={faToggleOff} />,
    separate: true,
  },
];

const currentUser = {
  name: 'tri',
  avartar:
    'p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5954b15af7d6c1de53acef5f11291a1d~c5_100x100.jpeg?x-expires=1667444400&x-signature=k4Dau4WYcdag6S26eaYqGznmSXc%3D',
};

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo tiktok" />
        </div>

        <HeadlessTippy
          placement="bottom"
          visible={searchResult?.length > 0}
          interactive="true"
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                {searchResult?.map((acc) => (
                  <AccountItem key={acc} />
                ))}
              </PopperWrapper>
            </div>
          )}
        >
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
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={MENU_ITEMS}>
            {currentUser ? (
              <Image
                fallback="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                className={cx('user-avatar')}
                src={currentUser.avartar}
                alt={currentUser.name}
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
