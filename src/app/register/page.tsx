"use client"

import { userRegistration } from '@/action/CreateUser';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const [show, setShow] = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const router = useRouter();

    const handleRegister = async(data:FieldValues) => {
        // console.log(data);
        setShow(true);
        try{
            const res = await userRegistration(data);
            if(res.result){
                setShow(false);
                Swal.fire({
                  title: "Registration Successful",
                  confirmButtonText: "OK",
                }).then((result) => {
                  if (result.isConfirmed) {
                    router.push('/login');
                  }
                });
            }
        } catch (err: any) {
            console.error(err.message);
        }
    }
    return (
      <div
        className="hero min-h-screen font-family bg-slate-400"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="w-auto md:w-[400px] lg:w-[500px]">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-white">
              <div className="card-body">
                <form onSubmit={handleSubmit(handleRegister)}>
                  <div className="pb-8">
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: true })}
                      placeholder="username"
                      className="p-2 border-b-2 border-black bg-transparent w-full"
                    />
                  </div>
                  <div className="pb-8">
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="p-2 border-b-2 border-black bg-transparent w-full"
                    />
                  </div>
                  <div className="pb-8">
                    <input
                      type="password"
                      id="password"
                      {...register("password", { required: true })}
                      placeholder="Password"
                      className="p-2 border-b-2 border-black bg-transparent w-full"
                    />
                  </div>
                  <div>
                    {!show && (
                      <input
                        type="submit"
                        value="REGISTER"
                        className="btn text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 w-full"
                      />
                    )}
                    <div
                      className={`text-center ${
                        show ? "block" : "hidden"
                      } mt-3`}
                    >
                      <span className="loading loading-spinner w-[50px] text-warning text-center"></span>
                    </div>
                  </div>
                </form>
                <div className="grid grid-cols-2 mt-5">
                  <p className="text-left text-lg text-black font-normal">
                    Already Have An Account?
                  </p>
                  <Link href="/login">
                    <p className="text-right text-lg text-black font-normal link link-hover">
                      Go to LOGIN
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RegisterPage;