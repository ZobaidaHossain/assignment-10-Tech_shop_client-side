

const Special = ({ isDarkTheme }) => {

  const sectionStyle = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

    return (
        <div className="section bg-base-200" style={sectionStyle}>
      <div className="container mx-auto py-20 gap-[2.5rem]">
        <h2 className="text-3xl font-bold  mb-5">Technology and Electronics Services</h2>
        <p className=" mb-8">
          At Opshory Tech , we offer a wide range of technology and electronics services, partnering with top brands in the industry to provide you with the best products and support. Explore some of the services we offer:
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="brand-item">
              <h3 className="text-xl font-semibold">Apple</h3>
              <p>Apple offers a wide range of cutting-edge devices, including iPhones, iPads, and MacBooks, known for their sleek design and performance.</p>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="brand-item">
              <h3 className="text-xl font-semibold">Samsung</h3>
              <p>Samsung provides a diverse selection of smartphones, tablets, and home appliances, focusing on innovation and user experience.</p>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="brand-item">
              <h3 className="text-xl font-semibold">Sony</h3>
              <p>Sony delivers high-quality audio-visual and gaming products, including TVs, headphones, and PlayStation gaming consoles.</p>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="brand-item">
              <h3 className="text-xl font-semibold">Google</h3>
              <p>Google offers an array of services, including search, cloud computing, and Android OS, known for its search engine and software solutions.</p>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="brand-item">
              <h3 className="text-xl font-semibold">Intel</h3>
              <p>Intel specializes in semiconductor manufacturing and technology, providing processors for computers and data centers.</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
    );
};

export default Special;
