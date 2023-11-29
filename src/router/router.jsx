import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Registration from "../Login/Registration";

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
        path:"/registration",
        element:<Registration/>
      },
      
      
    ]
  },
  
  {
    path:"*"
  }
]);