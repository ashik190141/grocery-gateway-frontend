"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from 'react';

interface Product {
  _id: string;
  category: string;
  image: string;
  name: string;
  price: number;
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TopCategory = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://grocery-store-backend-six.vercel.app/api/v1/topCategory`,
          {
            next: {
              revalidate: 30,
            },
          }
        );
        const { data } = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(products);
  return (
    <div className="max-w-7xl mx-auto">
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Explore the Exquisite World of Exotic Fruits
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          From Tropical Delights to Rare Finds, Uncover Nature Finest Bounty
          with Our Diverse Selection
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <div className="py-3 shadow-lg font-sans rounded-xl space-y-6 mx-auto bg-white">
                <div className="flex justify-center w-full relative">
                  <div className="flex justify-between items-center left-4 right-10 top-8 absolute">
                    <div className="flex items-center"></div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl z-10">
                      {products[0]?.category}
                    </button>
                  </div>
                  <div className="group overflow-hidden relative">
                    <Image
                      src={products[0]?.image}
                      alt="product"
                      width={600}
                      height={600}
                      className="transform group-hover:scale-110 transition-all duration-300"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-70 transition-opacity duration-300 bg-white/70"
                    >
                      <p className="text-black font-black text-3xl">
                        {products[0]?.name}
                        <br />$ {products[0]?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div className="py-3 shadow-lg font-sans rounded-xl space-y-6 mx-auto bg-white">
                <div className="flex justify-center w-full relative">
                  <div className="flex justify-between items-center left-4 right-10 top-8 absolute">
                    <div className="flex items-center"></div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl z-10">
                      {products[2]?.category}
                    </button>
                  </div>
                  <div className="group overflow-hidden relative">
                    <Image
                      src={products[2]?.image}
                      alt="product"
                      width={600}
                      height={600}
                      className="transform group-hover:scale-110 transition-all duration-300"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-70 transition-opacity duration-300 bg-white/70"
                    >
                      <p className="text-black font-black text-3xl">
                        {products[2]?.name}
                        <br />$ {products[2]?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="py-3 shadow-lg font-sans rounded-xl space-y-6 mx-auto bg-white">
                <div className="flex justify-center w-full relative">
                  <div className="flex justify-between items-center left-4 right-8 top-5 absolute">
                    <div className="flex items-center"></div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl z-10">
                      {products[1]?.category}
                    </button>
                  </div>
                  <div className="group overflow-hidden relative">
                    <Image
                      src={products[1]?.image}
                      alt="product"
                      width={400}
                      height={400}
                      className="transform group-hover:scale-110 transition-all duration-300"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-70 transition-opacity duration-300 bg-white/70"
                    >
                      <p className="text-black font-black text-3xl">
                        {products[1]?.name}
                        <br />$ {products[1]?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="py-3 shadow-lg font-sans rounded-xl space-y-6 mx-auto bg-white">
                <div className="flex justify-center w-full relative">
                  <div className="flex justify-between items-center left-4 right-8 top-5 absolute">
                    <div className="flex items-center"></div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl z-10">
                      {products[5]?.category}
                    </button>
                  </div>
                  <div className="group overflow-hidden relative">
                    <Image
                      src={products[5]?.image}
                      alt="product"
                      width={400}
                      height={400}
                      className="transform group-hover:scale-110 transition-all duration-300"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-70 transition-opacity duration-300 bg-white/70"
                    >
                      <p className="text-black font-black text-3xl">
                        {products[5]?.name}
                        <br />$ {products[5]?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="py-3 shadow-lg font-sans rounded-xl space-y-6 mx-auto bg-white">
                <div className="flex justify-center w-full relative">
                  <div className="flex justify-between items-center left-4 right-8 top-5 absolute">
                    <div className="flex items-center"></div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl z-10">
                      {products[4]?.category}
                    </button>
                  </div>
                  <div className="group overflow-hidden relative">
                    <Image
                      src={products[4]?.image}
                      alt="product"
                      width={400}
                      height={400}
                      className="transform group-hover:scale-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-white/70">
                      <div className="text-black font-black text-3xl">
                        {products[4]?.name}
                        <br />$ {products[4]?.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Link href="/all-Product">
          <Button
            variant="outlined"
            sx={{
              marginTop: "50px",
            }}
          >
            View ALL Product
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default TopCategory;
