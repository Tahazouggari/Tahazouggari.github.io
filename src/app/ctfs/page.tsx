import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import Image from "next/image";
import { ctfs } from "../badges/page";

export const metadata: Metadata = {
  title: "CTFs | Taha ZOUGGRI",
  description:
    "Explore CTF platforms and writeups by Taha Zouggari to sharpen your cybersecurity skills.",
};

export default function CTFs() {
  return (
    <Container>
      <div className="text-center">
        <span className="text-5xl block mb-4">⚡</span>
        <Heading className="font-extrabold text-3xl mb-6 text-white">
          Explore CTF Platforms
        </Heading>
        <p className="text-neutral-400 mb-10">
          Discover platforms to sharpen your cybersecurity skills and explore detailed writeups.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ctfs.map((ctf) => (
          <a
            key={ctf.name}
            href={ctf.href}
            className="flex flex-col items-center p-6 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:border-gradient-to-r hover:from-purple-500 hover:to-blue-500"
            style={{ width: 260, minHeight: 300 }}
          >
            <Image
              src={ctf.image}
              alt={ctf.name}
              width={140}
              height={100}
              className="object-contain rounded mb-4"
              style={{ background: "#18181b" }}
            />
            <span className="mt-2 font-bold text-xl text-white">{ctf.name}</span>
            <p className="text-neutral-400 text-sm text-center mt-2">{ctf.description}</p>
          </a>
        ))}
      </div>
    </Container>
  );
}
