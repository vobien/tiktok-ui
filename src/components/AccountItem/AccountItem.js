import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9757b6702d1ead87a1127bbff1bda430~c5_100x100.jpeg?x-expires=1667116800&x-signature=hnXA3Qho5vbrbQqR2aZ%2Bs2FHEH8%3D"
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>nguyenvana</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('name')}>Nguyen Van A</span>
      </div>
    </div>
  );
}

export default AccountItem;
