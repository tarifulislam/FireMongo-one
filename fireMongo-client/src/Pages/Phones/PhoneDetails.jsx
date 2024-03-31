
import { Link, useLoaderData } from 'react-router-dom';
const PhoneDetails = () => {
    const phone = useLoaderData();
    const {_id,name, photourl, brand, price, details} = phone || {};

    const phoneCart = {name, photourl, brand, price, details}

    const handleCardPhone = () => {
        fetch('https://fire-mongo-server.vercel.app/cardphones', {
            method : "POST",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(phoneCart)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("data inserted successfully")
            }
        })
        
    }

    return (
        <div className=" container mx-auto min-h-screen ">
        <h2 className="py-6 font-bold text-2xl text-center">Explore Our Phone</h2>
        <div className="card card-compact w-2/4 mx-auto bg-base-100 shadow-xl">
        <figure><img className=" w-full h-72" src={photourl} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{brand}</p>
            <p>{price}</p>
            <p>{details}</p>
            <div className="card-actions ">

            <button onClick={handleCardPhone}  className="btn btn-primary">Add to card</button>
           
            <Link to={`/updatephone/${_id}`}>
                <button  className="btn btn-success">Update</button>
            </Link >
            </div>
        </div>
        </div>
     </div>
    );
};

export default PhoneDetails;