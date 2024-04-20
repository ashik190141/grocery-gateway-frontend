"use server";

import { FormValues } from "@/app/dashboard/addProduct/page";

export const CreateProduct = async (data: FormValues) => {
  const res = await fetch(`http://localhost:5000/api/v1/product`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const productInfo = await res.json();
  return productInfo;
};
