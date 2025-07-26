import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { notFound } from "next/navigation";

const badgeNotesData = {
  essentiell: {
    name: "Essentiell Badge",
    notes: "These are my notes from the Essentiell challenges.",
    pdfs: [
      { name: "Essentiell Guide", url: "/pdfs/essentiell-guide.pdf" },
      { name: "Essentiell Solutions", url: "/pdfs/essentiell-solutions.pdf" },
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
