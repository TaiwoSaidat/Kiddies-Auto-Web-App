import React from 'react'
import { Link } from 'react-router-dom'
import applogo from '../../assets/applogo.png'
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <>
    <footer className="footer bg-[#ffffff] text-[#797979] font-semibold p-10">
      <div className="lg:col-span-1">
              <img src={applogo} alt="" />
              <p className=" my-4 text-base text-[#797979] ">
                Discover the ultimate in kids' luxury automobiles.
              </p>
              <div className="flex justify-between">
                <img src={fb} alt="facebook link" className=" mx-2 " />
                <img src={ig} alt="instagram link" className=" mx-2 " />
                <img src={twitter} alt="twitter link" className="mx-2 " />
                <img src={linkedin} alt="linkedin link" className="mx-2 " />
              </div>

              
      </div>
      <nav>
        <h6 className="footer-title font-[800] text-[#131313] ">Useful Links</h6>
        <Link>
          <p className="link link-hover" to='/cart'>Delivery</p>
        </Link>
        <Link>
          <p className="link link-hover" to='/cart'>Account</p>
        </Link>
        <Link>
          <p className="link link-hover" to='/cart'>Cart</p>
        </Link>
        <Link>
          <p className="link link-hover" to='/cart'>Products</p>
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title font-[800] text-[#131313] ">Category</h6>
        <Link>
          <p className="link link-hover" to='/cart'>Compatible</p>
        </Link>
        <Link>
          <p className="link link-hover" to='/cart'>Jeep</p>
        </Link>
        <Link>
          <p className="link link-hover" to='/cart'>\motorbike</p>
        </Link>
        <Link>
          <p className="link link-hover" to='/cart'>Bicycle</p>
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title font-[800] text-[#131313] ">Contact Us</h6>
        <a className="link link-hover">25marina street, Lagos island</a>
        <a className="link link-hover">Email-Kiddiesauto@gmail.com</a>
        <a className="link link-hover">Whatsapp- +234 456 753 8765</a>
      </nav>
    </footer>
    

    </>
  )
}

export default Footer
