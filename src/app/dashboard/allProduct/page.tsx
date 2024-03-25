import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "Product Name", width: 300 },
  { field: "category", headerName: "Category", width: 300 },
  { field: "price", headerName: "Price",type: "number",width: 300 },
  { field: "rating",headerName: "Rating",type: "number",width: 300 }
];

const AllProductPage = async () => {
    const res = await fetch(
      `${process.env.URL}/product`,{
        cache: "no-store",
      }
    );
    const { data } = await res.json();
    // console.log(data);

    return (
      <div className='flex items-center justify-center pt-20'>
        <div className='w-[70%]'>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    );
};

export default AllProductPage;