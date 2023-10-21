import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import 'sweetalert2/dist/sweetalert2.min.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const DetailsCard = ({coffee}) => {
 const {_id,photo,name,brand,type,price,short,rating}=coffee

 const handleAddToCart = () => {
  const dataa = {
    _id,
    photo,
    name,
    brand,
    type,
    price,
    short,
    rating,
  };

  fetch(' https://tech-server-98qmjlf09-zobaidas-projects.vercel.app/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataa),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      //  //toast
      //  toast.success("Register successful", {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // });

      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'cart added successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
      }

    })
    .catch((error) => {
      console.error('Error adding product to the cart:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while adding the product to the cart',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
};


    


    return (
      
        <div className="card lg:card-side bg-base-100 w-[40rem] shadow-xl">
        <figure><img src={photo} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Product Name: {name}</h2>
          <h2 className="card-title">Brand Name: {brand}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Description: {short}</p>
          <div className="card-actions justify-end">
            
          <button  className="btn" onClick={handleAddToCart}>
  Add to Cart
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
          </div>
        </div>
      </div>
     
     
    );
};

export default DetailsCard;

