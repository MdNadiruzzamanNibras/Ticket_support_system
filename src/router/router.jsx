import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Registration from "../Login/Registration";
import Login from "../Login/Login";
import CreateSupport from "../Home/CreateSupport";
import All from "../Home/All";
import ReplyAsk from "../Home/ReplyAsk";

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
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/create",
        element:<CreateSupport/>
      },
      {
        path:"/all",
        element:<All/>
      },
      {
        path:"/reply/:id",
        element:<ReplyAsk/>
      },
      
      
    ]
  },
  
  {
    path:"*"
  }
]);