import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import searchApi from '~/api/searchApi';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const queryValue = useDebounce(searchValue, 800);

  const inputRef = useRef();

  useEffect(() => {
    if (!queryValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    searchAccounts();
  }, [queryValue]);

  const searchAccounts = async () => {
    try {
      const res = await searchApi.getAccounts('users/search', {
        params: {
          q: encodeURIComponent(queryValue),
          type: 'less',
        },
      });
      setSearchResult(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
    // Using a wrapper <div> tag around the reference element
    // solves this by creating a new parentNode context.
    // to fix tippy warning
    <div>
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
          {!loading && searchValue && (
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
    </div>
  );
}

export default Search;
