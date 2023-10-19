import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee=useLoaderData();
    const {_id,photo,name,brand,type,price,short,rating}=coffee

const handleUpdateCoffee=event=>{
        event.preventDefault();
     
        
        const form=event.target;
        const photo=form.photo.value;
        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.type.value;
        const price=form.price.value;
        const short=form.short.value;
        const rating=form.rating.value;

        const updatedCoffee={photo,name,brand,type,price,short,rating}
        console.log(updatedCoffee);

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       

    }


    return (
        <div>
             <h2>Update product:{name}</h2>
              <form onSubmit={handleUpdateCoffee}> 
                {/* form row */}
                <div className="md: flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Image URL</span>
  </label>
  <label className="input-group">
    <input type="text" name="photo" defaultValue={photo} placeholder="Enter product image" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="name" defaultValue={name} placeholder="Enter Product Name" className="input input-bordered w-full" />
  </label>
</div>
                </div> 
                 {/* Brand name */}
                  <div className="md: flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="brand" defaultValue={brand} placeholder="Enter Brand Name" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Product Type</span>
  </label>
  <label className="input-group">
    <input type="text" name="type" defaultValue={type} placeholder="Enter Product Type" className="input input-bordered w-full" />
  </label>
</div>
                </div> 
                price & short row 
                  <div className="md: flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    <input type="text" name="price" defaultValue={price} placeholder="Enter product Price" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Short Description</span>
  </label>
  <label className="input-group">
    <input type="text" name="short" defaultValue={short} placeholder="Write Short description" className="input input-bordered w-full" />
  </label>
</div>
                </div> 
                      {/* Rating row */}
                       <div className="mb-8">
        

<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
  <label className="input-group">
    <input type="text" name="rating"defaultValue={rating} placeholder="Product Rating" className="input input-bordered w-full" />
  </label>
</div>
                </div> 
 <input className="btn btn-block btn-primary" type="submit" value="Update Product" />
                              
            </form> 
        </div>
    );
};

export default UpdateCoffee;