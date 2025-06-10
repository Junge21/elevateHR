"use client";

import Image from "next/image";
import { cn } from "./cn";
import Link from "next/link";

type BannerImageProps = {
  imageUrl: string;
  heading: string;
  subtext: string;
  buttonText?: string;
  navigateLink?: string;
  textContainerClassName?: string;
};

const BannerImage: React.FC<BannerImageProps> = ({
  imageUrl,
  heading,
  subtext,
  buttonText,
  navigateLink,
  textContainerClassName = "",
}) => {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden">
      <Image
        src={imageUrl}
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      <div
        className={cn(
          "absolute px-6 md:px-12 inset-0 bg-opacity-40 flex flex-col justify-center items-end",
          textContainerClassName
        )}
      >
        <div className=" bg-opacity-40 flex flex-col justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold max-w-2xl">
            {heading}
          </h1>
          <p className="text-white text-sm md:text-lg mt-2 max-w-xl">
            {subtext}
          </p>
          {buttonText && (
            <Link href={navigateLink ?? "#"} aria-current="page">
              <button className="mt-4 w-fit bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-md transition duration-300 cursor-pointer">
                {buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
