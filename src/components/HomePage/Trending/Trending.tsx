"use client"

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Trending = async() => {
    const res = await fetch(`http://localhost:5000/api/v1/trending`, {
      next: {
        revalidate: 30,
      },
    });
    const { data: products } = await res.json();
    // console.log(products);
    return (
      <div className="max-w-7xl mx-auto pt-20">
        <Box sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Hot Picks: Top Trending Products You Can't Miss
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Discover the hottest picks in town with our top trending products!
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            Stay ahead of the curve and explore a curated selection of must-have
            items that everyone is talking about.
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
                      <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl">
                        {products[0]?.rating}
                      </button>
                    </div>
                    <Image
                      src={products[0]?.image}
                      alt="product"
                      width={600}
                      height={600}
                    />
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
                      <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl">
                        {products[2]?.rating}
                      </button>
                    </div>
                    <Image
                      src={products[2]?.image}
                      alt="product"
                      width={600}
                      height={600}
                    />
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
                      <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl">
                        {products[1]?.rating}
                      </button>
                    </div>
                    <Image
                      src={products[1]?.image}
                      alt="product"
                      width={400}
                      height={400}
                    />
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
                      <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl">
                        {products[5]?.rating}
                      </button>
                    </div>
                    <Image
                      src={products[5]?.image}
                      alt="product"
                      width={400}
                      height={400}
                    />
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
                      <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white text-2xl font-medium px-3 py-1 rounded-xl">
                        {products[4]?.rating}
                      </button>
                    </div>
                    <Image
                      src={products[4]?.image}
                      alt="product"
                      width={400}
                      height={400}
                    />
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

export default Trending;