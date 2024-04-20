import React from 'react';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { loggedInUserInfo } from '@/util/localStorage';
import { useReviewProductMutation } from '@/redux/api/reviewApi';
import Swal from 'sweetalert2';

const ReviewModal = ({ id, closeModal }: { id: any; closeModal:any }) => {
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState(null);
  const [addReview] = useReviewProductMutation();

  useEffect(() => {
    const userInfo = loggedInUserInfo();
    setUser(userInfo?.email);
  }, [user]);

  const handleReview = async () => {
    const reviewInfo = {
      email: user,
      review:
        (document.getElementById("review") as HTMLInputElement)?.value || null,
      rating: rating,
      id: id,
    };
    const res = await addReview(reviewInfo).unwrap();
    if (res?.result) {
      Swal.fire({
        title: "Review Added",
        text: "Successfully Added Your Review",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
            closeModal()
        }
      });
    }
  };

  return (
    <div className="card w-52 md:w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className=" font-semibold text-xl text-center">Add a Review</h2>
        <div>
          {/* 5-star */}
          <div>
            <p className="required font-bold">Your Rating *</p>
            <Rating
              style={{ maxWidth: 250 }}
              value={rating}
              onChange={setRating}
            />
          </div>
          {/* review */}
          <div className="form-control">
            <label className="label flex gap-1">
              <span className="label-text font-bold">Your Review</span>
              <p className="font-bold">*</p>
            </label>
            <textarea
              placeholder=""
              className="textarea textarea-bordered textarea-md w-full"
              required
              id="review"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full pt-5">
            {/* email */}
            <div className="form-control">
              <input
                type="email"
                value={user || ""}
                name="email"
                readOnly
                placeholder="example@gmail.com"
                className="input w-[280px] rounded-none  input-bordered"
                required
              />
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={handleReview}
                className="btn bg-[#f29973] rounded-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;