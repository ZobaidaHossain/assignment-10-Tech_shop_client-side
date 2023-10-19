
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleProduct=event=>{
        event.preventDefault();
        
        const form=event.target;
        const photo=form.photo.value;
        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.type.value;
        const price=form.price.value;
        const short=form.short.value;
        const rating=form.rating.value;

        const newCoffee={photo,name,brand,type,price,short,rating}
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
        
        
    }
    return (
        <div className="bg-cyan-100 p-24">
            <h2 className="text-3xl font-extrabold">Add a product</h2>
            <form onSubmit={handleProduct}>
                {/* form row */}
                <div className="md: flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Image URL</span>
  </label>
  <label className="input-group">
    <input type="text" name="photo" placeholder="Enter product image" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
  <label className="input-group">
    <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full" />
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
    <input type="text" name="brand" placeholder="Enter Brand Name" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Product Type</span>
  </label>
  <label className="input-group">
    <input type="text" name="type" placeholder="Enter Product Type" className="input input-bordered w-full" />
  </label>
</div>
                </div>
                 {/* price & short row */}
                 <div className="md: flex">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    <input type="text" name="price" placeholder="Enter product Price" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Short Description</span>
  </label>
  <label className="input-group">
    <input type="text" name="short" placeholder="Write Short description" className="input input-bordered w-full" />
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
    <input type="text" name="rating" placeholder="Product Rating" className="input input-bordered w-full" />
  </label>
</div>
                </div>
<input className="btn btn-block btn-primary" type="submit" value="Add Product" />
                              
            </form>
        </div>
    );
};

export default AddCoffee;