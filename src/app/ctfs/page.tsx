import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CTFs | John Doe",
  description:
    "CTF platforms and writeups by John Doe.",
};

const ctfs = [
  {
    name: "PentesterLab",
    image: "/images/pentesterlab.png",
    href: "/ctfs/pentesterlab",
  },
  
  // Add more CTF platforms as needed
];

export default function CTFs() {
  return (
    <Container>
      <span className="text-4xl block mb-2">⚡</span>
      <Heading className="font-black mb-10 text-center">CTF Platforms</Heading>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-10 justify-center">
          {ctfs.map((ctf) => (
            <a
              key={ctf.name}
              href={ctf.href}
              className="flex flex-col items-center p-6 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              style={{ width: 240, minHeight: 180 }}
            >
              <Image
                src={ctf.image}
                alt={ctf.name}
                width={120}
                height={80}
                className="object-contain rounded mb-4"
                style={{ background: "#18181b" }}
              />
              <span className="mt-2 font-bold text-xl text-white">{ctf.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
