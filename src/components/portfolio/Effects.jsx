"use client";

import { useEffect, useState } from "react";

// เอฟเฟกต์ทั่วทั้งหน้า: scroll progress, reveal on scroll, cursor glow, loader
export default function Effects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700);

    const bar = document.querySelector(".scroll-progress");
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const glow = document.querySelector(".cursor-glow");
    const onMove = (e) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("pointermove", onMove);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div id="loader" className={loaded ? "done" : ""} aria-hidden="true">
        <div className="loader-mark">
          CS<span>.</span>
        </div>
      </div>
    </>
  );
}
