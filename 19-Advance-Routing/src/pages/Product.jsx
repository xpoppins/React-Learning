import React from 'react';
import { Link, Outlet} from 'react-router-dom';

const Product = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans px-6 py-50">
      <div className="max-w-7xl mx-auto pt-3">

      <div className="justify-center items-center gap-10 flex flex-row mb-5 ">
        <Link to="/product/mens" className=" hover:bg-green-600 mb-4 inline-block  font-semibold text-xl px-5 py-3 text-white rounded-md bg-green-700 "> Mens Collection</Link>
        <Link to="/product/womens" className=" hover:bg-green-600 mb-4 inline-block   font-semibold text-xl px-5 py-3 text-white rounded-md bg-green-700"> Womens Collection</Link>
        <Link to="/product/kids" className=" hover:bg-green-600 mb-4 inline-block   font-semibold text-xl px-5 py-3 text-white rounded-md bg-green-700"> Kids Collection</Link>
      </div>
      <Outlet/>
      


        
        {/* Header Skeleton */}
        <div className="pb-4 border-b border-gray-600 flex items-center mb-8">
          <div className="w-8 h-8 mr-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="w-48 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>
        
        {/* Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Profile & Mini Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center p-4 border border-gray-600 rounded-xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
              <div className="ml-4 flex-1">
                <div className="w-32 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer mb-2 rounded"></div>
                <div className="w-24 h-3.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
              </div>
            </div>

            {/* List Skeletons */}
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex p-3 border border-gray-600 rounded-xl items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer mr-3"></div>
                  <div className="flex-1">
                    <div className="w-3/4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer mb-1.5 rounded"></div>
                    <div className="w-1/2 h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Media / Preview Card */}
          <div className="lg:col-span-2 border border-gray-600 p-6 rounded-xl shadow-sm">
            <div className="w-full h-80 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer mb-4"></div>
            <div className="w-1/2 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer mb-3 rounded"></div>
            <div className="w-full h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer mb-2 rounded"></div>
            <div className="w-5/6 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Product;