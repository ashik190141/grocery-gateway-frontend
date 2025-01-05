"use client";
import { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/flash-Sale`, {
          next: {
            revalidate: 30,
          },
        });
        const { data } = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center", pt: 5 }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Super Spring Flash Sale - Grab Your Favorites Now!
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Do not miss out on our Super Spring Flash Sale!
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          Get ready to indulge in amazing deals on a wide range of products.
        </Typography>
      </Box>

      <div className="max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.slice(0, 6).map((product: any) => (
            <div key={product._id}>
              <div className="px-4 py-3 shadow-lg max-w-[450px] font-sans rounded-xl space-y-6 mx-auto bg-white">
                <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                  <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                    <div className="flex items-center">
                      <svg
                        width={30}
                        className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white "
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                      >
                        <g strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                        </g>
                      </svg>
                    </div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                      {product.price} $
                    </button>
                  </div>
                  <Image
                    src={product.image}
                    alt="product"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
                  <h6 className="text-sm md:text-base lg:text-lg">
                    {product.name}
                  </h6>
                  <p className="text-gray-400 text-xs md:text-sm font-semibold">
                    {product.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Link href="/flashSale">
            <Button
              variant="outlined"
              sx={{
                marginTop: "50px",
              }}
            >
              View ALL
            </Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default FlashSale;
