import { useRoutes } from 'react-router-dom';

import { Home, Viewer } from '../features/pages';

const AppRoute = () =>
    useRoutes([
        { path: '/', element: <Home /> },
        { path: '/viewer', element: <Viewer /> },
    ]);

export default AppRoute;
