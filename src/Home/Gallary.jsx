import img1 from './../assets/member1.png';
import img2 from './../assets/member2.png';
import img3 from './../assets/member3.png';
import img4 from './../assets/member4.png';

const Gallary = ({ isDarkTheme }) => {
  const sectionStyle = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

    return (
        <div className="section bg-base-200" style={sectionStyle}>
  <div className="container mx-auto py-10 ">
    <h2 className="text-3xl font-bold  mb-5">Customer Reviews</h2>
    <p className=" mb-8">
      Hear what our valued customers have to say about their experiences with TechPower Electronics:
    </p>
    <div className="flex flex-wrap gap-[6.5rem]">
      <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
        <div className="review-item">
          <img src={img1} alt="John Doe" className="reviewer-image" />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p>TechPower Electronics has provided me with top-notch customer service and high-quality products. I highly recommend them</p>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
        <div className="review-item">
          <img src={img2} alt="Jane Smith" className="reviewer-image" />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p>I have been a loyal customer of TechPower for years. Their dedication to innovation and customer satisfaction is truly impressive</p>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
        <div className="review-item">
          <img src={img3} alt="Robert Johnson" className="reviewer-image" />
          <h3 className="text-xl font-semibold">Robert Johnson</h3>
          <p>TechPower Electronics consistently delivers on their promises. I trust them for all my tech needs</p>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
        <div className="review-item">
          <img src={img4} alt="Emily Davis" className="reviewer-image" />
          <h3 className="text-xl font-semibold">Emily Davis</h3>
          <p>The team at TechPower is knowledgeable and friendly. They make every purchase and service experience enjoyable</p>
        </div>
      </div>
     
    </div>
  </div>
</div>

    );
};

export default Gallary;