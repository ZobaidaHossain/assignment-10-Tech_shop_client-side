import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import Special from "./Special";
import Gallary from "./Gallary";
import Footer from "./Footer";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
//
import React, { useState } from "react";


const Home = () => {
  //
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  

    const news=useLoaderData();

 // Function to toggle the theme
 const toggleTheme = () => {
  setIsDarkTheme(!isDarkTheme);
};

// Define inline styles for light and dark themes
const lightThemeStyle = {
  backgroundColor: "#fff",
  color: "#000",
};

const darkThemeStyle = {
  backgroundColor: "#333",
  color: "#fff",
};

// Apply the style based on the current theme
const containerStyle = isDarkTheme ? darkThemeStyle : lightThemeStyle;



    console.log(news);
    return (
        <div style={containerStyle}>
           <button  className="btn btn-neutral justify-center items-center ml-20 "onClick={toggleTheme}> Dark Theme</button>
          
          <Banner></Banner>
        
           
           <div className="grid justify-items-center m-5 ">
         <button className="btn btn-primary rounded-none ">OUR Special BRAND </button> 
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 " >
  {/* SERVICE container */}
  {news.map((aNews) => (
    <div key={aNews._id} className="flex ">
      
      <Services news={aNews} />
  
      
    </div>
  ))}
</div>

<div className="grid justify-items-center m-5 ">
         <button className="btn btn-primary rounded-none mb-5">Special SERVICES</button> 
        
<Special isDarkTheme={isDarkTheme} ></Special>
         </div>

         <div className="grid justify-items-center m-5  ">
         <button className="btn btn-primary rounded-none m-5" >Customer Review</button> 
         <Gallary></Gallary>
         </div>

         <div>
  <Footer></Footer>
</div>

        </div>
    );
};

export default Home;