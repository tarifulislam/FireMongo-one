import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

import sidePhoto from "../../assets/typeing.jpg"
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef()

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        if (password.length < 6) {
            alert("Password must be six charecter")
           return;
           }
        signInUser(email, password)
        .then(res => {
             console.log(res);
             navigate("/")  
        })
        .catch(err => {
            alert("wrong password")
            console.error(err);
        })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            alert("please provite an email", emailRef.current.value);
            return
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
           alert("please write a valid email");
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(()=> alert("check your email"))
        .catch(err => console.log(err))

    }

    return (
        <div className="">
            <div className="container mx-auto min-h-screen py-9 px-[10%]">
                <div className=" flex flex-col md:flex-row  justify-between items-center">
                    <div className=" hidden md:block  w-full md:w-2/4 pr-12" >
                        <img className="  lg:ml-[10%] " src={sidePhoto} alt="" />
                    </div>
                    <div className=" w-full md:w-2/4 p-12 rounded-md border">
                        <h1 className="text-4xl font-bold py-6 text-center">Login now!</h1>

                        <form onSubmit={handleLogin} className=" space-y-3">
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="email"  placeholder="email" name="email" ref={emailRef}className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <p onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Login</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <h4 className=" py-3 font-semibold text-base">create an account?  <Link to='/signup' className=" text-red-600 px-1">Sign Up</Link> </h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;