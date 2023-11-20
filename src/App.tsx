import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home,Cart } from "./pages";

const router = createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ]
  }
])

export {router};
