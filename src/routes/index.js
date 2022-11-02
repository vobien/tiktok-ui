import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { routeConfig } from '~/constants';

const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.profile, component: Profile, layout: HeaderOnly },
  { path: routeConfig.upload, component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
