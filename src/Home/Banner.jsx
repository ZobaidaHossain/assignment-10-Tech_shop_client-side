import banner from "./../assets/banner.png"

const Banner = () => {
    return (
        //
        <div className="hero h-52 lg:min-h-screen" style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-md">
                <h1 className="mb-5 text-xl lg:text-5xl  font-bold" style={{ color: 'black', whiteSpace: 'nowrap' }}>Welcome to Opshory Tech</h1>
                <p className="mb-5 text-black">Explore the Latest Gadgets, Appliances, and Electrical Accessories at Unbeatable Prices</p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
          
    );
};

export default Banner;