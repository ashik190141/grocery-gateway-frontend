"use client"
import Link from 'next/link';
import img from "../../assets/somi-jaiswal-6DsMsaoFmqY-unsplash.jpg";
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import { userLogin } from '@/action/userlogin';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { setKeyToLocalStorage } from '@/util/localStorage';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const router = useRouter();

    const handleLogin = async(data: FieldValues) => {
        setShow(true);
        try{
            const res = await userLogin(data);
            console.log(res);
            if(res.success){
                setShow(false);
                setKeyToLocalStorage(res?.token)
                Swal.fire({
                  title: "Logged in Successful",
                  confirmButtonText: "OK",
                }).then((result) => {
                  if (result.isConfirmed) {
                    router.push('/dashboard/allProduct');
                  }
                });
            }
        } catch (err: any) {
            console.error(err.message);
        }
    };
    return (
      <div>
        <div
          className="hero min-h-screen font-family"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="w-auto md:w-[400px] lg:w-[500px]">
              <div className="card flex-shrink-0 w-full shadow-2xl bg-white">
                <div className="card-body">
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="pb-8">
                      <input
                        type="text"
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
                          value="LOGIN"
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
                      New to Grocery Gateway?
                    </p>
                    <Link href="/register">
                      <p className="text-right text-lg text-black font-normal link link-hover">
                        Go to Register
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;