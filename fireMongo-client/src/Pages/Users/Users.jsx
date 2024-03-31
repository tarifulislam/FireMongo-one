import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";

const Users = () => {
    const users = useLoaderData()
    const [allusers, SetAllusers] = useState(users);
    const [dataLength, SetDataLength] = useState(4)
    const [markusers, SetMarkusers] = useState([])

    const handleMarkUser = user =>{
       const findId = markusers.find(mUser => mUser.id === user.id);
       if(!findId){
            const AllMarkUser = [...markusers, user]
            SetMarkusers(AllMarkUser)
       }else{
            alert("Sorry It Alreay in bucket")
       }
    }

    return (
        <div className=" container mx-auto min-h-screen">
                 <h2 className=" text-center text-2xl font-bold py-3">Our Mark Users : {markusers.length}</h2>
                 <div className="flex space-x-3 h-12 border my-3">
                    {
                        markusers.map(user => <li className=" list-none " key={user.id}>{user.name}</li>)
                    }
                 </div>
                 <div className="grid grid-cols-3 gap-6">
                    {
                        allusers.slice(0 , dataLength).map(user => <User key={user.id} user={user} handleMarkUser={handleMarkUser}></User>)
                    }
                 </div>
                 <div className={dataLength === allusers.length ? 'hidden' : ' block'}>
                    <div className="text-center py-4">
                        <button  onClick={()=>SetDataLength(allusers.length)} className="btn btn-success ">See All</button>
                    </div>
                 </div>
        </div>

    );
};

export default Users;

