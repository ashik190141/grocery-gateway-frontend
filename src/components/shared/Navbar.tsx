"use client"

import { loggedInUserInfo } from "@/util/localStorage";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import img1 from '../../assets/156-1563403_pomegranate-grocery-store-pomegranate-logo-removebg-preview.png'
import { deleteKeyFromLocalStorage } from '../../util/localStorage';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useGetAllCartsQuery } from "@/redux/api/cartApi";


const Navbar = () => {
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);
  const { data: carts, isLoading } = useGetAllCartsQuery(user);
  // console.log(carts);
  
  useEffect(() => {
    const userInfo = loggedInUserInfo();
    setUserRole(userInfo?.role);
    setUser(userInfo?.email);
  }, [userRole]);

  const handleLogOut = () => {
    setUserRole(null);
    deleteKeyFromLocalStorage();
  }

  const navOptions = (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <li>
        <Typography
          component={Link}
          href="/"
          sx={{
            fontSize: "20px",
          }}
        >
          Home
        </Typography>
      </li>
      <li>
        <Typography
          component={Link}
          href="/all-Product"
          sx={{
            fontSize: "20px",
          }}
        >
          Products
        </Typography>
      </li>
      <li>
        <Typography
          component={Link}
          href="/flashSale"
          sx={{
            fontSize: "20px",
          }}
        >
          Flash Sale
        </Typography>
      </li>
      <li>
        <Typography
          component={Link}
          href="/dashboard/allProduct"
          sx={{
            fontSize: "20px",
          }}
        >
          Dashboard
        </Typography>
      </li>
      <li>
        <Typography
          component={Link}
          href="/checkout"
          sx={{
            fontSize: "20px",
          }}
        >
          <button className="btn">
            <AddShoppingCartIcon></AddShoppingCartIcon>
            <div className="badge badge-secondary">
              {carts?.data?.length || 0}
            </div>
          </button>
        </Typography>
      </li>
      <li>
        {!userRole && (
          <Typography
            component={Link}
            href="/login"
            sx={{
              fontSize: "20px",
            }}
          >
            <button className="btn btn-success">Login</button>
          </Typography>
        )}
        {userRole && (
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            <button onClick={handleLogOut} className="btn btn-error">
              Logout
            </button>
          </Typography>
        )}
      </li>
    </Stack>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-80 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex items-center gap-5 md:ml-5">
          <div>
            <Image
              src={img1}
              alt=""
              className="w-[50px] md:w-[80px] hidden md:block"
            />
          </div>
          <div>
            <p className="uppercase md:text-xl font-bold">Grocer</p>
            <p className="md:text-3xl uppercase text-orange-600">
              Gateway
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        
      </div>
      <div className="navbar-end hidden lg:flex md:gap-4">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
