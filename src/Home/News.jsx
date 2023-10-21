import { useParams } from "react-router-dom";



const News = () => {
    const { id,brand_name,brand_image} = useParams();
    const decodedImageUrl = decodeURIComponent(brand_image);
    return (

//         <div className="card w-96 bg-base-100 shadow-xl">
//   <figure className="px-10 pt-10 w-9">
//     <img src={decodedImageUrl} alt="Shoes" className="rounded-xl max-w-sm" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Brand Name: {brand_name}</h2>

    
//   </div>
// </div>


    //     <div className="hero min-h-screen bg-base-200">
    //     <div className="hero-content flex-col lg:flex-row">
    //       <img src={decodedImageUrl}className="rounded-lg shadow-2xl" />
    //       <div>
    //         <h1 className="text-5xl font-bold">Event: {brand_name}</h1>
            
    //       </div>
    //     </div>
    //   </div>


    <div className="hero  bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src={decodedImageUrl} className="rounded-lg shadow-2xl" style={{ maxWidth: '50%' }} />
      <div>
        <h1 className="text-5xl font-bold">Event: {brand_name}</h1>
      </div>
    </div>
  </div>
  


    );
};

export default News;