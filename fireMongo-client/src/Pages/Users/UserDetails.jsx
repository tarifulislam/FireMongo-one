import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {id, name, email, phone,website} = user;

    return (
        <div className=" container mx-auto  min-h-screen">
        <div className=" w-full p-4 border border-red-400 rounded-md bg-slate-200">
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
              
             <button className="p-2 mt-3 text-white rounded-md  bg-green-500">Contract</button>
                
        </div>
    </div>
    );
};

export default UserDetails;