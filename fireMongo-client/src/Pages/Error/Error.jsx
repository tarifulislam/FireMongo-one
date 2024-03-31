import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className=" container mx-auto">
        <div className=" flex justify-center items-center h-screen">   
            <div className=" text-center">
            <img className=' w-32 mx-auto' src={"https://i.ibb.co/ZJGGP5H/Sorry-Emoji-530x-2x.webp"}/>
                <h2 className='text-4xl  font-bold mb-3'>404 Error page</h2>
                <p className=' text-4xl mb-4'>Sorry this page doesn.t exit</p>
                <NavLink to='/'><p className=' bg-green-400 px-4 py-2 rounded  inline-block text-white '>Go Back</p></NavLink>
            </div>
        </div>
        
    </div>
    );
};

export default Error;