
const AddPhone = () => {

    const handleAddPhone = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const details = form.details.value;
        const newPhone = {name, photourl, brand, price, details}
        
        fetch('https://fire-mongo-server.vercel.app/phones', {
            method : "POST",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPhone)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                alert("data inserted successfully")
            }
        })
    }


    return (
        <div className="">
            <div className="container mx-auto min-h-screen py-9 px-[10%]">
                    <div className="w-full md:w-2/4 mx-auto p-6 rounded-md border">
                        <h1 className="text-4xl font-bold py-6 text-center">Add phone</h1>
                        <form onSubmit={handleAddPhone}  className=" space-y-3">
                            <div className="form-control">
                                <input type="text" placeholder="Phone name" name="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder="Photo url" name="photourl" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder="brand" name="brand" className="input input-bordered" required />
                            </div>

                            <div className="  form-control">
                                <input type="number" placeholder="price" name="price" className="input input-bordered " required />
                            </div>
                            <div className="  form-control">
                                <input type="text" placeholder="details" name="details" className="input input-bordered " required />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-secondary">Add Phone</button>
                            </div>
                        </form>

                    </div>
                
            </div>
        </div>
    );
};

export default AddPhone;