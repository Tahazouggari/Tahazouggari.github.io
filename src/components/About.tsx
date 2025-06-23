"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Heading } from "@/components/Heading"; // Add this import
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
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
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
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
  <title>who i am?</title>
  <Heading as="h2" className="text-xl font-bold mt-4">
    Who I Am ?
  </Heading>
  <Paragraph className="mt-4">
    I&apos;m a second-year Master&apos;s student in Computer Science at ENSICAEN, specializing in Cybersecurity and Digital Payment Systems. My academic background combines a strong foundation in computer science with advanced training in information security, secure application development, and digital transaction systems. I&apos;m particularly interested in how security principles apply to the evolving world of e-payment technologies.
  </Paragraph>
  <Heading as="h2" className="text-xl font-bold mt-6">
    My Passion for Cybersecurity
  </Heading>
  <Paragraph className="mt-4">
    Cybersecurity isn&apos;t just a field I study—it&apos;s something I genuinely love. I&apos;m passionate about ethical hacking, penetration testing, and system hardening. I enjoy diving deep into how systems work, finding vulnerabilities, and developing ways to fix them. Platforms like HackTheBox, TryHackMe, and CTF challenges are part of my regular learning routine. They keep me sharp and help me think like both an attacker and a defender.
  </Paragraph>
  <Paragraph className="mt-4">
    I have hands-on experience using tools like Nmap, Wireshark, Burp Suite, Metasploit, and John the Ripper, and I&apos;m comfortable in Linux-based environments. Whether it&apos;s scripting in Python, reverse engineering, or exploring web app flaws with OWASP Top 10, I&apos;m constantly building skills to be a well-rounded cybersecurity professional.
  </Paragraph>
  <Heading as="h2" className="text-xl font-bold mt-6">
    What Drives Me
  </Heading>
  <Paragraph className="mt-4">
    I love solving problems—technical, logical, and strategic. I get excited by real-world challenges that require both creativity and analytical thinking. I see cybersecurity as a never-ending puzzle, and I&apos;m the kind of person who won&apos;t stop until I&apos;ve cracked it. I also enjoy working on small personal projects, like automating tasks with Bash or building security testing tools in Python.
  </Paragraph>
  <Heading as="h2" className="text-xl font-bold mt-6">
    Outside the Screen
  </Heading>
  <Paragraph className="mt-4">
    Outside of tech, I&apos;m passionate about fitness and strength training. Hitting the gym is part of my daily routine—it keeps me disciplined, motivated, and focused.
  </Paragraph>
  <Heading as="h2" className="text-xl font-bold mt-6">
    My Goal ..
  </Heading>
  <Paragraph className="mt-4">
    I aim to become a skilled cybersecurity engineer, capable of protecting digital assets and helping organizations build more secure systems. I&apos;m especially drawn to roles in offensive security, penetration testing, or secure software development in fintech or high-security industries. My mission is to always keep learning, improving, and contributing to a safer digital future.
  </Paragraph>
</div>

    </div>
  );
}
