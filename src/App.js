import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Cards from './Components/Cards/Cards';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Quizs from './Components/Quizs/Quizs';
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
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/cards',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Cards></Cards>
      },
      {
        path: '/card/:cardId',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.cardId}`),
        element: <Quizs />
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics />
      },
      {
        path: '/blog',
        element: <Blog />
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
