"use client"

import logo from '../../assets/156-1563403_pomegranate-grocery-store-pomegranate-logo-removebg-preview.png'
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <div
      className="hero min-h-[400px] mt-20"
      style={{
        backgroundImage: `url('https://fleetfarming.org/wp-content/uploads/2021/02/somi-jaiswal-6DsMsaoFmqY-unsplash-1536x864.jpg')`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-white">
        <div className="max-w-7xl">
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
            <div className="text-start">
              <h2 className="text-2xl text-center font-semibold py-5">
                Our Facilities
              </h2>
              <div className="flex items-start justify-center gap-7">
                <div className="space-y-2 flex flex-col ">
                  <Link href="/flashSale" className="hover:underline">
                    Trending Products
                  </Link>
                  <Link href="/all-Product" className="hover:underline">
                    Categories/Brands
                  </Link>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="border bg-[#BCB382] bg-opacity-80 border-dashed rounded-full h-[300px] flex flex-col items-center justify-center p-8 border-[#D7A747]">
              <div className="flex items-center justify-center gap-1">
                <div>
                  <Image
                    className=""
                    src={logo}
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-3xl mt-3 font-bold">
                  <span className="text-[#09814A]">Grocery </span>Gateway
                </div>
              </div>
              <h2 className="text-2xl font-play font-bold mt-2">
                Established . 2024
              </h2>
            </div>

            <div className="space-y-2">
              <h2 className="font-play text-2xl font-bold">Address Info</h2>
              <p>
                <span className="font-semibold text-[#D7A747]">Phone: </span>
                017003245646
              </p>
              <p>
                <span className="font-semibold text-[#D7A747]">Email: </span>
                info@gmail.com
              </p>
              <p>
                <span className="font-semibold text-[#D7A747]">Location: </span>
                Mirpur 10,House-190 <br />
                Road-02,Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
