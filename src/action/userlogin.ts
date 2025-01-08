"use server";

import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(
    `https://grocery-store-backend-six.vercel.app/api/v1/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
