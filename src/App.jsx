
import { useLoaderData, useParams,  } from 'react-router-dom';
import CoffeeCard from './component/CoffeeCard';

 import { useState } from 'react';

function App() {
  const loadedcoffees=useLoaderData();
// //edit
//   const {brandName}=useParams();

//   const filteredCoffees = brandName?loadedcoffees.filter((coffee) => coffee.brand === brandName)
//   : loadedcoffees;

//   //edit sesh
  
   const[coffees,setCoffees]=useState(loadedcoffees);
  return (
    <>
      
      <div className='m-20'>
     <h1 className='text-6xl text-purple-600'>Hot cold coffee:{coffees.length}</h1>
     
     <div className='grid md:grid-cols-2 gap-4'>


     {/* {filteredCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={filteredCoffees}
              setCoffees={setCoffees}
            />
          ))} */}



     {
      coffees.map(coffee=><CoffeeCard
      key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
      >
      </CoffeeCard>)
     }
     </div>
     </div>
   
    </>
      
   
  )
}

export default App
