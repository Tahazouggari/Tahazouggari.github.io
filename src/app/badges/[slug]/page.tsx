import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { notFound } from "next/navigation";

const badgeData = {
  pentesterlab: {
    name: "PentesterLab Badge",
    description: "Learn web application security and penetration testing through hands-on labs.",
  },
  hackthebox: {
    name: "HackTheBox Badge",
    description: "Practice hacking skills in a controlled environment with various challenges.",
  },
  tryhackme: {
    name: "TryHackMe Badge",
    description: "Interactive learning platform for cybersecurity enthusiasts and professionals.",
  },
  essentiell: {
    name: "Essentiell Badge",
    description: "Master essential cybersecurity skills through structured challenges.",
  },
  pcap: {
    name: "PCAP Badge",
    description: "Learn packet capture analysis and network troubleshooting techniques.",
  },
};

type BadgeSlug = keyof typeof badgeData; // Define the type of valid slugs

export default function BadgePage({ params }: { params: { slug: BadgeSlug } }) {
  const badge = badgeData[params.slug];

  if (!badge) {
    notFound();
  }

  return (
    <Container>
      <Heading className="text-3xl font-bold mb-4">{badge.name}</Heading>
      <Paragraph>{badge.description}</Paragraph>
    </Container>
  );
}
