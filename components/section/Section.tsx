import Image from "next/image";
import Sticky from "@/components/sticky/Sticky";

export default function Section({
  id,
  dark,
  title,
  delay,
  children,
  classes,
  image,
  reverse,
}: {
  id?: string;
  dark?: boolean;
  title: string;
  delay: number;
  children: React.ReactNode;
  classes?: string;
  image?: { src: string; alt: string };
  reverse?: boolean;
}) {
  return (
    <Sticky
      id={id}
      dataNav={dark ? "dark" : "light"}
      className={`fade-in mx-auto w-full overflow-hidden p-4 pt-20 pb-12 text-left sm:p-8 sm:pt-24 min-h-svh flex flex-col items-center justify-center ${classes || ""}`}
      style={{ "--d": `${delay}s` } as React.CSSProperties}
    >
      <div
        className={`flex w-full max-w-5xl flex-col items-center gap-8 md:gap-16 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:flex-1">
          <h2 className="mb-4 inline-block border-b-4 border-blue pb-1 text-xl font-black sm:text-2xl">
            {title}
          </h2>
          {children}
        </div>

        {image && (
          <div className="w-full max-w-xs sm:max-w-md md:w-2/5 md:max-w-lg md:shrink-0">
            {/* framed, slightly tilted photo */}
            <div
              className={`rounded-xl bg-white p-2 pb-8 shadow-hard transition-transform duration-300 hover:rotate-0 sm:p-3 sm:pb-16 ${
                reverse ? "-rotate-3" : "rotate-3"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="aspect-4/3 w-full rounded-lg object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </Sticky>
  );
}
