import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";
import { useState } from "react";

const Phones = () => {
    const lodedPhones = useLoaderData()
    const [phones, setPhones] = useState(lodedPhones)

    return (
        <div className=" container mx-auto min-h-screen"> 
           <h2 className="font-bold  text-2xl text-center py-4">All Phones</h2>
            <div className=" grid grid-cols-3 gap-6">
                {
                   phones.map(phon => <Phone key={phon._id} phon={phon} phones={phones} setPhones={setPhones}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;