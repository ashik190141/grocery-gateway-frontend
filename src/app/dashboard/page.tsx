"use client"

import { loggedInUserInfo } from "@/util/localStorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    const [userRole, setUserRole] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const userInfo = loggedInUserInfo();
        setUserRole(userInfo?.role);
        if (userInfo?.role == 'user') {
            router.push("/dashboard/my-orders");
        } else {
            router.push("/dashboard/allProduct");
        }
    }, [userRole]);

    return (
        <div>
        </div>
    );
};

export default DashboardPage;