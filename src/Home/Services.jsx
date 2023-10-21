import { Link } from "react-router-dom";


const Services = ({news}) => {
    const {id,brand_name,brand_image}=news;

    
    return (
      //edit
      <Link to={`/addCoffee/${brand_name}`}>
        <div className="card  shadow-xl w-96  mb-16 border-b-6">
        <figure> <img src={brand_image} className="w-[30rem] h-[11rem] object-cover" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
         
          
        </div>
      </div>
      </Link>
     
    );
};

export default Services;