import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Phone = ({phon, phones, setPhones}) => {
    
    const {_id,name, photourl, brand, price, details} = phon || {};
    // console.log(phone);

    const handleDelete = id => {

         Swal.fire({ 
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                                       // start delete process code from here ------------------
                fetch(`https://fire-mongo-server.vercel.app/phones/${id}`, {  // this id is event handler id .
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                         Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                         });
                         const remaining = phones.filter(phone => phone._id !== id) ;
                         setPhones(remaining);
                        }
                    })
                }
            });

      }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className=" w-full h-52" src={photourl} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{brand}</p>
            <p>{price}</p>
            <div className="card-actions">
                <Link to={`/phonedetails/${_id}`}>
                    <button className="btn btn-primary">See Details</button>
                </Link>
                <button onClick={()=> handleDelete(_id)}  className="btn btn-secondary">Delete</button>
            </div>
        </div>
        </div>
    );
};

export default Phone;