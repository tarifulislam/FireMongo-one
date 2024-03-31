
const PhoneCardSingle = ({phone}) => {
    const {name ,brand, price} = phone ;
    return (
        <div className=" w-full p-4 border">
            <h2>{name}</h2>
            <h2>{brand}</h2>
            <h2>{price}</h2>
        </div>
    );
};

export default PhoneCardSingle;