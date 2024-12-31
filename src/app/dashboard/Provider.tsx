"use client"

import { getKeyFromLocalStorage } from '@/util/localStorage';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  //   useEffect(() => {
  //       let key = getKeyFromLocalStorage("key");
  //       if (!key) {
  //         router.push("/login");
  //       }
  //   },[])
  return <div>{children}</div>;
};

export default Provider;