import { Link } from "react-router-dom";

const Cource = ({cource}) => {
    const {id, cover, title, price, details, duration} = cource || {};

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className=" w-full h-52" src={cover} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{price}</p>
            <div className="card-actions">
                <Link to={`/courcedetails/${id}`}>
                    <button className="btn btn-primary">See Details</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Cource;