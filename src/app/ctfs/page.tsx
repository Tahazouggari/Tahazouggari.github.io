"use client";
import React from "react";

const ctfs = [
  {
    title: "PentesterLab Challenge 1",
    pdf: "/pdf/pentesterlab-challenge1.pdf",
  },
  {
    title: "PentesterLab Challenge 2",
    pdf: "/pdf/pentesterlab-challenge2.pdf",
  },
  // Add more as you create them
];

export default function CTFsPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">CTF Writeups</h1>
      <p className="mb-8 text-gray-700">
        Here you can find PDF writeups for challenges I solved on PentesterLab, Root-Me, and more platforms coming soon.
      </p>
      <div className="space-y-12">
        {ctfs.map((ctf, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-white shadow">
            <h2 className="text-xl font-semibold mb-2">{ctf.title}</h2>
            <iframe
              src={ctf.pdf}
              width="100%"
              height="400px"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
              title={ctf.title}
            />
            <div className="mt-2">
              <a
                href={ctf.pdf}
                download
                className="text-blue-600 underline"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}