import Navbar from "./Navbar";
import Footer from "./Footer"
import Trainer from "./Trainer";
import HoverImage from "./HoverImage";
import GalleryImage from "./GalleryImage";
import AboutGym from "./AboutGym";
import Feedback from "./Feedback";


const About = () => {
  return (

    <>
      <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">About Us</h1>
        </div>
      </div>


      <AboutGym/>

      <GalleryImage/>
     <Feedback/>
      <Trainer />

      <Footer></Footer>
    </>
  );
};

export default About;