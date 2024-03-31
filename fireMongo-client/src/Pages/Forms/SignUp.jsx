import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import sidePhoto from "../../assets/typeing.jpg"
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const {createUser, handleUpdateProfile} = useContext(AuthContext);
    const navigate = useNavigate()
    const [toogle, setToogle] = useState(true)

    const handleRegistration = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            alert("Password must be six charecter")
            return;
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)){
            alert("Password is invalid")
            return;
        }
        // console.log(name,photourl, email, password);
        createUser(email, password)
        .then(res =>{
            handleUpdateProfile(name,photourl)
            .then(() =>{
                e.target.reset();
                alert("user create successfully")
                navigate("/")
            })
        })
        .catch(err => {
            alert("user create error: ")
        })
    }

    return (
        <div className="">
            <div className="container mx-auto min-h-screen py-9 px-[10%]">
                <div className=" flex flex-col md:flex-row  justify-between items-center">
                    <div className="w-full  md:w-2/4  hidden md:block  pr-12">
                        <img className="  hidden md:block  ml-[10%] " src={sidePhoto} alt="" />
                    </div>

                    <div className="w-full md:w-2/4 p-12 rounded-md border">
                        <h1 className="text-4xl font-bold py-6 text-center">Sign In</h1>

                        <form onSubmit={handleRegistration} className=" space-y-3">
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="Photo url" name="photourl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="">
                                <label className="label font-bold">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=" relative form-control">
                                   <input type={toogle ? "password" : "text"} placeholder="password" name="password" className="input input-bordered " required />
                                   <button className=" absolute  right-4 top-3" onClick={()=> setToogle(!toogle)}>{toogle? "show" : "hide"}</button>
                                </div>
                          
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Sign in</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <h4 className=" py-3 font-semibold text-base">Have an account? <Link to='/signin' className=" text-red-600 px-1">log In</Link> </h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;