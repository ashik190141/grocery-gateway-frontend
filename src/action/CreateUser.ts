"use server";

export const userRegistration = async (data: any) => {
  const res = await fetch(
    `https://grocery-store-backend-six.vercel.app/api/v1/register`,
    {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
