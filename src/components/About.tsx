"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";

export default function About() {
  return (
    <div className="max-w-4xl">
      
      <Paragraph className="mt-4">
        I am a 21-year-old Master&apos;s student in Computer Science at ENSICAEN,
        specializing in Cybersecurity and Digital Payment Systems. My academic
        journey blends a solid foundation in computer science with advanced
        expertise in information security, cryptography, and secure application
        development—particularly within the context of modern fintech
        environments.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Professional Focus
      </Heading>
      <Paragraph className="mt-4">
        My core interest lies in offensive security, including ethical hacking,
        penetration testing, and threat modeling. I actively participate in
        Capture The Flag (CTF) competitions and regularly train on platforms
        such as HackTheBox and PentesterLab. These activities reinforce my
        understanding of attacker methodologies and bolster my ability to defend
        against real-world threats.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Technical Mindset & Motivation
      </Heading>
      <Paragraph className="mt-4">
        I&apos;m driven by a deep curiosity for how systems work and a relentless
        desire to solve complex technical problems. Whether I&apos;m debugging a
        security flaw or building a custom tool to automate a task, I enjoy
        applying both logic and creativity to every challenge. I view
        cybersecurity as an evolving puzzle—one that motivates continuous
        learning and innovation.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Beyond Cybersecurity
      </Heading>
      <Paragraph className="mt-4">
        Outside the digital realm, I&apos;m deeply committed to fitness and
        strength training. My discipline at the gym complements my work ethic in
        tech—it builds resilience, sharpens focus, and keeps me grounded.
      </Paragraph>

      <Heading as="h2" className="text-xl font-bold mt-6">
        Career Objective
      </Heading>
      <Paragraph className="mt-4">
        My goal is to become a proficient cybersecurity engineer capable of
        protecting critical systems and contributing to the resilience of modern
        infrastructures. I aspire to work in offensive security roles, secure
        software development, or cybersecurity consulting—particularly within
        finance, healthcare, or defense sectors. I&apos;m committed to lifelong
        learning, ethical responsibility, and making meaningful contributions to
        a more secure digital future.
      </Paragraph>
    </div>
  );
}
