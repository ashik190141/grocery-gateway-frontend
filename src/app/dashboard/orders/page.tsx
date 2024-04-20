"use client"

import { useDeliveredProductMutation, useGetAllOrderQuery } from '@/redux/api/orderApi';
import React from 'react';
import LoadingPage from '@/app/loading';
import { dateFormatter } from '@/util/DateFormatter';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
import Swal from 'sweetalert2';

const OrderPage = () => {
    const { data: orders, isLoading } = useGetAllOrderQuery(undefined);
    console.log(orders);

    const [statusUpdate] = useDeliveredProductMutation();
    const handleDelivered = async(idInfo: any) => {
        const data = {
          id: idInfo.id,
          productId: idInfo.productId,
        };
        const res = await statusUpdate(data).unwrap();
        if (res?.result) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "product is delivered",
              showConfirmButton: false,
              timer: 1500,
            });
        }
    }
    return (
      <div>
        <h1 className="text-xl py-2 pb-5">Orders</h1>
        <div>
          {!isLoading ? (
            <div>
              {orders?.data?.map((order: any) => (
                <div key="501">
                  <p className="py-2">
                    Order Date: {dateFormatter(order?.createdAt)}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-7">
                    {order?.data?.map((data: any) => (
                      <Card sx={{ maxWidth: 345 }} key={data?.id}>
                        <CardMedia
                          sx={{ height: 140 }}
                          image={data?.image}
                          title="product_img"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {data?.name}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {order?.email}
                          </Typography>
                          <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between"
                          }}>
                            <Typography variant="body2" color="text.secondary">
                              $ {data?.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {data?.status}
                            </Typography>
                          </Box>
                        </CardContent>
                        <CardActions>
                          <Button onClick={()=>handleDelivered({id:order?._id,productId:data?._id})} size="small">Delivered</Button>
                        </CardActions>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <LoadingPage></LoadingPage>
            </div>
          )}
        </div>
      </div>
    );
};

export default OrderPage;