import Image from "next/image";
import Sticky from "@/components/sticky/Sticky";

export default function Section({
  title,
  delay,
  children,
  classes,
  image,
  reverse,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
  classes?: string;
  image?: { src: string; alt: string };
  reverse?: boolean;
}) {
  return (
    <Sticky
      className={`fade-in mx-auto w-full overflow-hidden p-4 py-12 text-left sm:p-8 min-h-svh flex flex-col items-center justify-center ${classes || ""}`}
      style={{ "--d": `${delay}s` } as React.CSSProperties}
    >
      <div
        className={`flex w-full max-w-5xl flex-col items-center gap-8 md:gap-16 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:flex-1">
          <h2 className="mb-4 inline-block border-b-4 border-green pb-1 text-xl font-black sm:text-2xl">
            {title}
          </h2>
          {children}
        </div>

        {image && (
          <div className="w-full max-w-[16rem] sm:max-w-xs md:w-1/3 md:max-w-sm md:shrink-0">
            {/* framed, slightly tilted photo */}
            <div
              className={`border-2 border-coal bg-white p-2 pb-8 shadow-hard-sm transition-transform duration-300 hover:rotate-0 sm:p-3 sm:pb-12 ${
                reverse ? "-rotate-3" : "rotate-3"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="aspect-4/3 w-full border-2 border-coal object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </Sticky>
  );
}
