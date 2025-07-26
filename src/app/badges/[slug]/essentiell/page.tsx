import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

// List your solved challenges and their PDF filenames here
const challenges = [
  {
    title: "Cross site scripting (XSS)",
    pdf: "/pdf/xss.pdf",
  },
  {
    title: "SQL Injection",
    pdf: "/pdf/SQLInjection.pdf",
  },
  {
    title: "MongoDB",
    pdf: "/pdf/Mongodb.pdf",
  },
  {
    title: "XML attacks",
    pdf: "/pdf/xml_attacks.pdf",
  },
  {
    title: "File Include Vulnerabilitie ",
    pdf: "/pdf/file_include.pdf",
  },
  {
    title: "Exploitation of SSTI",
    pdf: "/pdf/Server_Side_Template_injection.pdf",
  },
  {
    title: "Server-Side Request Forgery (SSRF)",
    pdf: "/pdf/Server_Side_Request_Forgery.pdf",
  },
  // Add more challenges as needed
];

export default function EssentiellBadgePage() {
  return (
    <Container>
      <div className="mb-6">
        <Link href="/badges">
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100 transition">
            ← Back to Badges
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="/images/essentiell.png"
          alt="Essentiell Badge"
          width={48}
          height={48}
          className="rounded"
        />
        <Heading className="font-black text-2xl">Essentiell Badge Notes</Heading>
      </div>
      <p className="mb-6 text-lg text-neutral-300">
        Here are my notes and writeups from Essentiell challenges I have solved.
      </p>
      <div className="mb-6">
        <a
          href="https://pentesterlab.com/certs/039b6555ad33a732d6b0e8b29e1960"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Earned Badge Credential
        </a>
      </div>
      <div className="space-y-12">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="p-4 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <h2 className="font-bold text-lg text-white mb-4">
              {challenge.title}
            </h2>
            <div className="w-full flex flex-col items-center">
              <iframe
                src={challenge.pdf}
                width="100%"
                height="500px"
                style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                title={challenge.title + " PDF"}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
