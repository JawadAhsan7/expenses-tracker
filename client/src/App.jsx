import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages';

const router = createBrowserRouter([
  { path: '/', element: <h1>Home Element</h1>, errorElement: <ErrorPage /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;