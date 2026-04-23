"use client";

import { useEffect } from "react";

export default function HeroAnimator() {
  useEffect(() => {
    const t = setTimeout(() => {
      document
        .querySelectorAll(".hero-line-inner")
        .forEach((el) => el.classList.add("visible"));
      document
        .querySelectorAll("#hero .reveal")
        .forEach((el) => el.classList.add("visible"));
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return null;
}
