import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, hideOnClick = false, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history?.length - 1];

  const handleClickMenuItem = (item) => {
    if (item.children) {
      setHistory((prev) => [...prev, item.children]);
    } else {
      console.log(item);
    }
  };

  const renderItems = currentMenu?.data?.map((item, index) => {
    return <MenuItem key={index} data={item} onClick={() => handleClickMenuItem(item)} />;
  });

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev?.length - 1));
  };

  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history?.length > 1 && <Header title="Language" onBack={handleBack} />}
            <div className={cx('menu-body')}> {renderItems}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
