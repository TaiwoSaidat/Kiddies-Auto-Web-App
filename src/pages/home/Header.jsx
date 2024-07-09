import React from 'react'
import applogo from '../../assets/applogo.png'
import arrowDown from '../../assets/arrowdownblack.png'
import search from '../../assets/searchblack.png'
import account from '../../assets/profileblack.png'
import cart from '../../assets/cartblack.png'
import menu from  '../../assets/menu.png'



const Header = () => {
  return (
    <>
    {/* bg-[#fcfcfc] */}
    <nav className=' header w-full h-28 flex items-center justify-between  py-8 bg-[#fcfcfc] ' >
        <div className="w-[90%] h-12 flex justify-between items-center mx-auto  flex-none order-none self-stretch grow-0 p-0;">
            
                <img src={applogo} alt="" /> 

                <div className="hidden lg:flex flex-row items-end gap-10 w-[414px] h-6 flex-none order-1 grow-0 mx-auto my-0 p-0 ">
                    <div className="flex items-start gap-0.5 w-[103px] h-6 flex-none order-none grow-0 p-0">
                        <p>categories</p>
                        <img src={arrowDown} alt="" />
                    </div>
                    <p>Deals</p>
                    <p>Whats New</p>
                    <p>Delivery</p>
                </div>

                <div className=' flex flex-row items-center gap-10 w-[543px] h-12 flex-none order-2 grow-0 mx-auto my-0 p-0 '>
                <form action="">
                    <label className="hidden input input-bordered rounded-3xl lg:flex items-center gap-2 w-[310px] h-12 bg-[f6f7f8] ">
                        <input
                            type="text"
                            className=" pl-8"
                            placeholder="Search"
                        />
                        <img className="w-4 h-4 " src={search} alt="" />
                    </label>
                </form>
                <div className=' flex gap-1 w-[89px] h-6'>
                    <img src={account} alt="" />
                    <p className=' hidden lg:flex '>Account</p>
                </div>
                <div className=' flex gap-1 w-[89px] h-6'>
                    <a href="./cart">
                        <img src={cart} alt="" />
                        <p className=' hidden lg:flex '>Cart</p>
                    </a>
                    
                </div>
               </div> 
        </div>
        
    </nav>
    </>
  )
}

export default Header
