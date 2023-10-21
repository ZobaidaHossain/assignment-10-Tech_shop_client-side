import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const [registerError,setRegisterError]=useState("");
    const [success,setSuccess]=useState('');

    const navigate=useNavigate();

const handleSignUp=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);

 //reset error & success
 setRegisterError('');
 setSuccess('');

 if(password.length <6){
   setRegisterError('password should be 6 character or longer');
   return;
}

else if (!/[A-Z]/.test(password)){
   setRegisterError('your password should have at least one upper case characters.')
   return;
}
else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
 setRegisterError('Your password should contain at least one special character.');
 return;
}


//create user 
    createUser(email,password)
    .then(result=>{
        console.log(result.user);

        setSuccess('user Register successfully');
        //toast
        toast.success("Register successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        //new user has been created
        const user={email, password: password};
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                console.log('user added database');
            }
        })

        e.target.reset();
        navigate('/');
    })
    .catch(error=>{
        console.error(error);
        setRegisterError(error.message);
    })
    
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account? please <Link className="text-blue-600"to='/signin'> Login</Link></p>
            </form>
            <ToastContainer />
            {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                    
                }
          </div>
        </div>
      </div>
    );
};

export default SignUp;