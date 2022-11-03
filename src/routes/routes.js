import { HeaderOnly } from '~/layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import config from '~/constants';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.upload, component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
