// Floating, blurred code/dev symbols for the hero. Purely decorative.
const ICONS: {
  glyph: string;
  top: string;
  left: string;
  size: string;
  blur: string;
  color: string;
  dur: number;
  delay: number;
  rot: number;
  hideOnMobile?: boolean;
}[] = [
  { glyph: "</>", top: "8%", left: "6%", size: "text-5xl sm:text-7xl", blur: "blur-[2px]", color: "text-green", dur: 9, delay: 0, rot: -12 },
  { glyph: "{ }", top: "18%", left: "82%", size: "text-4xl sm:text-6xl", blur: "blur-sm", color: "text-blue", dur: 11, delay: 1, rot: 10 },
  { glyph: "=>", top: "62%", left: "8%", size: "text-4xl sm:text-6xl", blur: "blur-[3px]", color: "text-yellow-500", dur: 10, delay: 2, rot: 8 },
  { glyph: "#", top: "75%", left: "86%", size: "text-5xl sm:text-8xl", blur: "blur-md", color: "text-green", dur: 12, delay: 0.5, rot: -8 },
  { glyph: "01", top: "40%", left: "90%", size: "text-3xl sm:text-5xl", blur: "blur-[1px]", color: "text-blue", dur: 8, delay: 3, rot: 0, hideOnMobile: true },
  { glyph: ";", top: "86%", left: "40%", size: "text-5xl sm:text-7xl", blur: "blur-sm", color: "text-coal", dur: 13, delay: 1.5, rot: 14 },
  { glyph: "( )", top: "4%", left: "45%", size: "text-3xl sm:text-5xl", blur: "blur-[3px]", color: "text-yellow-500", dur: 10, delay: 2.5, rot: -6, hideOnMobile: true },
  { glyph: "[ ]", top: "48%", left: "2%", size: "text-3xl sm:text-5xl", blur: "blur-md", color: "text-blue", dur: 14, delay: 4, rot: 6, hideOnMobile: true },
  { glyph: "git", top: "28%", left: "20%", size: "text-2xl sm:text-4xl", blur: "blur-sm", color: "text-coal", dur: 9, delay: 3.5, rot: -10, hideOnMobile: true },
  { glyph: "&&", top: "68%", left: "68%", size: "text-3xl sm:text-5xl", blur: "blur-[2px]", color: "text-green", dur: 11, delay: 1, rot: 12, hideOnMobile: true },
];

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
    >
      {ICONS.map((icon) => (
        <span
          key={icon.glyph}
          className={`float-icon absolute select-none font-black opacity-25 ${icon.size} ${icon.blur} ${icon.color} ${
            icon.hideOnMobile ? "hidden sm:block" : ""
          }`}
          style={
            {
              top: icon.top,
              left: icon.left,
              "--dur": `${icon.dur}s`,
              "--delay": `${icon.delay}s`,
              "--rot": `${icon.rot}deg`,
            } as React.CSSProperties
          }
        >
          {icon.glyph}
        </span>
      ))}
    </div>
  );
}
