"use client";

import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Product {
  rating: number;
  image: string;
}

const Trending = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/trending`, {
          next: {
            revalidate: 30,
          },
        });
        const { data: fetchedProducts } = await res.json();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      }
    };

    fetchTrendingProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-20">
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Hot Picks: Top Trending Products You Can&apos;t Miss
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Discover the hottest picks in town with our top trending products!
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          Stay ahead of the curve and explore a curated selection of must-have
          items that everyone is talking about.
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {products.map((product: Product, index: number) => (
            <Grid item xs={12} md={4} key={index}>
              <Item>
                <div className="py-3 shadow-lg font-sans rounded-xl space-y-6 mx-auto bg-white">
                  <div className="flex justify-center w-full relative">
                    <div className="flex justify-between items-center left-4 right-8 top-5 absolute">
                      <div className="flex items-center"></div>
                      <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl">
                        {product.rating}
                      </button>
                    </div>
                    <Image
                      src={product.image}
                      alt="product"
                      width={400}
                      height={400}
                      className="h-[300px]"
                    />
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
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

export default Trending;
