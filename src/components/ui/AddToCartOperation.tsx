"use client"

import { loggedInUserInfo } from '@/util/localStorage';
import React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAddToCartProductMutation } from "@/redux/api/cartApi";
import Swal from "sweetalert2";
import CloseIcon from "@mui/icons-material/Close";

import Modal from "react-modal";
import ReviewModal from './Modal/ReviewModal';

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

const AddToCartOperation = ({ id }: { id: any }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const userInfo = loggedInUserInfo();
      setUser(userInfo?.email);
    }, [user]);
    const [addToCart] = useAddToCartProductMutation();

    const handleAddToCart = async (id:any) => {
      const data = { id: id, email: user };
      if (!user) {
        router.push("/login");
      } else {
        const res = await addToCart(data).unwrap();
        if (res?.result) {
          Swal.fire({
            title: "Cart Added Successfully",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Failed",
            confirmButtonText: "Ok",
          });
        }
      }
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <div>
        <div className="flex gap-5">
          <button
            onClick={() => handleAddToCart(id)}
            className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"
          >
            Add To Cart
          </button>
          <button
            onClick={openModal}
            className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"
          >
            Review
          </button>
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

export default AddToCartOperation;