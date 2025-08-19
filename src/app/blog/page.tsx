import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Experience Blog | Taha ZOUGGRI",
  description:
    "Taha Zouggari is a cybersecurity enthusiast sharing professional experiences, insights, and lessons learned throughout his career.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl"></span>
      <Heading className="font-black pb-4">My Experience Blog</Heading>
      <Paragraph className="pb-10">
        I share my <Highlight> professional journey</Highlight>, key insights, and lessons learned.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
