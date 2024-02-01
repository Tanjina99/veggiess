import React from 'react';
import { FaTag } from 'react-icons/fa6';
import { GoClock } from "react-icons/go";

const StoreConcious = () => {
  return (
    <div className='storeConcious2-container container'>
      <div className='wrapper'>
        <div className="left">
          <div className='top'>
            <div className='box first-box'>
              <div className='date-sec'>
                <p><GoClock />20 February, 2021</p>
              </div>
              <div className='title'>
                <h4>Strategy for Norway's Peion Fun Global</h4>
              </div>
            </div>

            <div className='box second-box'>
              <div className="date-sec">
                <p><GoClock />20 February, 2021</p>
              </div>
              <div className='title'>
                <h4>Strategy for Norway's Peion Fun Global</h4>
              </div>
            </div>
          </div>

          <div className='bottom'>
            <div className='box first-box'>
              <div className="date-sec">
                <p><GoClock /> 20 February, 2021</p>
              </div>
              <div className='title'>
                <h4>Strategy for Norway's Peion Fun Global</h4>
              </div>
            </div>

            <div className='box second-box'>
              <div className="date-sec">
                <p><GoClock />20 February, 2021</p>
              </div>
              <div className='title'>
                <h4>Strategy for Norway's Peion Fun Global</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <small>&#9900; &#9900; &#9900; Fresh From Our Farm</small>
          <h1 className="main-heading">Trusted Organic Food <br /> Store Conscious</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolorem nisi laudantium officiis dolore quod odit esse. Maxime amet officia, ut doloremque harum dignissimos libero !</p>
          <div className="list-sections">
            <ul>
              <li className='flex align-center flex-gap-10'>
                <span><FaTag color='#7CC000' size={16} /></span>
                <p>Fruits</p>
              </li>
              <li className='flex align-center flex-gap-10'>
                <span><FaTag color='#7CC000' size={16} /></span>
                <p>Vegetables</p>
              </li>
              <li className='flex align-center flex-gap-10'>
                <span><FaTag color='#7CC000' size={16} /></span>
                <p>Juices</p>
              </li>
              <li className='flex align-center flex-gap-10'>
                <span><FaTag color='#7CC000' size={16} /></span>
                <p>Dried</p>
              </li>
              <li className='flex align-center flex-gap-10'>
                <span><FaTag color='#7CC000' size={16} /></span>
                <p>Breads</p>
              </li>
            </ul>
            <div className="list-img">
              <img className="orange-img" src='/images/food-store/fruit3.png' alt='orange image' />
            </div>
          </div>

          <button className='primary-btn mt-20'>Subscribe &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default StoreConcious;