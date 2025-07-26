import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { notFound } from "next/navigation";

const badgeNotesData = {
  pentesterlab: {
    name: "PentesterLab Badge",
    notes: "These are my notes from the PentesterLab challenges.",
    pdfs: [
      { name: "PentesterLab Guide", url: "/pdfs/pentesterlab-guide.pdf" },
      { name: "PentesterLab Solutions", url: "/pdfs/pentesterlab-solutions.pdf" },
    ],
  },
  hackthebox: {
    name: "HackTheBox Badge",
    notes: "These are my notes from HackTheBox challenges.",
    pdfs: [
      { name: "HackTheBox Walkthrough", url: "/pdfs/hackthebox-walkthrough.pdf" },
    ],
  },
  tryhackme: {
    name: "TryHackMe Badge",
    notes: "These are my notes from TryHackMe challenges.",
    pdfs: [
      { name: "TryHackMe Guide", url: "/pdfs/tryhackme-guide.pdf" },
    ],
  },
  essentiell: {
    name: "Essentiell Badge",
    notes: "These are my notes from the Essentiell challenges.",
    pdfs: [
      { name: "Essentiell Guide", url: "/pdfs/essentiell-guide.pdf" },
    ],
  },
  pcap: {
    name: "PCAP Badge",
    notes: "These are my notes from the PCAP challenges.",
    pdfs: [
      { name: "PCAP Guide", url: "/pdfs/pcap-guide.pdf" },
    ],
  },
};

type BadgeSlug = keyof typeof badgeNotesData; // Define the type of valid slugs

export default function BadgeNotesPage({ params }: { params: { slug: BadgeSlug } }) {
  const badgeNotes = badgeNotesData[params.slug];

  if (!badgeNotes) {
    notFound();
  }

  return (
    <Container>
      <Heading className="text-3xl font-bold mb-4">{badgeNotes.name}</Heading>
      <Paragraph className="mb-4">{badgeNotes.notes}</Paragraph>
      <ul className="list-disc pl-5">
        {badgeNotes.pdfs.map((pdf) => (
          <li key={pdf.url}>
            <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {pdf.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
