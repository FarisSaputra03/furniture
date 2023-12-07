"use client";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { motion } from "framer-motion";
import { RiCustomerService2Fill } from "react-icons/ri";
export default function Select() {
  const listSelect = [
    {
      icon: TbTruckDelivery,
      title: "Free Shipping",
    },
    {
      icon: MdOutlinePayments,
      title: "Safe Payment",
    },
    {
      icon: RiCustomerService2Fill,
      title: "Online Support",
    },
  ];
  return (
    <div>
      {/* mobile */}
      <div className="flex justify-center sm:hidden flex-wrap  text-center">
        {listSelect.map((data: any, index) => (
          <div key={index + 1} className="p-4">
            <div className="p-4 ">
              <div className="border-2 border-yellow-200 px-4 py-6 rounded-lg">
                <div
                  style={{ color: "black" }}
                  className="inline-flex items-center"
                >
                  {<data.icon size="3.5rem" />}
                </div>
                <h2 className="title-font font-medium text-sm text-black">
                  {data.title}
                </h2>
                <p className="leading-relaxed text-xs text-gray-500 font-medium">
                  Get 10% cash back, free shipping, free
                </p>
                <p className="leading-relaxed text-xs text-gray-500 font-medium">
                  returns, and more at 1000+ top retailers!
                </p>
              </div>
            </div>
            {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
           <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <div 
             style={{color:'black'}}
             className="inline-flex items-center">
               <MdOutlinePayments size="3.5rem" />
             </div>
             <h2 className="title-font font-medium text-3xl text-black">
               Safe Payment
             </h2>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">Get 10% cash back, free shipping, free</p>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">returns, and more at 1000+ top retailers!</p>
           </div>
         </div> */}
            {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
           <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <div 
             style={{color:'black'}}
             className="inline-flex items-center">
               <RiCustomerService2Fill size="3.5rem" />
             </div>
             <h2 className="title-font font-medium text-3xl text-gray-900">
               Online Support
             </h2>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">Get 10% cash back, free shipping, free</p>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">returns, and more at 1000+ top retailers!</p>
           </div>
         </div> */}
          </div>
        ))}
      </div>

      {/* desktop */}
      <div className="container hidden sm:flex px-5 py-10 mx-auto justify-center">
        <div className="grid grid-cols-3 md:grid-cols-1">
          <div className="flex flex-wrap justify-center text-center">
            {listSelect.map((data: any, index) => (
              <div key={index + 1} className="p-4">
                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <div className="border-2 border-yellow-200 px-4 py-6 rounded-lg">
                    <div
                      style={{ color: "black" }}
                      className="inline-flex items-center"
                    >
                      {<data.icon size="3.5rem" />}
                    </div>
                    <h2 className="title-font font-medium text-3xl text-black">
                      {data.title}
                    </h2>
                    <p className="leading-relaxed text-xs text-gray-500 font-medium">
                      Get 10% cash back, free shipping, free
                    </p>
                    <p className="leading-relaxed text-xs text-gray-500 font-medium">
                      returns, and more at 1000+ top retailers!
                    </p>
                  </div>
                </motion.div>
                {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
           <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <div 
             style={{color:'black'}}
             className="inline-flex items-center">
               <MdOutlinePayments size="3.5rem" />
             </div>
             <h2 className="title-font font-medium text-3xl text-black">
               Safe Payment
             </h2>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">Get 10% cash back, free shipping, free</p>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">returns, and more at 1000+ top retailers!</p>
           </div>
         </div> */}
                {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
           <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <div 
             style={{color:'black'}}
             className="inline-flex items-center">
               <RiCustomerService2Fill size="3.5rem" />
             </div>
             <h2 className="title-font font-medium text-3xl text-gray-900">
               Online Support
             </h2>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">Get 10% cash back, free shipping, free</p>
             <p className="leading-relaxed text-xs text-gray-500 font-medium">returns, and more at 1000+ top retailers!</p>
           </div>
         </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
