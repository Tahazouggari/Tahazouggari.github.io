import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const ProgrammingLanguages = [
    {
      title: "JavaScript",
      src: "/images/logos/jscript.png",

      className: "h-10 w-24",
    },
    {
      title: "TypeScript",
      src: "/images/logos/ts.png",

      className: "h-10 w-24",
    },
    {
      title: "Python",
      src: "/images/logos/python.jpeg",

      className: "h-10 w-24",
    },
    {
      title: "scala",
      src: "/images/logos/scala.png",

      className: "h-10 w-24",
    },
    {
      title: "Kotlin",
      src: "/images/logos/kotlin.png",

      className: "h-10 w-24",
    },
   
   
    {
      title: "PHP",
      src: "/images/logos/php.png",

      className: "h-10 w-24",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-24",
    },
    {
      title: "Ruby",
      src: "/images/logos/ruby.jpeg",

      className: "h-10 w-24",
    },
    
    {
      title: "C",
      src: "/images/logos/c.png",

      className: "h-10 w-24",
    },
    {
      title: "C#",
      src: "/images/logos/csharp.png",

      className: "h-10 w-24",
    },
    {
      title: "C++",
      src: "/images/logos/cplusplus.png",

      className: "h-10 w-24",
    },
   
   
  ];
  const FrameworksLibraries = [
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-24",
    },
    
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-12"
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",

      className: "h-10 w-24",
    },
   
  ];
  const Databases = [
    
    {
      title: "MySQL",
      src: "/images/logos/mysql.png",

      className: "h-10 w-24",
    },
   
    {
      title: "Postgresql",
      src: "/images/logos/postgre.png",

      className: "h-10 w-24",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.jpeg",

      className: "h-10 w-24",
    },
  ];
  
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Technical Skills
      </Heading>
      <div className="text-sm text-neutral-500 mb-4">
      Programming Languages:
      </div>
      <div className="flex flex-wrap">
        {ProgrammingLanguages.map((item) => (
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


      <div className="text-sm text-neutral-500 mb-4">
      Frameworks & Libraries:
      </div>
      <div className="flex flex-wrap">
        {FrameworksLibraries.map((item) => (
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

      <div className="text-sm text-neutral-500 mb-4">
      Databases:
      </div>
      <div className="flex flex-wrap">
        {Databases.map((item) => (
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
