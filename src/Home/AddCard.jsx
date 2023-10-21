import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const AddCard = () => {
    const loadedUsers=useLoaderData();

    const [users,setUsers]=useState(loadedUsers);

    const handleDelete = id=>{
        console.log('Delete button clicked for ID:', id);
fetch(` https://tech-server-98qmjlf09-zobaidas-projects.vercel.app/cart/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount>0){
        console.log('deleted successfully');
        //remove from ui
        const remainingUsers=users.filter(user=>user._id!==id);
        setUsers(remainingUsers);
    }
})
    }

    return (
        <div>
            <h2>cart:{loadedUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Product Name</th>
        <th>Brand Name</th>
        <th>Product Type</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map(user=><tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.brand}</td>
            <td>{user.type}</td>
            <td>{user.price}</td>
            <td>
            <button onClick={()=>handleDelete(user._id)} className="btn btn-neutral">Delete</button>
            </td>
        </tr>
            )
    }
   
   
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AddCard;