import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Taha ZOUGGARI",
  description:
    "Taha Zouggari is a cybersecurity engineer specializing in secure payment systems and digital financial solutions.",
};

export default function Projects() {
  return (
    <Container>
      
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}
