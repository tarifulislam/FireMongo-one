import {createBrowserRouter} from "react-router-dom";
import Layout from './../Layout/Layout';
import Error from './../Pages/Error/Error';
import Home from "../Pages/Home/Home";
import Cources from "../Pages/Cources/Cources";
import SignUp from "../Pages/Forms/SignUp";
import SignIn from "../Pages/Forms/SignIn";
import MyCart from "../Pages/MyCart/MyCart";
import Phones from "../Pages/Phones/Phones";
import CourceDetails from "../Pages/Cources/CourceDetails";
import Users from "../Pages/Users/Users";
import UserDetails from "../Pages/Users/UserDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddPhone from "../Pages/Phones/AddPhone";
import PhoneUpdate from "../Pages/Phones/PhoneUpdate";
import PhoneDetails from './../Pages/Phones/PhoneDetails';
import PhoneCart from './../Pages/PhoneCart/PhoneCart';


const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/cources",
        element: <Cources></Cources>,
        loader : ()=> fetch('/datas.json')
      },
      {
        path: "/courcedetails/:id",
        element: <CourceDetails></CourceDetails>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/userdtls/:id",
        element : <UserDetails></UserDetails>,
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader : ()=> fetch('https://fire-mongo-server.vercel.app/phones')
      },
      {
        path: "/phonedetails/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader : ({params})=> fetch(`https://fire-mongo-server.vercel.app/phones/${params.id}`)
      },
      {
        path: "/mycart",
        element: <PrivateRoutes> <MyCart></MyCart></PrivateRoutes>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/addphone",
        element: <AddPhone></AddPhone>
      },
      {
        path: "/updatephone/:id",
        element:<PhoneUpdate></PhoneUpdate>,
        loader : ({params})=> fetch(`https://fire-mongo-server.vercel.app/phones/${params.id}`)
      },
      {
        path: "/phonecard",
        element:<PhoneCart></PhoneCart>,
        loader : ()=> fetch('https://fire-mongo-server.vercel.app/cardphones')
      },
    
    ]
  }
]);

export default myRouter;
