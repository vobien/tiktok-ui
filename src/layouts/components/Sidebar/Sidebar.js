import classNames from 'classnames/bind';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import config from '~/constants';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem icon={<HomeIcon />} title="For you" to={config.routes.home} />
        <MenuItem icon={<UserGroupIcon />} title="Following" to={config.routes.following} />
        <MenuItem icon={<LiveIcon />} title="LIVE" to={config.routes.live} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
