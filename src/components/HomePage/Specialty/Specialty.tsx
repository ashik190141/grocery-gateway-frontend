"use client"

import Image from 'next/image';
import React from 'react';

const Specialty = () => {
    return (
      <div
        className="hero min-h-screen my-20"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1686360126436-7d5f05e3bf35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-7xl">
            <h1 className="mb-5 font text-6xl pb-5 font-black">
              Special Combo Offer
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" border-dotted hidden:border-b-2 lg:border-r-2 border-[#D7A747] ">
                <div className="flex items-center mb-6 mr-5 justify-center gap-9">
                  <div>
                    <div className="relative ">
                      <Image
                        className="rounded-full"
                        width={600}
                        height={600}
                        src="https://plus.unsplash.com/premium_photo-1661722653096-cc1a251de5db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="product_img"
                      />
                      <div className="absolute bottom-0 -right-4">
                        <Image
                          className=" rounded-full"
                          src="https://images.unsplash.com/photo-1627523363384-ac19030e7158?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width={150}
                          height={150}
                          alt="product_img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-start font-play">
                    <p className="font-bold text-3xl text-[#D7A747]">$200</p>
                    <p className="text-2xl font-medium py-1">
                      Apple With Strawberry
                    </p>
                    <p className="">
                      It's So teasty and Delicious for creating our coustomer.
                      So visit our restaurant{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-9">
                  <div>
                    <div className="relative ">
                      <Image
                        className="rounded-full"
                        width={600}
                        height={600}
                        alt="product_img"
                        src="https://images.unsplash.com/photo-1524527388315-7f7a81520e35?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <div className="absolute bottom-0 -right-4">
                        <Image
                          className=" rounded-full"
                          width={150}
                          height={150}
                          alt="product_img"
                          src="https://images.unsplash.com/photo-1602586947950-0212cd0e1770?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-start font-play">
                    <p className="font-bold text-3xl text-[#D7A747]">$300</p>
                    <p className="text-2xl font-medium py-1">
                      Pear With Cantaloupe
                    </p>
                    <p className="">
                      It's So teasty and Delicious for creating our coustomer.
                      So visit our restaurant{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-[20px] gap-9">
                  <div>
                    <div className="relative ">
                      <Image
                        className="rounded-full"
                        width={600}
                        height={600}
                        alt="product_img"
                        src="https://images.unsplash.com/photo-1627523363384-ac19030e7158?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <div className="absolute bottom-0 -right-4">
                        <Image
                          className=" rounded-full"
                          width={150}
                          height={150}
                          alt="product_img"
                          src="https://images.unsplash.com/photo-1569852118044-f57df8b4f0cf?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-start font-play">
                    <p className="font-bold text-3xl text-[#D7A747]">$450</p>
                    <p className="text-2xl font-medium py-1">
                      Tomato With Blackberry
                    </p>
                    <p className="">
                      It's So teasty and Delicious for creating our coustomer.
                      So visit our restaurant{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-9">
                  <div>
                    <div className="relative ">
                      <Image
                        className="rounded-full"
                        width={600}
                        height={600}
                        alt="product_img"
                        src="https://images.unsplash.com/photo-1501777814630-33bc4a3c3ee7?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <div className="absolute bottom-0 -right-4">
                        <Image
                          className=" rounded-full"
                          width={150}
                          height={150}
                          alt="product_img"
                          src="https://images.unsplash.com/photo-1587496679742-bad502958fbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-start font-play">
                    <p className="font-bold text-3xl text-[#D7A747]">$400</p>
                    <p className="text-2xl font-medium py-1">
                      Blueberry With Lemon
                    </p>
                    <p className="">
                      It's So teasty and Delicious for creating our coustomer.
                      So visit our restaurant{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Specialty;