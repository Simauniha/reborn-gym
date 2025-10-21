import AboutGym from "./AboutGym";
import Feedback from "./Feedback";
import Footer from "./Footer"
import GalleryImage from "./GalleryImage";
import HoverImage from './HoverImage'
import Trainer from "./Trainer";
import Schedulelist from "./Schedulelist";
const Home1 = () => {
  return (
    <>

      <AboutGym/>

      <GalleryImage />

      {/* <div className="row">
        <div className="col-sm-6 about-img6">
          <HoverImage src="/images/about2.png" alt="" />
        </div>
        <div className="col-sm-6">
          <h5 className="hero-section">CLIENT FEEDBACK</h5>
          <h1 className="hero-heading">
            WHAT OUR CLIENT THINK
            <br /> ABOUT YOUR GYM
          </h1>
          <p className="para3">
            Brook presents your services with flexible, convenient and cdpose
            <br /> layouts.You can select your favorite layouts & elements for
            cular ts with <br />
            unlimited customization possibilities. Pixel-perfect replication of
            the <br />
            designers is intended.
          </p>
          <h5 className="hero-caption">JOHN SMITH</h5>
          <h6 className="hero-caption2">Gym Trainer</h6>
        </div>
      </div> */}

      <Feedback/>

    

      <Trainer />
        <Schedulelist/>

      <Footer></Footer>
    </>
  );
};

export default Home1;
