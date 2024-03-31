import { useEffect, useState } from "react";
import MyCartDetails from "./MyCartDetails";

const MyCart = () => {

    const [cartCource, setCartCource] = useState([])
    const[nofount, setNofount] = useState(false)

    // for get data from local storage  --------------------------------
    useEffect(()=>{
        const cartCources = JSON.parse(localStorage.getItem('cources'))
        if(cartCources){
            setCartCource(cartCources)
        }
        else{
            setNofount("No Data found")
        }
    },[])

    // event handler for remove all item  --------------------------------
    const handleRemoveAll = () => {
        localStorage.clear();
        setCartCource([])
        setNofount("No Data found")
    }

    // event handler for remove  single item  --------------------------------
    const handeRemove = id => {
        const courceFilter = cartCource.filter(cource => cource.id !== id)
        localStorage.setItem('cources', JSON.stringify(courceFilter))
        setCartCource(courceFilter)
    }

    return (
        <div className=" container mx-auto min-h-screen"> 
            {
                nofount ? <p className=" text-center">{nofount}</p> 
                : <div className="">
                    {
                        cartCource.length > 0 && <button onClick={handleRemoveAll} className=" btn btn-success block  text-white mx-auto">Delete all fevourite</button>
                    }
                    <div className="grid grid-cols-3 gap-6 py-6">
                        {
                            cartCource.map(cource => <MyCartDetails key={cource.id} cource={cource} handeRemove={handeRemove}></MyCartDetails>)
                        }
                    </div>

                </div>
            }
        </div>
    );
};

export default MyCart;