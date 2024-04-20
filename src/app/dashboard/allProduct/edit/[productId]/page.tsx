"use client"

import { useGetSingleProductQuery, useUpdateProductsMutation } from '@/redux/api/productApi';
import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import LoadingPage from '@/app/loading';
import Swal from 'sweetalert2';

interface productId {
  params: {
    productId: string;
  };
}

export type FormValues = {
  name: string;
  description: string;
  price: Number;
  rating: Number;
  category: string;
};

const UpdateProduct = ({ params }: productId) => {
    const { data: product, isLoading } = useGetSingleProductQuery(params.productId);
    const [name, setName] = useState(product?.data?.name||'');
    const [price, setPrice] = useState(product?.data?.price||'');
    const [description, setDescription] = useState(product?.data?.description||'');
    const [rating, setRating] = useState(product?.data?.rating||'');
    const [categoryValue, setCategoryValue] = useState(product?.data?.category||'');

    const [category, setCategory] = useState([]);
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm<FormValues>();

    const router = useRouter();
    useEffect(() => {
        fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => {
            setCategory(data);
        });
    }, []);

    const [updateProduct] = useUpdateProductsMutation();

    const handleUpdateProduct = async(data: FormValues) => {
        // console.log(data);
      try {
          setShow(true)
            const updateProductInfo = {
                ...data,
                id:product?.data?.id
            }
            const res = await updateProduct(updateProductInfo).unwrap();
            // console.log(res);
        if (res.result) {
              setShow(false)
              Swal.fire({
                title: "Update Product Successfully",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  router.push("/dashboard/allProduct");
                }
              });
            } else {
              Swal.fire({
                title: "Failed",
                confirmButtonText: "Ok",
              });
            }
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
      <div className="my-10">
        <div className="hero min-h-screen">
          <div className="card w-[50%] shadow-xl bg-base-100">
            <h1 className="my-5 text-3xl">Update Product</h1>
            <form
              onSubmit={handleSubmit(handleUpdateProduct)}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  {...register("name")}
                  placeholder="Product Name"
                  className="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <select
                  className="select p-2 border-2 border-black bg-transparent w-full"
                  id="category"
                  {...register("category", { required: true })}
                  value={categoryValue}
                  onChange={(e) => setCategoryValue(e.target.value)}
                >
                  {category?.map((category: { id: string; name: string }) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  id="price"
                  value={price}
                  {...register("price")}
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Ratings</span>
                </label>
                <input
                  type="text"
                  id="ratings"
                  value={rating}
                  {...register("rating")}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="Ratings"
                  className="input input-bordered"
                  max={5}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {!show ? (
                  <input
                    type="submit"
                    value="Submit"
                    className="input input-bordered"
                  />
                ) : (
                  <div>
                    <LoadingPage></LoadingPage>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateProduct;