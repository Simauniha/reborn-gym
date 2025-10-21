import HoverImage from './HoverImage'

function AboutGym() {
  return (
    <>
    <div className="row">
<div className="sol-sm-1"></div>
        <div className="col-sm-5">
          <HoverImage
            src="about.png"
            alt="About"
            className="" // add your own classes here if needed
          />
        </div>
        <div className="col-sm-6">
          <h5 className="about-head"> ABOUT OUR GYM</h5>
          <h1 className="heading1 mb-35">
            SAFE BODY BUILDING PROPER <br /> SOLUTIONS THAT SAVES OUR <br />{" "}
            VALUABLE TIME!
          </h1>
          <p className="para1">
            Brook presents your services with flexible, convenient and cdpose
            layouts.
            <br />
            You can select your favorite layouts & elements for cular ts with
            unlimited
            <br />
            customization possibilities. Pixel-perfect replication of the
            designers is
            <br />
            intended.
          </p>
          <p className="para2">
            Brook presents your services with flexible, convefnient and chient{" "}
            <br /> anipurpose layouts. You can select your favorite layouts.
          </p>
        
            <button className="hi btn nav-last-hover-button  hover-button mt-5">
              <p className="btn-text">BECOME A MEMBER</p>
            </button>
           
           </div>
        
      </div>
    </>
  )
}

export default AboutGym
