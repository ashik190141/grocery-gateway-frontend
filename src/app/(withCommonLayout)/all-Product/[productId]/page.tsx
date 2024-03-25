import React from 'react';
import Image from 'next/image';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface productId {
    params: {
        productId: string
    }
}

export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/product`);
    const { data:products } = await res.json();
    return products.slice(0, 10).map((product: any) => ({
        productId:product._id
    }))
}

const ProductDetailsPage = async ({ params }: productId) => {
//   console.log(params);
  const res = await fetch(
    `http://localhost:5000/api/v1/product/${params.productId}`
  );
  const { data } = await res.json();
//   console.log(data);
    return (
      <div className="max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <Image src={data.image} alt="product" width={700} height={700} />
          </div>
          <div>
            <p className="text-3xl font-bold ">{data.name}</p>
            <p className="text-3xl font-bold py-3">{data.category}</p>
            <div className="flex-grow-1 d-flex align-items-center">
              <Rating
                style={{ maxWidth: 200 }}
                value={Math.round(data?.rating || 0)}
                readOnly
              />
            </div>
            <p className="text-xl font-bold py-3">$ {data.price}</p>
            <div className='text-xl text-justify'>
                {data.description}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetailsPage;