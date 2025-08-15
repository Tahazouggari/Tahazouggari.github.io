"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">© {new Date().getFullYear()} </span>
      <span className="mx-2">|</span>
      <span className="text-neutral-400">
        Last Updated: August 14, 2025
      </span>
    </div>
  );
};
