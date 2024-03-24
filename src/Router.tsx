import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { CountersPage } from '@/pages/Counters.page';
import { TimersPage } from '@/pages/Timers.page';
import { StateManipulations } from '@/pages/StateManipulations.page';
import { ContextPage } from '@/pages/Context.page';

export enum Paths {
  counters = 'counters',
  timers = 'timers',
  state = 'state',
  context = 'context',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: Paths.counters,
        element: <CountersPage />,
      },
      {
        path: Paths.timers,
        element: <TimersPage />,
      },
      {
        path: Paths.state,
        element: <StateManipulations />,
      },
      {
        path: Paths.context,
        element: <ContextPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
