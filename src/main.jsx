import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import SignUp from './component/SignUp.jsx';
import SignIn from './component/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Main from './layout/Main.jsx';
import Home from './Home/Home.jsx';
import Product from './component/Product.jsx';
import Details from './Home/Details.jsx';
import AddCard from './Home/AddCard.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Error from './Home/Error.jsx';
const router = createBrowserRouter([
  {
path:"/",
element:<Main></Main>,
errorElement:<Error></Error>,
children:[
  {
path:'/',
element:<Home></Home>,
loader: ()=>fetch('/product.json')
  },
  {
   //edit
    // path:"/addCoffee/:brandName",
     path:"/addCoffee",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee/')
  },
  {
//edit
path:"/addCoffee/:brandName",
// path:"/addCoffee",
element: <Product></Product>,
loader:()=>fetch('http://localhost:5000/coffee/')
  },
  {
    path:"/addCoffee/details/:id",
element: <PrivateRoute><Details></Details></PrivateRoute>,
loader:()=>fetch('http://localhost:5000/coffee/')
  },
  {
    path: "/addproduct",
    // element:<AddCoffee></AddCoffee> 
    element:<PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
  }
,{
  path:'/addCoffee/:brandName/updateCoffee/:id',
  element:<PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
  loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

},
{
  path:'/signup',
  element:<SignUp></SignUp>
},
{
  path:'/signin',
  element:<SignIn></SignIn>
}
,
  {
    path:"/cart",
    // element:<AddCard></AddCard>,
    element:<PrivateRoute><AddCard></AddCard></PrivateRoute>,
    loader: ()=>fetch('http://localhost:5000/cart')
  }
]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
