import HoverImage from './HoverImage'

function Feedback() {
  return (
    <>
      <div className="row mb-5 mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 d-flex">
          <div>
            <img src="/images/about2.png" alt="" />
          </div>
          <div>
            <h5 className="about-head">CLIENT FEEDBACK</h5>
            <h1 className="heading1 mb-35">
              WHAT OUR CLIENT THINK
              <br /> ABOUT YOUR GYM
            </h1>
            <p className="para2">
              Brook presents your services with flexible, convenient and cdpose
              <br /> layouts.You can select your favorite layouts & elements for
              cular ts with <br />
              unlimited customization possibilities. Pixel-perfect replication of
              the <br />
              designers is intended.
            </p>
            <div><img src="qutaion.png" className="qutaion-img" />  </div>

            <h5 className="hero-caption">JOHN SMITH</h5>
            <h6 className="hero-caption2">Gym Trainer</h6>


          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  )
}

export default Feedback
