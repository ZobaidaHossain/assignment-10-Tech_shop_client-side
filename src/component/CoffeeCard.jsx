import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {
const {_id,photo,name,brand,type,price,short,rating}=coffee

const handleDelete = _id=>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(` https://tech-server-98qmjlf09-zobaidas-projects.vercel.app/coffee/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire(
                       'Deleted!',
                     'Your file has been deleted.',
                      'success'
                      )
                      const remaining=coffees.filter(cof=>cof._id !==_id);
                      setCoffees(remaining);
            }
        })
        }
      })
}

    return (
        <div className="card card-side bg-base-100 shadow-xl m-4">
          <figure><img className="w-full h-[11rem]" src={photo} alt="Movie"/></figure>
  {/* <figure><img className="w-[21.25rem] h-[11rem]" src={photo} alt="Movie"/></figure> */}
  <div className=" flex justify-between w-1/2 p-4">
   <div>
   <h2 className="card-title">Name:{name}</h2>
    <p>Brand Name: {brand}</p>
    <p>Type: {type}</p>
    <p>Price: {price}</p>
    <p>Short description: {short}</p>
    <p>Rating: {rating}</p>
   </div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-4">
      <Link to={`/addCoffee/details/${_id}`}>
      <button className="btn ">Details</button>
      </Link>
  
   <Link to={`updateCoffee/${_id}`}>
  <button className="btn">Update</button>
   </Link>
  
  <button 
onClick={()=>handleDelete(_id)}
  className="btn bg-red">Delete</button>

</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;