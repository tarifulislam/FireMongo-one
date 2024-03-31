
const Banner = () => {
    return (
        
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full relative" />
        <div className=" w-full bg-black h-full  bg-opacity-60 absolute top-0 left-0"></div>

        <div className="absolute left-5 right-5 top-1/2">
            <div className=" text-center">
                <h1 className="text-4xl font-bold text-center text-white inline-block py-2 px-3">Explore Our cource</h1>
            </div>
            <div className="flex justify-between transform -translate-y-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>

        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full relative" />
        <div className=" w-full bg-black h-full  bg-opacity-60 absolute top-0 left-0"></div>
        <div className="absolute left-5 right-5 top-1/2">
             <div className=" text-center">
                <h1 className="text-4xl font-bold text-center  text-white inline-block py-2 px-3">Explore Our cource</h1>
            </div>
            <div className="flex justify-between transform -translate-y-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>

        </div>
    </div> 

    <div id="slide3" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full relative" />
        <div className=" w-full bg-black h-full  bg-opacity-60 absolute top-0 left-0"></div>
        <div className="absolute left-5 right-5 top-1/2">
            <div className=" text-center">
                <h1 className="text-4xl font-bold text-center text-white inline-block py-2 px-3">Explore Our cource</h1>
            </div>
            <div className="flex justify-between transform -translate-y-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div> 

    <div id="slide4" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full relative" />
        <div className=" w-full bg-black h-full  bg-opacity-60 absolute top-0 left-0"></div>
        <div className="absolute left-5 right-5 top-1/2">
        <div className=" text-center">
                <h1 className="text-4xl font-bold text-center  text-white inline-block py-2 px-3">Explore Our cource</h1>
            </div>
            <div className="flex justify-between transform -translate-y-1/2">
               <a href="#slide3" className="btn btn-circle">❮</a> 
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Banner;