import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ icon, title, to }) {
  return (
    <nav>
      <NavLink className={({ isActive }) => cx('menu-item', { active: isActive })} to={to} end>
        {icon}
        <span className={cx('title')}>{title}</span>
      </NavLink>
    </nav>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
