import React from 'react';
import { IoIosHome } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-wrapper container">
        <div className="about-sec">
          <h3 className='about-heading'>About Us</h3>
          <div className="basket-image">
            <img className="basket-img" src='/images/product/fruit-basket.png' alt='' />
          </div>
          <p className='tag'>Our products are freshly harvested, washed ready <br />for box and finally <span className='color'>[ ... ]</span>
          </p>
        </div>


        <div className="column-section">
          <div className="information">
            <h3 className='about-heading'>Information</h3>
            <ul>
              <li> New Products</li>
              <li>Top Seller</li>
              <li>Our Blog</li>
              <li>About Our Shop</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="column-section">
          <div className="instagram">
            <h3 className='about-heading'>Instagram</h3>
          </div>
        </div>

        <div className="column-section">
          <div className="contact-info">
            <h3 className='about-heading'>Contact Us</h3>
            <div className="info">
              <span className='icon-ho mt-3 pr-5'><IoIosHome size={20} /></span>
              <p>Our Business address is 1063 <br />Freelon Street, San Francisco 0</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="info">
              <span className='icon-ho mt-25 pr-5'><MdPhoneIphone size={17} /></span>
              <p>+020.566.6666</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="info">
              <span className='icon-ho mt-25 pr-5'><MdEmail size={18} /></span>
              <p>support@vtheme.com</p>
            </div>
            <p>For Product Registration and general <br/>inquiries please <span className='contact-span'>contact us</span></p>
          </div>
        </div>
      </div>

      <div className='container'>
        <hr />
      </div>

            <div className='footer-icon container'>
            <div className='footer-ico'>
            <h4>Follow us</h4>
            <div className='first-icon'>
            <span className='fb'><FaFacebookF/></span>
            <span className='twit'><BsTwitter/></span>
            <span className='insta'><IoLogoInstagram/></span>
            <span className='google'><IoLogoGoogleplus/></span>
            <span className='pin'><FaPinterest/></span>
          </div>
        </div>

        <div className='logo-section container'>
        <div className='all-image'>
          <h4>Payment Method</h4>
          <img className="logo-image"src='/images/logo-icon/PayPal.png' alt='' ></img>
          <img className="logo-image"src='/images/logo-icon/mastercard.png' alt='' ></img>
          <img className="logo-image"src='/images/logo-icon/Cirrus.png' alt='' ></img>
          <img className="logo-image"src='/images/logo-icon/Maestro.png' alt='' ></img>
        </div>
        </div>
      </div>

      <footer className='end-sec'>
      <div className='footer-sec container'>
      <p>&copy; 2017 Fruit Store - All Rights Reserved.Design by: <span className='theme'>7uptheme.com</span></p>
      <div className='policy-sec'>
      <p className='condition'>Privacy Policy</p>
      <p className='condition'>Terms and Conditions</p>
      </div>
      </div>
    </footer>

      </div>
  );
};

export default AboutUs;
