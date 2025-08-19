import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

const badges = [
  { name: "Essentiell Badge", slug: "essentiell" },
  { name: "PCAP Badge", slug: "PCAP" },
];

export default function BadgesPage() {
  return (
    <Container>
      <Heading className="text-3xl font-bold mb-6">My Badges</Heading>
      <Paragraph className="mb-6">
        Explore the badges I have earned through various platforms and challenges.
      </Paragraph>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <a
            key={badge.slug}
            href={`/badges/${badge.slug}`}
            className="block p-4 rounded-lg border border-neutral-800 bg-neutral-900 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-white">{badge.name}</h3>
          </a>
        ))}
      </div>
    </Container>
  );
}
export const ctfs = [
  {
    name: "PentesterLab",
    image: "/images/pentesterlab.png",
    href: "../badges",
    description: "Learn web application security and penetration testing through hands-on labs.",
  },
  {
    name: "HackTheBox",
    image: "/images/hackthebox.png",
    href: "https://www.hackthebox.com/",
    description: "Practice hacking skills in a controlled environment with various challenges.",
  },
  {
    name: "TryHackMe",
    image: "/images/tryhackme.png",
    href: "https://tryhackme.com/",
    description: "Interactive learning platform for cybersecurity enthusiasts and professionals.",
  },
];

