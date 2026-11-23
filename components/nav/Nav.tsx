"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import RegisterButton from "@/components/register/register-button/RegisterButton";

type Theme = "dark" | "light";

// The bar takes on the look of whatever section is under it. Sections mark
// themselves with data-nav="dark" | "light".
const THEMES: Record<Theme, { bar: string; link: string; cta: string }> = {
  dark: {
    bar: "bg-navy/70 text-white border-white/10",
    link: "hover:text-blue-soft",
    cta: "bg-white text-navy",
  },
  light: {
    bar: "bg-white/75 text-navy border-navy/10",
    link: "hover:text-blue",
    cta: "bg-blue text-white",
  },
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const stack = document.elementsFromPoint(window.innerWidth / 2, 28);
      for (const el of stack) {
        const t = el.closest<HTMLElement>("[data-nav]")?.dataset.nav;
        if (t === "dark" || t === "light") {
          setTheme(t);
          return;
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const t = THEMES[theme];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-200 border-b backdrop-blur-md transition-colors duration-300 ${t.bar}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a href="#home" className="text-lg font-black tracking-widest">
          ETC
        </a>

        <ul className="hidden items-center gap-6 text-sm font-bold lg:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`transition-colors ${t.link}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <RegisterButton className={`${t.cta} px-4! py-2! text-sm!`}>
            Register
          </RegisterButton>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="cursor-pointer rounded-lg px-3 py-2 text-lg font-black leading-none lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col border-t border-current/10 text-left text-sm font-bold lg:hidden">
          {NAV.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
