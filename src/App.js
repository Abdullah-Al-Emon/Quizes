import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics/>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
