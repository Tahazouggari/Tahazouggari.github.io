import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";
import { SecurityStack } from "@/components/SecurityStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Taha</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently a second-year <Highlight>Master&apos;s student</Highlight> in Cybersecurity and digital payment at{" "}
        <Highlight>Ensicaen</Highlight>in France.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a futur <Highlight>Cybersecurity and e-paiment engineer</Highlight> with a deep passion for digital security. I&apos;m also drawn to penetration testing and ethical hacking-uncovering vulnerabilities, <Highlight>thinking</Highlight>like an attacker , and then building stronger defenses.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m also full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives 
      </Paragraph>
      
     
      
      <TechStack />
      <SecurityStack />
    </Container>
  );
}
