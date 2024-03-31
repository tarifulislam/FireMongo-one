
const MyCartDetails = ({cource, handeRemove}) => {
    return (
        <div className=" container mx-auto min-h-screen ">
        <div className="card card-compact w-full mx-auto bg-base-100 shadow-xl">
        <figure><img className=" w-full h-72" src={cource?.cover} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{cource?.title}</h2>
            <p>{cource?.price}</p>
            <p>{cource?.details}</p>
            <div className="card-actions ">
            <button onClick={()=>handeRemove(cource.id)} className="btn btn-primary">Remove</button>
            </div>
        </div>
        </div>
     </div>
    );
};

export default MyCartDetails;