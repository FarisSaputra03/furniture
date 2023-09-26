import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
export default function Select() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap justify-center text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div 
              style={{color:'black'}}
              className="inline-flex items-center">
                <TbTruckDelivery size="3.5rem" />
              </div>
              <h2 className="title-font font-medium text-3xl text-black">
                Free Shipping
              </h2>
              <p className="leading-relaxed text-xs text-gray-500 font-medium">Get 10% cash back, free shipping, free</p>
              <p className="leading-relaxed text-xs text-gray-500 font-medium">returns, and more at 1000+ top retailers!</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
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
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
