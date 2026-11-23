import Image from "next/image";
import Countdown from "@/components/countdown/countdown";
import RegisterButton from "@/components/register/register-button/RegisterButton";
import Section from "@/components/section/Section";
import ListContainer from "@/components/list-container/ListContainer";
import HeroBackground from "@/components/hero-background/HeroBackground";
import CommunityButton from "@/components/community-button/CommunityButton";
import Sticky from "@/components/sticky/Sticky";
import FloatingSymbols from "@/components/floating-symbols/FloatingSymbols";


export default function Home() {
  return (
    <main className="flex flex-col items-center text-center ">
      {/* Header */}
      <Sticky as="header" offset={40} className="mx-auto w-full max-w-6xl fade-in flex flex-col items-center gap-4 sm:gap-6 min-h-svh justify-center px-4 pb-10">
        <HeroBackground />
        <div>
          <p className="text-2xl font-black tracking-widest">ETC</p>
          <p className="text-xs tracking-wider sm:text-sm">
            Engineering Tech Community &middot; OAUSTECH <span className="bg-yellow-500 p-2">Presents</span>
          </p>
        </div>

        <h1 className="flex flex-col items-center gap-2 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl mt-4 sm:mt-8">
          <span>ETC Back To School </span>
          <span className='bg-green text-white p-2'>Hackathon 2027</span>
          {/* <span className="mt-2 inline-block border-4 border-coal bg-green px-3 py-1 text-cream shadow-hard">
            Hackathon 2027
          </span> */}
        </h1>

        <p className="max-w-xl text-base sm:text-lg mt-4 sm:mt-8">
          Join the ETC Hackathon, build something that solves a real problem,
          and win from the prize pool.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row mt-4 sm:mt-8">
          <RegisterButton className="bg-green text-cream">
            Register now &rarr;
          </RegisterButton>
          <CommunityButton />
        </div>
      </Sticky>

            {/* content */}
      <Section
        title="About the hackathon"
        delay={0.1}
        classes="z-60 bg-cream"
        image={{ src: "/images/about.jpg", alt: "Hackathon in progress" }}
      >
        <p className="mb-4 text-2xl font-black leading-snug sm:text-4xl">
          One month. One real problem. Build something that matters.
        </p>
        <p className="mb-6 text-base leading-relaxed sm:text-lg">
          The ETC Welcome Back to School Hackathon brings OAUSTECH students
          together to design, build and ship projects that tackle problems
          around us. Learn from each other, ship something real, and show it
          off to the judges.
        </p>
        <ListContainer
          items={[
            "Join the ETC Welcome Back to School Hackathon.",
            "Build a project that solves a real problem.",
            "Present your project formally to the judges.",
            "The best work wins from the prize pool.",
            "Runs from 12 December to 12 January.",
          ]}
        />
      </Section>

      <Section
        title="Who can participate?"
        delay={0.2}
        reverse
        classes="z-80 bg-cream"
        image={{ src: "/images/participate.jpg", alt: "Students collaborating" }}
      >
        <p className="mb-4 text-2xl font-black leading-snug sm:text-4xl">
          If you study at OAUSTECH, there is a seat for you.
        </p>
        <p className="mb-6 text-base leading-relaxed sm:text-lg">
          This hackathon is open to every student, whatever your department,
          level or experience. Whether you code, design, write or just have a
          good idea, you are welcome to take part. Come alone or bring friends.
        </p>
        <ListContainer
          items={[
            <>
              Every student of <strong>OAUSTECH</strong>.
            </>,
            "You do not have to be an ETC member to take part.",
            "Enter solo, or in a team of at most 5 people.",
          ]}
        />
      </Section>

      <Section
        title="Requirements"
        delay={0.3}
        classes="z-100 bg-cream"
        image={{ src: "/images/requirements.jpg", alt: "Project requirements" }}
      >
        <p className="mb-4 text-2xl font-black leading-snug sm:text-4xl">
          Dummy headline: what every submission needs.
        </p>
        <p className="mb-6 text-base leading-relaxed sm:text-lg">
          Dummy text: a short description of what the judges expect to see
          before a project is considered complete. Replace this with the real
          submission guidelines and any deadlines that apply.
        </p>
        <ListContainer
          items={[
            "Dummy requirement one: a working prototype or demo.",
            "Dummy requirement two: a public code repository.",
            "Dummy requirement three: a short write-up of the problem solved.",
            "Dummy requirement four: a recorded or live presentation.",
          ]}
        />
      </Section>

      <Section
        title="The judges"
        delay={0.4}
        classes="z-110 bg-cream"
      >
        <p className="mb-4 text-2xl font-black leading-snug sm:text-4xl">
          Placeholder: who will review your work.
        </p>
        <p className="mb-6 hidden max-w-2xl text-base leading-relaxed sm:block sm:text-lg">
          Placeholder text: a short note about the panel, what they look for
          and how projects will be scored. Replace this with the real details.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8">
          {[
            "Olouwanifemi Olusoji Tara",
            "Gbadamosi Oluwatomiwa",
            "Judge Name",
            "Judge Name",
            "Judge Name",
            "Judge Name",
          ].map((name, i) => (
            <div
              key={i}
              className={`border-2 border-coal bg-white p-2 pb-3 shadow-hard-sm transition-transform duration-300 hover:rotate-0 sm:p-3 sm:pb-4 ${
                i % 2 === 0 ? "rotate-2" : "-rotate-2"
              }`}
            >
              <Image
                src={`https://picsum.photos/seed/etc-judge-${i + 1}/400/400`}
                alt={name}
                width={400}
                height={400}
                className="aspect-square w-full border-2 border-coal object-cover"
              />
              <p className="mt-2 text-center text-xs font-black sm:text-sm">{name}</p>
              <p className="text-center text-[10px] sm:text-xs">Title, Company</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Strict rule" delay={0.5} classes="z-120 bg-cream">
        <p className="mb-4 inline-block border-2 border-coal bg-green px-3 py-1 text-sm font-black uppercase tracking-widest text-cream sm:text-base">
          Read this
        </p>
        <p className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Any use of AI must be strictly noted and clearly indicated.
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-2xl">
          AI tools are fine to learn from and build with, but we want to see
          your own work. Declare what you used AI for, and where, in your
          write-up and your presentation.
        </p>
        <p className="mt-4 max-w-3xl text-lg font-bold leading-relaxed text-red-700 sm:text-2xl">
          Undeclared AI use can lead to disqualification.
        </p>
      </Section>

          {/* time */}
      <section
        className="time-bg relative z-130 flex flex-col items-center gap-4 w-full px-4 py-12 sm:px-6 sm:py-20"
        style={{ "--d": "0.4s" } as React.CSSProperties}
      >
        <FloatingSymbols variant={0} palette="light" />
        <h2 className="text-center text-2xl font-black sm:text-4xl text-white">Ready to build?</h2>
        <p className="text-center text-lg text-white">
          Join our community and start building today!
        </p>
        <div className="flex flex-col gap-4 sm:flex-row mt-8">
          <RegisterButton className="bg-green text-cream">
            Register now &rarr;
          </RegisterButton>
          <CommunityButton />
        </div>

      {/* Countdown, at the bottom */}
      <div className="w-full max-w-4xl mt-12">
      <Countdown />
      </div>

      </section>

      <footer className="relative z-140 bg-cream w-full p-4 sm:p-8 border-t-4 border-coal text-sm sm:text-base font-bold tracking-wider">
        &copy; 2027 ETC &middot; Engineering Tech Community, OAUSTECH
      </footer>
    </main>
  );
}
