
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourceDetails = () => {
    const [cources, setCources] = useState([]);

    useEffect(() =>{
        fetch('/datas.json')
        .then(res => res.json())
        .then(data => setCources(data))
    },[])
   
    const {id} = useParams()
    const idInt = Number.parseInt(id)

    // find single data from local json data ----------------------
    const findCource = cources.find(cource => cource.id == idInt);

    // for set data in local storage ----------------------
    const handleAddToLocal = () => {
        const addCourceInArray = [];
        const cartCource = JSON.parse(localStorage.getItem('cources'))
        if (!cartCource) {
            addCourceInArray.push(findCource);
            localStorage.setItem('cources', JSON.stringify(addCourceInArray))
        }
        else{
            const isExits = cartCource.find(cource => cource.id === findCource.id) 
            if(!isExits){
                addCourceInArray.push(...cartCource, findCource)
                localStorage.setItem('cources', JSON.stringify(addCourceInArray))
                alert("successfully added")
            }
            else{
                alert("already added")
            }
        }
    }

    return (
   
         <div className=" container mx-auto min-h-screen ">
            <h2 className="py-6 font-bold text-2xl text-center">Explore Our cource</h2>
            <div className="card card-compact w-2/4 mx-auto bg-base-100 shadow-xl">
            <figure><img className=" w-full h-72" src={findCource?.cover} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{findCource?.title}</h2>
                <p>{findCource?.price}</p>
                <p>{findCource?.details}</p>
                <div className="card-actions ">
                <button onClick={handleAddToLocal} className="btn btn-primary">Add to card</button>
                </div>
            </div>
            </div>
         </div>
    );
};

export default CourceDetails;