// Floating, outlined (text-stroke only) code symbols used as section
// decoration. Purely decorative. Reuses the `.float-icon` animation.
type Sym = {
  glyph: string;
  top: string;
  left: string;
  size: string;
  color: number; // index into palette
  dur: number;
  delay: number;
  rot: number;
  hideOnMobile?: boolean;
};

const PALETTES = {
  default: [
    "var(--green)",
    "var(--blue)",
    "#eab308",
    "#dc2626",
    "var(--coal)",
  ],
  light: ["#ffffff", "#fde047", "#bfdbfe", "#fecaca", "#14130f"],
};

const VARIANTS: Sym[][] = [
  [
    { glyph: "{ }", top: "6%", left: "4%", size: "text-5xl sm:text-8xl", color: 0, dur: 10, delay: 0, rot: -10 },
    { glyph: "</>", top: "72%", left: "84%", size: "text-4xl sm:text-7xl", color: 1, dur: 12, delay: 1, rot: 8 },
    { glyph: "=>", top: "84%", left: "6%", size: "text-4xl sm:text-6xl", color: 2, dur: 11, delay: 2, rot: 6 },
    { glyph: "#", top: "10%", left: "86%", size: "text-5xl sm:text-7xl", color: 3, dur: 13, delay: 0.5, rot: -6 },
    { glyph: "01", top: "46%", left: "93%", size: "text-3xl sm:text-5xl", color: 4, dur: 9, delay: 3, rot: 0, hideOnMobile: true },
    { glyph: "[ ]", top: "52%", left: "1%", size: "text-3xl sm:text-6xl", color: 1, dur: 14, delay: 4, rot: 8, hideOnMobile: true },
  ],
  [
    { glyph: "( )", top: "8%", left: "88%", size: "text-5xl sm:text-7xl", color: 2, dur: 11, delay: 0, rot: 8 },
    { glyph: ";", top: "78%", left: "5%", size: "text-5xl sm:text-8xl", color: 3, dur: 12, delay: 1.5, rot: -12 },
    { glyph: "&&", top: "86%", left: "80%", size: "text-4xl sm:text-6xl", color: 0, dur: 10, delay: 2, rot: 10 },
    { glyph: "{ }", top: "4%", left: "3%", size: "text-4xl sm:text-6xl", color: 4, dur: 9, delay: 0.8, rot: -6 },
    { glyph: "git", top: "44%", left: "92%", size: "text-2xl sm:text-4xl", color: 1, dur: 13, delay: 3, rot: 6, hideOnMobile: true },
    { glyph: "//", top: "48%", left: "1%", size: "text-3xl sm:text-5xl", color: 0, dur: 14, delay: 4, rot: -8, hideOnMobile: true },
  ],
  [
    { glyph: "</>", top: "5%", left: "5%", size: "text-4xl sm:text-7xl", color: 3, dur: 12, delay: 0, rot: 10 },
    { glyph: "[ ]", top: "10%", left: "85%", size: "text-5xl sm:text-7xl", color: 0, dur: 10, delay: 1, rot: -8 },
    { glyph: "{ }", top: "80%", left: "82%", size: "text-5xl sm:text-8xl", color: 2, dur: 13, delay: 2, rot: 12 },
    { glyph: "!=", top: "86%", left: "4%", size: "text-4xl sm:text-6xl", color: 1, dur: 11, delay: 0.5, rot: -6 },
    { glyph: "$", top: "46%", left: "94%", size: "text-3xl sm:text-5xl", color: 4, dur: 9, delay: 3.5, rot: 0, hideOnMobile: true },
    { glyph: "<>", top: "50%", left: "2%", size: "text-3xl sm:text-5xl", color: 2, dur: 14, delay: 4, rot: 8, hideOnMobile: true },
  ],
];

export default function FloatingSymbols({
  variant = 0,
  palette = "default",
}: {
  variant?: number;
  palette?: keyof typeof PALETTES;
}) {
  const set = VARIANTS[variant % VARIANTS.length];
  const colors = PALETTES[palette];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {set.map((s, i) => (
        <span
          key={i}
          className={`float-icon absolute select-none font-black ${s.size} ${
            s.hideOnMobile ? "hidden sm:block" : ""
          }`}
          style={
            {
              top: s.top,
              left: s.left,
              color: "transparent",
              WebkitTextStroke: `2px ${colors[s.color % colors.length]}`,
              opacity: 0.7,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
              "--rot": `${s.rot}deg`,
            } as React.CSSProperties
          }
        >
          {s.glyph}
        </span>
      ))}
    </div>
  );
}
