"use client";

import { useGetAllCartsQuery } from "@/redux/api/cartApi";
import { loggedInUserInfo } from "@/util/localStorage";
import React from "react";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useOrderProductMutation } from "@/redux/api/orderApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CheckoutPage = () => {
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { data: carts, isLoading } = useGetAllCartsQuery(user);
  // console.log(carts?.data);
  const [orderProceed] = useOrderProductMutation();

  function createData(
    image: string,
    name: string,
    noOfProduct: number,
    price: number
  ) {
    return { image, name, noOfProduct, price };
  }

  const rows = carts?.data?.map(
    (cart: {
      image: string;
      name: string;
      noOfProduct: number;
      price: number;
    }) => createData(cart?.image, cart?.name, cart?.noOfProduct, cart?.price)
  );
  // console.log(rows)

  useEffect(() => {
    const userInfo = loggedInUserInfo();
    setUserRole(userInfo?.role);
    setUser(userInfo?.email);
  }, [userRole]);

  function calculateTotalPrice(data: any) {
    let totalPrice = 0;
    data?.forEach((product: any) => {
      totalPrice += product.price * product.noOfProduct;
    });
    return totalPrice;
  }
  const totalPrice = calculateTotalPrice(carts?.data) + 15;

  const handleCheckout = async () => {
    if (!user) {
      router.push("/login");
    } else {
      const orderData = {
        data: carts?.data,
        email: user,
        totalPrice: totalPrice,
      };
      const res = await orderProceed(orderData).unwrap();
      if (res?.result) {
        Swal.fire({
          title: "Order Successful",
          text: "Successfully Added Your Review",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/dashboard/my-orders");
          }
        });
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-52">
      <div className="mb-10">
        <p className="text-2xl text-orange-600">Grocer Gateway</p>
        <p className="text-2xl">
          Total Cost: {calculateTotalPrice(carts?.data) ?? 0}
        </p>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map(
              (row: {
                image: string;
                name: string;
                noOfProduct: number;
                price: number;
              }) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <Image
                      src={row?.image}
                      alt="product_img"
                      width={70}
                      height={70}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{row?.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.noOfProduct}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.price * row?.noOfProduct}
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-end py-3 text-blue-700">
        * Cash On Delivery
      </div>

      <div className="flex flex-col py-10">
        <div className="flex justify-end py-1 text-xl">
          Product Price: {calculateTotalPrice(carts?.data)}
        </div>
        <div className="flex justify-end py-1 text-xl">Delivery Charge: 15</div>
        <Divider />
        <div className="flex justify-end py-3 text-xl">
          Total Price: {calculateTotalPrice(carts?.data) + 15}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleCheckout}
            className="btn btn-warning uppercase"
          >
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
