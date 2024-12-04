import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './Landing';

import '../styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);


const App = ():JSX.Element => (
  <RouterProvider router={router} />
);

export default App;
