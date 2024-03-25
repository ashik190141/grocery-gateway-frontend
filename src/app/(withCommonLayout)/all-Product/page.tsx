"use client";

import React, { Key } from "react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from 'next/image';
import LoadingPage from "@/app/loading";
import Link from 'next/link';

const AllProductHomePage = () => {
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setShow(false);
        setProducts(data.data);
        setRecords(data.data);
      });
  }, []);

  const handleSearch = (e: any) => {
    let searchText = (e.target.value).toLowerCase();
    // console.log(searchText)
    setRecords(
      products.filter(
        (product: {
          rating: Number;
          name: String;
          category: String;
          price: Number;
        }) =>
          product.name.toLowerCase().includes(searchText) ||
          product.rating >= searchText ||
          product.category.toLowerCase().includes(searchText) ||
          product.price <= searchText
      )
    );
  };


  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center pt-20">
        <div className="join w-1/2">
          <input
            onChange={handleSearch}
            autoComplete="off"
            className="input input-bordered join-item w-full"
            id="search"
            placeholder="Enter Your Searching Text"
          />
        </div>
      </div>
      {show && (
        <div>
          <LoadingPage></LoadingPage>
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {records?.map(
            (product: {
              _id: Key;
              image: any;
              price: number;
              rating: number;
              name: String;
              category: String;
            }) => (
              <div key={product._id}>
                <div className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
                  <Image
                    src={product.image}
                    alt="product"
                    width={350}
                    height={190}
                    className="bg-gray-400 rounded-2xl"
                  />
                  {/* Card Heading */}
                  <div className="space-y-2">
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg flex justify-between">
                      <div>{product.name}</div>
                      <div>{product.category}</div>
                    </h2>
                    {/* rating  */}
                    <div className="flex-grow-1 d-flex align-items-center">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(product?.rating || 0)}
                        readOnly
                      />
                      <span className="ms-2"> {product?.rating}</span>
                    </div>
                  </div>
                  {/* Price and action button */}
                  <div className="mt-5 flex justify-between items-center font-medium">
                    <h2 className="md:text-xl text-gray-800">
                      $ {product.price}
                    </h2>
                    <Link href={`/all-Product/${product._id}`}>
                      <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductHomePage;
