import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const SecurityStack = () => {
  const stack = [
    {
      title: "Nmap",
      src: "/images/logos/nmap.jpeg",

      className: "h-10 w-14",
    },
    {
        title: "burpsuite",
        src: "/images/logos/burpsuite.png",
       
  
        className: "h-10 w-40",
      },
      {
        title: "Wireshark",
        src: "/images/logos/wireshark.webp",
  
        className: "h-15 w-11",
      },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Cybersecurity Tools
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
