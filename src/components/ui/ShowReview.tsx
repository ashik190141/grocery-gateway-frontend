"use client"

import { useGetAllReviewQuery } from '@/redux/api/reviewApi';
import React from 'react';
import img from '../../assets/Avatar-Profile-PNG-Free-Image.png'
import Image from 'next/image';


const ShowReview = ({ id }: { id: any }) => {
    const {data:reviews, isLoading} = useGetAllReviewQuery(id);
    // console.log(reviews);
    return (
      <div>
        {
            reviews?.length != 0 && <div>
                <div className="text-3xl py-3">Product Review</div>
                {!isLoading ? (
                <div className='pt-2'>
                    {reviews?.map((review : { name: string; review: string }) => 
                    <div key="13579">
                        <div className="flex gap-5 items-center">
                        <Image src={img} alt="profile image" width={30} height={30} />
                        <p className='text-xl'>{review?.name}</p>
                        </div>
                        <div className='py-1'>
                        <p className='ml-10'>{review.review}</p>
                        </div>
                    </div>
                    )}
                </div>
                ) : (
                <div>...Loading</div>
                )}
            </div>
        }
      </div>
    );
};

export default ShowReview;