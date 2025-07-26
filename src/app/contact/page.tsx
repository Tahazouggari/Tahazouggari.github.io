import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function ContactPage() {
  return (
    <Container>
      <Heading className="text-3xl font-bold mb-4">Contact Me</Heading>
      <Paragraph>
        Feel free to reach out via email or connect with me on LinkedIn.
      </Paragraph>
    </Container>
  );
}
