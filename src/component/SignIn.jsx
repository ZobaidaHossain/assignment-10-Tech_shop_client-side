import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {


    const {signInUser,signInWithGoogle}=useContext(AuthContext);
    const [success,setSuccess]=useState('');
const [loginError, setLoginError] = useState("");

const navigate=useNavigate();

    const handleSignIn=e=>{
        e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);



    signInUser(email,password)
    
    .then(result=>{
        console.log(result.user);
        setSuccess('');
       

        const user={email,
        lastLoggedAt:result.user?.metadata?.lastSignInTime
        };

         fetch(' https://tech-server-98qmjlf09-zobaidas-projects.vercel.app/user',{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          
        })

        
           
      
       
        e.target.reset();
        navigate('/');


    })
    .catch(error=>{
        console.error(error);
        setLoginError(error.message);
        toast.error("Invalid email or password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        if (error.code === "auth/invalid-login-credentials" || error.code === "auth/wrong-password") {
          setLoginError("Invalid email or password");
        } else {
          setLoginError(error.message);
        }
    })
}

    //sign in with google
    const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
        const user={
          email:result.user.email
          };
  
           fetch(' https://tech-server-98qmjlf09-zobaidas-projects.vercel.app/user',{
              method:'PATCH',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(user)
  
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            
          })
      
        navigate('/');
      })
      .catch(error=>{
        console.error(error.message)
      })
    }



    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">LogIn now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn}className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"name="password" placeholder="password" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <p>New to this website ? Please <Link className="text-blue-600" to="/signup">Register</Link></p>
          <p>
          <button onClick={handleGoogleSignIn}className="btn btn-primary ml-10 mt-3">Login with Google</button></p>

            </form>
            <ToastContainer></ToastContainer>
            {
                    loginError && <p className="text-red-700">{loginError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                    
                }
          </div>
        </div>
      </div>
    );
};

export default SignIn;