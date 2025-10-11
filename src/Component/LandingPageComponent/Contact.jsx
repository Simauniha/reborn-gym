import React from 'react';
import Navbar from "./Navbar";
 import { TfiHome } from "react-icons/tfi";
 import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
 import { TfiEmail } from "react-icons/tfi";
 import Footer from "./footer"
const Contact = () => {
  return (
    <>
    
  <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">Conatct Us</h1>
        </div>
      </div>

      <div className="row">
        {/* Google Map */}
        <div className="col-lg-6">
          <iframe
            className=" map "
            height={350}
            width={500}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.406113621394!2d80.96495617527198!3d26.92233697664137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995798feec906d%3A0x3b98acddeab1bf98!2z4KSt4KS14KWN4KSvIOCkl-CksOCljeCksuCljeCkuCDgpLngpYngpLjgpY3gpJ_gpLI!5e0!3m2!1shi!2sin!4v1758375591842!5m2!1shi!2sin"
          />
        </div>
        {/* Contact Form */}
        <div className=" col-lg-6">
          <form>
            <div className="mb-3">
              <textarea
                className=" form form-control"
                rows={4}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            <div className="row ">
              <div className=" form col-md-6 mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className=" form2 mb-3">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <button type="submit" className=" button ">
              Send
            </button>
            <div className='d-flex address-box'>
             <div >
           <h3 className='address' >Buttonwood, California</h3>
            <p className='address2'>Rosemead, CA 91770</p>
          <TfiHome size={30} className='home-icon' />
          </div>
          
          <div>

            <h3 className='address'>+1 253 565 2365</h3>
            <p className='address2'>Mon to Fri 9am to 6pm</p>
            <HiOutlineDevicePhoneMobile size={35} className='phone-icon'  />
           
           
          </div>
          <div>
            <h3 className='address'>support@colorlib.com</h3>
            <p className='address2'>Send us your query anytime!</p>
            <TfiEmail size={30} className='email-icon'  />
          </div>
          </div>
          </form>
        </div>
      </div>
     
<Footer/>

    </>
  );
};

export default Contact;
