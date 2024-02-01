import React from 'react'

const Service = () => {
  return (
    <div className="service mt-20">
        <div className="service-header container flex justify-between">
            <div className="circle">
                <img className="pic" src="/images/service-icon/delivery.png" alt=''></img>
                <h4 className="heading">Free Delivery</h4>
                <p className='p-heading'>from $50</p>
            </div>
            <div className="circle">
                <img className="pic" src='/images/service-icon/customer.png' alt=''></img>
                <h4 className="heading">99 % Customer</h4>
                <p className='p-heading'>Feedbacks</p>
            </div>
            <div className="circle">
                <img className="pic" src='/images/service-icon/days.png' alt=''></img>
                <h4 className="heading">S 365 Days</h4>
                <p className='p-heading'>for free return</p>
            </div>
            <div className="circle">
                <img className="pic" src='/images/service-icon/payment.png' alt=''></img>
                <h4 className="heading">Payment</h4>
                <p className='p-heading'>Secure System</p>
            </div>
            <div className="circle">
                <img className="pic" src='/images/service-icon/best.png' alt=''></img>
                <h4 className="heading">Only Best</h4>
                <p className='p-heading'>Brands</p>
            </div>
        </div>
    </div>
  )
}

export default Service
