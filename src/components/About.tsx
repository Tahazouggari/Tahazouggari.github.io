"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";

export default function About() {
  return (
    <div className="max-w-4xl">
      <Paragraph className="mt-4">
        I am a Master&apos;s student in Computer Science at ENSICAEN,
        specializing in Cybersecurity and Digital Payment Systems. My background
        combines a strong computer science foundation with applied expertise in
        information security, cryptography, and secure application development
        for modern fintech environments.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Focus Areas
      </Heading>
      <Paragraph className="mt-4">
        I focus on offensive security ethical hacking, penetration testing, and
        threat modeling. I actively compete in CTFs and train on platforms such
        as Hack The Box and PentesterLab, sharpening my understanding of attacker
        techniques and informing practical defense strategies.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Technical Approach
      </Heading>
      <Paragraph className="mt-4">
        I&apos;m driven by curiosity about how systems work and by a disciplined,
        hands-on approach to solving complex problems. Whether diagnosing a
        security flaw or building automation tools, I combine rigorous logic with
        creativity. I see cybersecurity as a continuously evolving problem space
        that demands experimentation and lifelong learning.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Interests &amp; Personal Growth
      </Heading>
      <Paragraph className="mt-4">
        I believe in getting 1% better every day. Outside of coursework, I invest
        in:
      </Paragraph>
      <Paragraph>
        <li>
          <strong>Travel:</strong> exploring new places and cultures to broaden
          perspective and adaptability.
        </li>
        <li>
          <strong>Sport:</strong> strength training and regular{" "}
          <a
            href="https://www.unicaen.fr/vie-de-campus/vie-sportive/activites/caen/"
            className="underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
            aria-label="SUAPS/CROUS swimming club link"
          >
            swimming
          </a>{" "}
    
           and weigh lifting for discipline, focus, and resilience.
        </li>
        <li>
          <strong>Learning:</strong> continuous upskilling through labs, Certifications, papers,
          and write-ups aiming to be a better version of yesterday.
        </li>
        </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Beyond Work
      </Heading>
      <Paragraph className="mt-4">
        Outside of security, I&apos;m committed to fitness and strength training.
        The discipline and focus I build in the gym translate directly into my
        work, helping me stay resilient and results-oriented.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Career Objective
      </Heading>
      <Paragraph className="mt-4">
        I aim to grow as a cybersecurity engineer focused on offensive security,
        secure software development, and digital payment systems. I want to
        contribute to building secure, resilient systems that protect users and
        organizations from evolving threats.
      </Paragraph>
    </div>
  );
}
