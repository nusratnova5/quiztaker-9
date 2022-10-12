import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Blogs from './Components/Blogs/Blogs';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Quizes from './Components/Quizes/Quizes';

function App() {
  const router=createBrowserRouter([
{
 path:'/',
 element:<Main></Main>,
 children:[
  {
    path:'topics',
    loader: () => {
      return fetch('https://openapi.programming-hero.com/api/quiz');
    },
    element:<Topics></Topics>
  },
  {
    path:'/',
    loader: () => {
      return fetch('https://openapi.programming-hero.com/api/quiz');
    },
    element:<Topics></Topics>
  },
  {
    path:'statistics',
    loader: () => {
      return fetch('https://openapi.programming-hero.com/api/quiz');
    },
    element:<Statistics></Statistics>
  },
  {
    path:'blogs',
    element:<Blogs></Blogs>
  },
  {
    path: '/topic/:topicID',
    loader: ({params}) => {
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicID}`);
    },
    element: <Quizes></Quizes>
  }
 ]

}

  ]);
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
