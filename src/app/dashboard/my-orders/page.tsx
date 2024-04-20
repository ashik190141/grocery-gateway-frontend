"use client"

import { useGetUserOrderQuery } from '@/redux/api/orderApi';
import { loggedInUserInfo } from '@/util/localStorage';
import React from 'react';
import { useEffect, useState } from "react";
import LoadingPage from '@/app/loading';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import ReviewModal from '@/components/ui/Modal/ReviewModal';
import { dateFormatter } from '@/util/DateFormatter';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MyOrderPage = () => {
    const [userRole, setUserRole] = useState(null);
    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
      const userInfo = loggedInUserInfo();
      setUserRole(userInfo?.role);
      setUser(userInfo?.email);
    }, [userRole]);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(id:any) {
        setIsOpen(true);
        setId(id)
    }

    function closeModal() {
      setIsOpen(false);
    }

    const { data: orders, isLoading } = useGetUserOrderQuery(user);
    // console.log(orders?.data);
    return (
      <div>
        <h1 className='text-xl py-2 pb-5'>My Orders</h1>
        <div>
          {!isLoading ? (
            <div>
              {orders?.data?.map((order: any) => (
                <div key="501">
                  <p className="py-2">Order Date: {dateFormatter(order?.createdAt)}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-2">
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
                          <Typography variant="body2" color="text.secondary">
                            $ {data?.price}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">{data?.status}</Button>
                          {data?.status != "pending" && (
                            <Button
                              onClick={() => openModal(data?.id)}
                              size="small"
                            >
                              Review
                            </Button>
                          )}
                        </CardActions>
                      </Card>
                    ))}
                  </div>
                  <p className="py-2 pb-10">Total Price: {order?.totalPrice}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <LoadingPage></LoadingPage>
            </div>
          )}
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex justify-end py-1">
              <button
                className="border border-black px-2 rounded-lg"
                onClick={closeModal}
              >
                <CloseIcon></CloseIcon>
              </button>
            </div>
            <ReviewModal id={id} closeModal={closeModal}></ReviewModal>
          </Modal>
        </div>
      </div>
    );
};

export default MyOrderPage;