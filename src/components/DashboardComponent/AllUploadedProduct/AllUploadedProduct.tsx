"use client";

import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteProductsMutation,
  useGetAllProductsQuery,
} from "@/redux/api/productApi";
import LoadingPage from "@/app/loading";
import Swal from "sweetalert2";

// 'https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const AllUploadedProduct = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);

  const [deleteProduct] = useDeleteProductsMutation();

  const handleDelete = async (id: any) => {
    // console.log(id);
    const res = await deleteProduct(id).unwrap();
    if (res?.result) {
      Swal.fire({
        title: "Delete Product Successfully",
        confirmButtonText: "Ok",
      });
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Product Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "price", headerName: "Price", type: "number", flex: 1 },
    { field: "rating", headerName: "Rating", type: "number", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Box>
              <IconButton
                onClick={() => handleDelete(row._id)}
                aria-label="delete"
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Box>
            <Box>
              <Link href={`/dashboard/allProduct/edit/${row._id}`}>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
              </Link>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <div className="flex items-center justify-center pt-20">
      {!isLoading ? (
        <div className="w-[70%]">
          <DataGrid
            rows={products?.data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      ) : (
        <LoadingPage></LoadingPage>
      )}
    </div>
  );
};

export default AllUploadedProduct;
