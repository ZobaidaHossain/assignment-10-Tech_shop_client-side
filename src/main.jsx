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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee/')
  },
  {
    path:"addCoffee",
    element:<AddCoffee></AddCoffee>
   
  }
,{
  path:'updateCoffee/:id',
  element:<UpdateCoffee></UpdateCoffee>,
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
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
