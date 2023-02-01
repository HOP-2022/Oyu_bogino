import App from './App'
import Red from './pages/Red'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import History from './pages/History'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
      path:'/:id',
      element: <App/>,
    },
    {
      path:'/:id',
      element: <Red/>,
    },
    {
      path:'/Login',
      element: <Login/>,
    },
    {
      path:'/Signup',
      element: <Signup/>,
    },
    {
      path:'/History',
      element: <History/>,
    },
])

function Home() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default Home;