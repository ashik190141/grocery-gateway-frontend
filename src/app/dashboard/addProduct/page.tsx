"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { CreateProduct } from '@/action/CreateProduct';
import { useRouter } from "next/navigation";
import LoadingPage from '../../loading';
import Swal from 'sweetalert2';
import { useCreateProductMutation } from '@/redux/api/productApi';

export type FormValues = {
  name: string;
  image: string;
  description: string;
  price: Number;
  rating: Number;
  category: string;
};
const image_hosting_token = process.env.VITE_Image_Upload_token;
// console.log(image_hosting_token);

const AddProductPage = () => {
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=d0a7e1f328b83330a0ea0321f368cb7f`;
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

  const [createProduct] = useCreateProductMutation();

  const onSubmit = async (data: FormValues) => {
    setShow(true);
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
        .then(async (imgResponse) => {
            if (imgResponse.success) {
                const productDetails = {
                    name: data.name,
                    price: data.price,
                    rating: data.rating,
                    description: data.description,
                    category: data.category,
                    image: imgResponse.data.display_url,
                    // id: (products.length)+1
                }
                try {
                  const res = await createProduct(productDetails).unwrap();
                  // console.log(res);
                  if (res.result) {
                      Swal.fire({
                        title: "Add Your Product Successfully",
                        confirmButtonText: "Ok",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          router.push('/dashboard/allProduct');
                        }
                      });
                  }
                  else {
                    Swal.fire({
                      title: "Failed",
                      confirmButtonText: "Ok",
                    });
                  }
                } catch (err:any) {
                    throw new Error(err.message);
                }
          }
      })
    };

    return (
      <div className="my-10">
        <div className="hero min-h-screen">
          <div className="card w-[50%] shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Product Name"
                  className="input input-bordered"
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
                >
                  {category?.map((category: { id: string; name: string }) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  id="price"
                  {...register("price")}
                  type="number"
                  placeholder='Price'
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
                  {...register("rating")}
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
                  placeholder="Description"
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="file"
                  id="image"
                  {...register("image")}
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {!show ? <input type="submit" value="Submit" className="input input-bordered"/>: <div><LoadingPage></LoadingPage></div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddProductPage;