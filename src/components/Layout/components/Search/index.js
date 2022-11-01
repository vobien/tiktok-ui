import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faL, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((json) => {
        setSearchResult(json.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue('');
    setShowResult(false);
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideSearchResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      placement="bottom"
      visible={showResult && searchResult?.length > 0}
      interactive="true"
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult?.map((acc) => (
              <AccountItem key={acc.id} data={acc} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideSearchResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onFocus={() => setShowResult(true)}
        />
        {!loading && showResult && searchResult.length > 0 && (
          <button className={cx('clear-btn')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
