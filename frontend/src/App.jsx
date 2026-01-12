import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Components/Signin";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Home from "./Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/nav",
    element:<Nav/>
  }
]);

function App() {
 
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
