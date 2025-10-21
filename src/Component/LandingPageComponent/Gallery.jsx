import GalleryImage from "./GalleryImage";
import Navbar from "./Navbar";
import Trainer from "./Trainer";
import Footer from "./Footer"
const Gallery = () => {
  return (

    <>
      <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">Our Gallery</h1>
        </div>
      </div>

      <GalleryImage/>

      <Trainer/>

      <Footer></Footer>
    </>
  );
};

export default Gallery;