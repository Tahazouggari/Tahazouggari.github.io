"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="Cybersecurity Showcase"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Heading as="h2" className="text-xl font-bold mt-4">
          About Me
        </Heading>
        <Paragraph className="mt-4">
          I am a second-year Master's student in Computer Science at ENSICAEN,
          specializing in Cybersecurity and Digital Payment Systems. My academic
          journey blends a solid foundation in computer science with advanced
          expertise in information security, cryptography, and secure
          application development—particularly within the context of modern
          fintech environments.
        </Paragraph>

        <Heading as="h2" className="text-xl font-bold mt-6">
          Professional Focus
        </Heading>
        <Paragraph className="mt-4">
          My core interest lies in offensive security, including ethical hacking,
          penetration testing, and threat modeling. I actively participate in
          Capture The Flag (CTF) competitions and regularly train on platforms
          such as HackTheBox and TryHackMe. These activities reinforce my
          understanding of attacker methodologies and bolster my ability to
          defend against real-world threats.
        </Paragraph>
        <Paragraph className="mt-4">
          I have practical experience with industry-standard tools like Nmap,
          Wireshark, Burp Suite, Metasploit, John the Ripper, and operate
          comfortably in Linux-based environments. My skillset includes
          scripting in Python and Bash, reverse engineering, and conducting
          vulnerability assessments aligned with the OWASP Top 10.
        </Paragraph>

        <Heading as="h2" className="text-xl font-bold mt-6">
          Technical Mindset & Motivation
        </Heading>
        <Paragraph className="mt-4">
          I’m driven by a deep curiosity for how systems work and a relentless
          desire to solve complex technical problems. Whether I’m debugging a
          security flaw or building a custom tool to automate a task, I enjoy
          applying both logic and creativity to every challenge. I view
          cybersecurity as an evolving puzzle—one that motivates continuous
          learning and innovation.
        </Paragraph>

        <Heading as="h2" className="text-xl font-bold mt-6">
          Beyond Cybersecurity
        </Heading>
        <Paragraph className="mt-4">
          Outside the digital realm, I’m deeply committed to fitness and
          strength training. My discipline at the gym complements my work ethic
          in tech—it builds resilience, sharpens focus, and keeps me grounded.
        </Paragraph>

        <Heading as="h2" className="text-xl font-bold mt-6">
          Career Objective
        </Heading>
        <Paragraph className="mt-4">
          My goal is to become a proficient cybersecurity engineer capable of
          protecting critical systems and contributing to the resilience of
          modern infrastructures. I aspire to work in offensive security roles,
          secure software development, or cybersecurity consulting—particularly
          within finance, healthcare, or defense sectors. I’m committed to
          lifelong learning, ethical responsibility, and making meaningful
          contributions to a more secure digital future.
        </Paragraph>
      </div>
    </div>
  );
}
