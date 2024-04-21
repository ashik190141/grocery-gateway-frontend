"use client"

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="font-play py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        {/* grid-1 */}
        <div>
          <div className="bg-[#2d4739] my-5 w-[110px] rounded-2xl bg-opacity-55">
            <p className="text-sm font-semibold text-center text-[#2d4739] p-2 ">
              Who We Are
            </p>
          </div>
          <div className="my-3">
            <p className="text-4xl lg:w-[450px]  font-semibold">
              Fresh Products Directly To Your Door With Free Delivery
            </p>
          </div>

          <div className="w-[450px] text-[#2d4739]">
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make type specimen book. It has survived not only five centuries,
              but also the leap types remaining essentially unchangedIt was
              popularised.
            </p>
          </div>

          <div className="my-4 space-y-1">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#D7A747]" />
              <p className="font-semibold">
                Rredibly innovate granular internal
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#D7A747]" />
              <p className="font-semibold">
                Grantedly underconstructions reloaded
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#D7A747]" />
              <p className="font-semibold">Completely synergize resource</p>
            </div>
          </div>

          <div className="my-5 ">
            <Link
              href="/contactUsPage"
              className="btn btn-outline border-[#09814A] text-xl hover:bg-[#2D4739] w-[200px]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* grid-2 */}
        <div>
          <div className="flex flex-col lg:flex-row items-end justify-center gap-5">
            <Image
              src={
                "https://i.ibb.co/s3WRhYS/boxed-water-is-better-7-H1h-Dt694s8-unsplash.jpg"
              }
              alt=""
              width={400}
              height={400}
              // layout="fill"
            />
            <Image
              src={"https://i.ibb.co/znMn6SK/liuba-bilyk-jz-C-PQ4c7y-M.jpg"}
              alt=""
              width={400}
              height={400}
              // layout="fill"
            />
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <div className="flex flex-col my-10 items-center justify-center">
          <div className="bg-[#2d4739] my-5 w-[110px] rounded-2xl bg-opacity-55">
            <p className="text-sm font-semibold text-center text-[#2d4739] p-2 ">
              Our Members
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 justify-center">
            <p className="text-4xl font-bold">From The Community</p>
            <p className="text-center">
              When an unknown printer took a galley of type and scrambled make{" "}
              <br />
              specimen book It has survived five centuries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <div className="space-y-2">
            <Image
              src={
                "https://i.ibb.co/bWdzTKt/dollar-gill-Xj-CZ9p-EBJAk-unsplash.jpg"
              }
              alt=""
              width={600}
              height={600}
              // layout="fill"
            />
            <p className="font-bold text-xl">Albert Forse</p>
            <p className="text-sm">Manager</p>
          </div>
          <div className="space-y-2">
            <Image
              src={
                "https://i.ibb.co/0n7DXxm/gursimrat-ganda-GMAOwvn-EPLU-unsplash.jpg"
              }
              alt=""
              width={600}
              height={600}
              // layout="fill"
            />
            <p className="font-bold text-xl">Albert Forse</p>
            <p className="text-sm">Manager</p>
          </div>
          <div className="space-y-2">
            <Image
              src={
                "https://i.ibb.co/zPfbWnV/roman-holoschchuk-I2-SU6d-CGsn-I-unsplash.jpg"
              }
              alt=""
              width={600}
              height={600}
              // layout="fill"
            />
            <p className="font-bold text-xl">Albert Forse</p>
            <p className="text-sm">Manager</p>
          </div>
          <div className="space-y-2">
            <Image
              src={
                "https://i.ibb.co/wYr9LLJ/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg"
              }
              alt=""
              width={600}
              height={600}
              // layout="fill"
            />
            <p className="font-bold text-xl">Albert Forse</p>
            <p className="text-sm">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
