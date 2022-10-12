import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Blogs from './Components/Blogs/Blogs';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router=createBrowserRouter([
{
 path:'/',
 element:<Main></Main>,
 children:[
  {
    path:'topics',
    element:<Topics></Topics>
  },
  {
    path:'/',
    element:<Topics></Topics>
  },
  {
    path:'statistics',
    element:<Statistics></Statistics>
  },
  {
    path:'blogs',
    element:<Blogs></Blogs>
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
