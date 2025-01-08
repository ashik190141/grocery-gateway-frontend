"use client";

import { useGetAllCartsQuery, useUpdateCartsMutation } from "@/redux/api/cartApi";
import { loggedInUserInfo } from "@/util/localStorage";
import React from "react";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
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
    price: number,
    id: string
  ) {
    return { image, name, noOfProduct, price, id };
  }

  const rows = carts?.data?.map(
    (cart: {
      image: string;
      name: string;
      noOfProduct: number;
      price: number;
      id: string;
    }) =>
      createData(
        cart?.image,
        cart?.name,
        cart?.noOfProduct,
        cart?.price,
        cart?.id
      )
  );
  console.log(carts?.data)

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
        data: carts?.data?.map((item: { price: number; noOfProduct: number }) => ({
          ...item,
          price: (item.price * item.noOfProduct) + 15,
        })),
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

  const [updateCart] = useUpdateCartsMutation();

  const handleUpdateCart = async (id: string, inc: number) => {
    const updateProductInfo = {
      email: user,
      id: id,
      inc: inc,
    };
    const res = await updateCart(updateProductInfo).unwrap();
    if (res.result) {
      Swal.fire({
        title: inc < 1 ? "Remove into Cart" : "Added into Cart",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Failed",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-52">
      <div className="mb-10 flex justify-between">
        <p className="text-2xl text-orange-600">Grocer Gateway</p>
        <p className="text-2xl">
          Total Product Price: {calculateTotalPrice(carts?.data) ?? 0}
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
                id: string;
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
                  <StyledTableCell align="center">
                    <span className="text-[18px]">{row?.name}</span>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div>
                      <button
                        onClick={() => handleUpdateCart(row.id, -1)}
                        className="px-2 py-1 border border-black border-dashed rounded-md"
                      >
                        <FaMinus />
                      </button>{" "}
                      <span className="mx-5 text-[18px]">
                        {row?.noOfProduct}{" "}
                      </span>
                      <button
                        onClick={() => handleUpdateCart(row.id, 1)}
                        className="px-2 py-1 border border-black border-dashed rounded-md"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span className="text-[18px]">
                      {row?.price * row?.noOfProduct}
                    </span>
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
      <Divider className="bg-black mt-5 mb-5" />
      <div className="flex flex-col">
        {/* <div className="flex justify-end py-1 text-xl">
          Product Price: {calculateTotalPrice(carts?.data)}
        </div> */}
        <div className="flex justify-end py-1 text-xl">Delivery Charge: 15</div>
        <Divider className="bg-black mt-5" />
        <div className="flex justify-between mt-10">
          <div className="flex justify-end py-3 text-xl">
            Total Cost: {calculateTotalPrice(carts?.data) + 15}
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
    </div>
  );
};

export default CheckoutPage;
