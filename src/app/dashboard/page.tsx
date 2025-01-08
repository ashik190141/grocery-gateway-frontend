"use client";

import { useGetUserInfoQuery } from "@/redux/api/dashboardApi";
import { loggedInUserInfo } from "@/util/localStorage";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export const revalidate = 0;

const DashboardPage = () => {
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = loggedInUserInfo();
    setUserRole(userInfo?.role);
    setUser(userInfo?.email);
  }, []);

  const { data: userInfo, isLoading } = useGetUserInfoQuery(
    userRole && user ? { userRole, user } : skipToken
  );

  const ordersByMonthData = {
    labels:
      userInfo?.ordersByMonthAndYear?.map(
        (order: any) => `${order.monthName} ${order.year}`
      ) || [],
    datasets: [
      {
        label: "Orders",
        data:
          userInfo?.ordersByMonthAndYear?.map((order: any) => order.count) ||
          [],
        backgroundColor: "#FFA500",
        borderColor: "#FF4500",
        borderWidth: 1,
      },
    ],
  };

  const productDistributionData = {
    labels: ["Delivered", "Pending", "Cart"],
    datasets: [
      {
        label: "Products",
        data: [
          userInfo?.noOfDeliver || 0,
          userInfo?.noOfPending || 0,
          userInfo?.totalProductOfCart || 0,
        ],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      },
    ],
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 text-4xl font-bold">
          <p className="uppercase text-gray-800">Grocer</p>
          <p className="uppercase text-orange-600">Gateway</p>
        </div>
        <p className="text-gray-600 my-10">
          Hi, <span className="font-bold">{userInfo?.name}</span> Your
          personalized dashboard
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {userRole=='user' ? "User Details" : "Product and Order Details"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 18.364L19 17M19 17a3 3 0 01-1.121-.636M12 12h.01"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">Name</p>
                <p className="text-gray-800 w-fit">{userInfo?.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center p-4 bg-green-50 rounded-lg shadow">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 21v-2a4 4 0 00-8 0v2m8 0H8m8-10h-8m-1.5 0a1.5 1.5 0 01-3 0V9a1.5 1.5 0 013 0v2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">Email</p>
                <p className="text-gray-800">{userInfo?.email}</p>
              </div>
            </div>

            {/* Orders Made */}
            <div className="flex items-center p-4 bg-purple-50 rounded-lg shadow">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">Orders Made</p>
                <p className="text-gray-800">{userInfo?.totalOrder}</p>
              </div>
            </div>

            {/* Total Cost */}
            <div className="flex items-center p-4 bg-yellow-50 rounded-lg shadow">
              <div className="bg-yellow-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.38 0 2.5-1.567 2.5-3.5S13.38 1 12 1 9.5 2.567 9.5 4.5 10.62 8 12 8z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">Total {userRole=='user'?'Cost' : 'Income'}</p>
                <p className="text-gray-800">${userInfo?.totalCost}</p>
              </div>
            </div>

            {/* Products Ordered */}
            <div className="flex items-center p-4 bg-teal-50 rounded-lg shadow">
              <div className="bg-teal-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7V3M8 7V3m12 8v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0h2m-2 0V9a4 4 0 00-8 0v2M4 15v6h16v-6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">
                  Products Ordered
                </p>
                <p className="text-gray-800">{userInfo?.totalOrderProduct}</p>
              </div>
            </div>

            {/* Products Delivered */}
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg shadow">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12l5 5L20 7M9 12l2 2m-2-2L7 10"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">
                  Products Delivered
                </p>
                <p className="text-gray-800">{userInfo?.noOfDeliver}</p>
              </div>
            </div>

            {/* Pending Products */}
            <div className="flex items-center p-4 bg-red-50 rounded-lg shadow">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2m0-2l2-2M9 12l-2-2m0 2l2 2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-bold">
                  Pending Products
                </p>
                <p className="text-gray-800">{userInfo?.noOfPending}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders by Month and Year */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Orders by Month & Year
          </h2>
          {userInfo?.ordersByMonthAndYear?.length > 0 ? (
            <ul className="space-y-2">
              {userInfo.ordersByMonthAndYear.map((order: any) => (
                <li
                  key={`${order.month}-${order.year}`}
                  className="flex justify-between text-gray-700 bg-gray-50 p-3 rounded-md shadow-sm"
                >
                  <span>
                    {order.monthName.charAt(0).toUpperCase() +
                      order.monthName.slice(1)}{" "}
                    {order.year}
                  </span>
                  <span className="font-bold">{order.count}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No order data available.</p>
          )}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Orders by Month & Year
          </h2>
          {userInfo?.ordersByMonthAndYear?.length > 0 ? (
            <Bar data={ordersByMonthData} options={{ responsive: true }} />
          ) : (
            <p className="text-gray-500">No order data available.</p>
          )}
        </div>

        {/* Product Distribution Graph */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Distribution
          </h2>
          <div className="flex items-center justify-center">
            <Pie data={productDistributionData} width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
