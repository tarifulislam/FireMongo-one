import { useLoaderData } from "react-router-dom";
import Cource from "./Cource";
import { useState } from "react";

const Cources = () => {
    const cources = useLoaderData()
    const [allCouces, SetAllCouces] = useState(cources);
    const [courceLength, SetCourceLength] = useState(4)
    const [toggle, setToggle] = useState(true)

    const handleToggle =()=>{
        setToggle(!toggle)
        if(toggle){
            SetCourceLength(allCouces.length)
        }else{
            SetCourceLength(4)
        }
    }

    
    return (
        <div className=" container mx-auto min-h-screen"> 
            <h2 className=" text-center text-2xl font-bold py-3">Our All Cources</h2>
            <div className=" grid grid-cols-3 gap-6">
                {
                    allCouces.slice(0, courceLength).map(cource => <Cource key={cource.id} cource={cource}></Cource>)
                }
            </div>
            <div>
                <div className="py-6 text-center">
                    <button onClick={handleToggle} className="btn btn-primary">{toggle? "See all": "See Less"}</button>
                </div>
            </div>
        </div>
    );
};

export default Cources;