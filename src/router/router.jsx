import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        index: true,
        element:<Home/>
      },
      
      
    ]
  },
  
  {
    path:"*"
  }
]);