import { Link } from "react-router-dom";

const User = ({user,handleMarkUser}) => {
    const {id, name, email, phone} = user || {};

    return (
    <div className=" container mx-auto ">
        <div className=" w-full p-4 border border-red-400 rounded-md bg-slate-200">
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <div className=" flex gap-3 "> 
                    <div>
                        <Link to={`/userdtls/${id}`}>
                            <button className="p-2 mt-3 text-white rounded-md  bg-green-500">See details</button>
                        </Link>
                    </div>
                    <div>
                        <button onClick={()=> handleMarkUser(user)} className="p-2 mt-3 text-white rounded-md  bg-blue-500">Add to Bucket</button>
                    </div>
                </div>

        </div>
    </div>
    );
};

export default User;