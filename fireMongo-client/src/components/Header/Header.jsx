import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logOut()
        navigate("/signin")
    }

    const navLinks = <>
        <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/">Home</NavLink>
        <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/users">User</NavLink>
        <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/cources">Cources</NavLink>
        <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/phones">Phones</NavLink>
        
        <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/addphone">AddPhones</NavLink>
       
        
        <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/phonecard">PhoneCard</NavLink>
       
        {
            user && <NavLink className={({isActive, isPending})=> isPending ?  "pending" : isActive ? "text-blue-500  pb-1 border-b-2  border-blue-500" : ""} to="/mycart">MyCart</NavLink>
        }

    </>

    return (
        <div>
            <div className="navbar  container mx-auto  px-0">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <a className="text-xl font-bold">MFiRE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                
                    {
                        user ? <div className =" flex items-center gap-3">
                                <div>
                                    <p>{user?.email}</p>
                                    <p>{user?.displayName}</p>
                                </div>
                                 <button onClick={handleLogout} className="btn">LogOut</button>     
                             </div>
                            :
                            <Link to="/signin">
                               <button className="btn">Log in</button> 
                           </Link> 
                    }

                   
               
            </div>
            </div>
        </div>
    );
};

export default Header;