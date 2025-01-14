import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Destination from './Destination/Destination.jsx'
import Carousel from './CarouselSilder/Carousel.jsx'
import Root from './root/Root.jsx'
import Login from './Login/Login.jsx'
import Registration from './Registration/Registration.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
import ForgetPass from './Login/ForgetPass.jsx'
import PrivateRoute from './Private/PrivateRoute.jsx'
import Blog from './Blog/Blog.jsx'
import News from './News/News.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/', element: <App />
      },
      {
        path: '/destination', element: <Destination />
      },
      {
        path: "/carousel", element: <Carousel />
      },
      {
        path: "/login", element: <Login></Login>
      },
      {
        path: "register", element: <Registration />
      }, {
        path: "/forget_password", element: <ForgetPass />
      },
      {
        path: "/blog", element: <PrivateRoute><Blog /></PrivateRoute>
      },
      {
        path: "/news", element: <News />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  </StrictMode>,
)
