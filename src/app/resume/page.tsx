import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";


import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
  I&apos;m a cybersecurity and e-payment engineer passionate about{" "}
  <Highlight>securing digital systems</Highlight> and designing trusted payment
  solutions that protect millions of users worldwide
</Paragraph>

      <WorkHistory />
      {/* CV Section */}
      <div className="mt-10">
      <Heading className="text-2xl font-bold mb-4">Resume – English Version</Heading>
      <Paragraph className="mb-4">
        Coming soon
      </Paragraph>
      </div>
      <div className="mt-10">
        <Heading className="text-2xl font-bold mb-4">Resume – French Version</Heading>

        {/* Embedded CV */}
        <iframe
          src="/pdf/cv.pdf"
          className="w-full h-[500px] border rounded-xl shadow"
        />
        

        {/* Download Button */}
        <div className="mt-4 text-gray-700">
        Cant &apos; view the PDF?{" "}
        <a
          href="/pdf/cv.pdf"
          download
          className="text-blue-600 underline"
        >
          Download it here.
        </a>
      </div>
      
      </div>
    </Container>
  );
}
