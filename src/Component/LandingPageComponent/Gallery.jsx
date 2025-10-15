import Navbar from "./Navbar";
import Footer from "./footer"
const Gallery = ()=>{
  return (

    <>
      <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">Our Gallery</h1>
        </div>
      </div>

      

      <Footer></Footer>
    </>
  );
};

export default Gallery;