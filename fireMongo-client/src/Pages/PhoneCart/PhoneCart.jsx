import { useLoaderData } from "react-router-dom";
import PhoneCardSingle from "./PhoneCardSingle";

const PhoneCart = () => {
    const phoneCard = useLoaderData()
    return (
        <div className=" container mx-auto min-h-screen">
            <h2 className=" text-center font-bold text-2xl py-3">All card Phone from mondo db</h2>
            <div className=" grid grid-cols-3 gap-6">
                {
                    phoneCard.map(phone => <PhoneCardSingle key={phone._id} phone={phone}></PhoneCardSingle>)
                }
            </div>
        </div>
    );
};

export default PhoneCart;