import Link from 'next/link';
import React from 'react';

const AwesomeProduct = () => {
    return (
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div
            className="hero min-h-[300px] "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1518390643573-66f352c5492e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-left text-neutral-content">
              <div className="max-w-sm">
                <h1 className="mb-5 text-3xl font-bold">
                  Get Every Vegetables You Need
                </h1>
                <Link
                  href="/all-Product"
                  className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-semibold p-1 rounded-full hover:text-white duration-300 relative group"
                >
                  <span className="px-2 text-xs absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div
            className="hero min-h-[300px] "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493174221118-fc9fb83deec5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-left text-black ">
              <div className="max-w-sm">
                <h1 className="mb-5 text-3xl font-bold">
                  Get Every Vegetables You Need
                </h1>
                <Link
                  href="/all-Product"
                  className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-semibold p-1 rounded-full hover:text-white duration-300 relative group"
                >
                  <span className="text-xs absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div
            className="hero min-h-[300px] "
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1708971732799-649f5526ad73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-left text-neutral-content">
              <div className="max-w-sm">
                <h1 className="mb-5 text-3xl font-bold">
                  Get Every Vegetables You Need
                </h1>
                <Link
                  href="/all-Product"
                  className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-semibold p-1 rounded-full hover:text-white duration-300 relative group"
                >
                  <span className="text-xs absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AwesomeProduct;