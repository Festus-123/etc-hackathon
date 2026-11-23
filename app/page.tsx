import Countdown from "@/components/countdown/countdown";
import RegisterButton from "@/components/register/register-button/RegisterButton";
import Section from "@/components/section/Section";
import ListContainer from "@/components/list-container/ListContainer";
import CommunityButton from "@/components/community-button/CommunityButton";
import Sticky from "@/components/sticky/Sticky";
import FloatingSymbols from "@/components/floating-symbols/FloatingSymbols";
import Nav from "@/components/nav/Nav";
import {
  AUDIENCE,
  CAN_BUILD,
  CHALLENGES,
  CHALLENGES_NOTE,
  CRITERIA,
  EMAIL,
  FAQ,
  KEY_DATES,
  RULES,
  STEPS,
  TBA,
  TIMELINE,
  TRACKS,
  UPDATES,
} from "@/lib/content";

const card = "rounded-xl border border-navy/10 bg-white p-5 shadow-hard-sm";
const lead = "mb-4 text-2xl font-black leading-snug sm:text-4xl";
const body = "text-base leading-relaxed sm:text-lg";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <Nav />

      {/* Home */}
      <Sticky
        as="header"
        id="home"
        offset={0}
        dataNav="dark"
        className="hero-bg flex min-h-svh w-full flex-col items-center justify-center px-4 pt-24 pb-10 text-white"
      >
        <FloatingSymbols variant={0} palette="light" />
        <div className="fade-in flex w-full max-w-5xl flex-col items-center gap-4 sm:gap-6">
          <p className="text-xs font-bold uppercase tracking-widest sm:text-sm">
            Engineering Tech Community &middot; OAUSTECH
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            ETC Back-to-School Hackathon 2027
          </h1>
          <p className="max-w-xl text-base text-white/85 sm:text-lg">
            A hackathon for OAUSTECH students. Find a real problem, team up,
            build a solution, and pitch it.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <RegisterButton className="bg-white text-navy">
              Register now &rarr;
            </RegisterButton>
            <CommunityButton
              href="#tracks"
              label="See the challenges"
              className="bg-white/10 text-white ring-1 ring-white/40"
            />
          </div>

          <dl className="mt-6 grid w-full grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
            {KEY_DATES.map((d) => (
              <div key={d.label} className="rounded-lg bg-white/10 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-white/70 sm:text-xs">
                  {d.label}
                </dt>
                <dd className="mt-1 text-sm font-black sm:text-base">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Sticky>

      {/* About */}
      <Section
        id="about"
        title="About the hackathon"
        delay={0.1}
        classes="z-60 bg-cream"
        image={{ src: "/images/about.jpg", alt: "Hackathon in progress" }}
      >
        <p className="mb-4 text-3xl font-black leading-tight sm:text-5xl">
          Think. Build. Collaborate. Pitch.
        </p>
        <p className={`${body} mb-6`}>
          The ETC Back-to-School Hackathon brings OAUSTECH students together to
          solve real-world problems. You pick a challenge, build a solution with
          your team in your own time, submit it, and come pitch it in person.
          You do not need to be a programmer. We want engineers, designers,
          researchers, thinkers and storytellers too.
        </p>
        <ListContainer
          items={[
            "Practice solving a real problem from start to finish.",
            "Work with students from other departments.",
            "Build something you can show and talk about.",
            "Learn how to present your idea to judges.",
          ]}
        />
      </Section>

      {/* Who is it for */}
      <Section
        id="who"
        title="Who is it for?"
        delay={0.2}
        reverse
        classes="z-70 bg-cream"
        image={{ src: "/images/participate.jpg", alt: "Students collaborating" }}
      >
        <ul className="flex flex-col gap-6">
          {AUDIENCE.map((a) => (
            <li key={a.title} className="border-l-4 border-blue pl-4">
              <p className="text-2xl font-black sm:text-3xl">{a.title}</p>
              <p className="mt-1 text-base sm:text-xl">{a.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm">
          ETC is a student-led, multidisciplinary tech community at the Olusegun
          Agagu University of Science and Technology (OAUSTECH).
        </p>
      </Section>

      {/* Tracks */}
      <Section id="tracks" title="Tracks and challenges" delay={0.3} classes="z-80 bg-cream">
        <p className={`${body} mb-6 max-w-3xl`}>
          Pick a track and solve a real problem in it. What matters is that your
          solution solves a real problem.
        </p>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {TRACKS.map((t) => (
            <div key={t.title} className={card}>
              <p className="text-xl font-black sm:text-2xl">{t.title}</p>
              <p className="mt-2 text-base sm:text-lg">{t.text}</p>
            </div>
          ))}
        </div>

        {CHALLENGES.length ? (
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {CHALLENGES.map((c) => (
              <div key={c.title} className={`${card} bg-blue-soft`}>
                <p className="text-lg font-black">{c.title}</p>
                <p className="mt-1">{c.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mb-6 inline-block rounded-lg bg-blue-soft px-4 py-2 text-sm font-bold sm:text-base">
            {CHALLENGES_NOTE}
          </p>
        )}

        <p className="mb-2 text-sm font-black uppercase tracking-widest">
          What you can build
        </p>
        <ListContainer items={CAN_BUILD} />
      </Section>

      {/* How it works */}
      <Section
        id="how"
        dark
        title="How it works"
        delay={0.4}
        classes="z-100 bg-navy text-white"
      >
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.title} className="border-t border-white/20 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-soft">
                Step {i + 1}
              </p>
              <p className="mt-1 text-xl font-black sm:text-2xl">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-t border-white/20 pt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-soft">
            Timeline
          </p>
          <ul className="mt-3 grid gap-4 sm:grid-cols-3">
            {TIMELINE.map((t) => (
              <li key={t.date}>
                <p className="font-black">{t.date}</p>
                <p className="text-sm text-white/80">{t.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Rules */}
      <Section
        id="rules"
        title="Rules and guidelines"
        delay={0.5}
        classes="z-110 bg-cream"
        image={{ src: "/images/requirements.jpg", alt: "Project requirements" }}
      >
        <div className="flex flex-col gap-2 md:min-h-[40rem]">
          {RULES.map((r, i) => (
            <details
              key={r.title}
              name="rules"
              open={i === 0}
              className="group rounded-lg border border-navy/10 bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-base font-black sm:text-lg">
                {r.title}
                <span className="text-blue transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-4 pb-4">
                <ListContainer items={r.items} />
              </div>
            </details>
          ))}

          <details
            name="rules"
            className="group rounded-lg border border-navy/10 bg-white"
          >
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-base font-black sm:text-lg">
              How judges score
              <span className="text-blue transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="flex flex-col px-4 pb-3">
              {CRITERIA.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between border-t border-navy/10 py-2 text-base font-bold sm:text-xl"
                >
                  <span>{c.name}</span>
                  <span className="text-blue">{c.weight}%</span>
                </li>
              ))}
            </ul>
            <p className="px-4 pb-3 text-xs">Proposed, to be confirmed.</p>
          </details>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" delay={0.6} classes="z-120 bg-cream">
        <div className="grid items-start gap-3 sm:grid-cols-2">
          {FAQ.map(([q, a]) => (
            <details
              key={q}
              className="rounded-lg border border-navy/10 bg-white"
            >
              <summary className="cursor-pointer px-4 py-3 text-sm font-black">
                {q}
              </summary>
              <p className="px-4 pb-3 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact and updates" delay={0.7} classes="z-130 bg-cream">
        <p className={lead}>Questions? Reach the ETC team.</p>
        <p className={`${body} mb-6`}>
          Email{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-black underline decoration-blue decoration-4"
          >
            {EMAIL}
          </a>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className={card}>
            <p className="mb-2 font-black">Updates</p>
            {UPDATES.length ? (
              <ul className="flex flex-col gap-2 text-sm">
                {UPDATES.map((u) => (
                  <li key={u.title}>
                    <span className="font-black">{u.date}</span> &middot; {u.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">No announcements yet.</p>
            )}
          </div>
          <div className={card}>
            <p className="mb-2 font-black">Judges, mentors and partners</p>
            <p className="text-sm">
              {TBA}. We will publish them here once they are confirmed.
            </p>
          </div>
        </div>

        <details id="privacy" className="mt-6 max-w-3xl text-sm">
          <summary className="cursor-pointer font-black">Privacy notice</summary>
          <p className="mt-2">
            ETC collects your name, email, phone number, department, level and
            skills when you register or submit a project. We use this only to
            run the hackathon: to contact you, form teams, handle submissions
            and judging, and share updates. We do not sell your information.
            Only the ETC organising team can see it. Email {EMAIL} to ask to
            see or delete your information.
          </p>
        </details>
      </Section>

      {/* Call to action + countdown */}
      <section
        data-nav="dark"
        className="time-bg relative z-140 flex w-full flex-col items-center gap-4 px-4 py-12 sm:px-6 sm:py-20"
        style={{ "--d": "0.4s" } as React.CSSProperties}
      >
        <FloatingSymbols variant={1} palette="light" />
        <h2 className="text-center text-2xl font-black text-white sm:text-4xl">
          Ready to build something that matters?
        </h2>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <RegisterButton className="bg-white text-navy">
            Register now &rarr;
          </RegisterButton>
          <CommunityButton
            label="Ask a question"
            href={`mailto:${EMAIL}`}
            className="bg-white/10 text-white ring-1 ring-white/40"
          />
        </div>
        <div className="mt-12 w-full max-w-4xl">
          <Countdown />
        </div>
      </section>

      {/* Footer */}
      <footer
        data-nav="light"
        className="relative z-150 w-full border-t border-navy/10 bg-cream px-4 py-10 text-left sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-widest">ETC</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy/75">
              Organised by Engineering Tech Community (ETC), Olusegun Agagu
              University of Science and Technology (OAUSTECH).
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue">
              Links
            </p>
            <ul className="flex flex-col gap-2 text-sm font-bold">
              <li><a href="#rules" className="hover:text-blue">Rules</a></li>
              <li><a href="#privacy" className="hover:text-blue">Privacy Notice</a></li>
              <li><a href="#faq" className="hover:text-blue">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue">
              Contact
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="break-all text-sm font-bold hover:text-blue"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-6xl border-t border-navy/10 pt-4 text-xs text-navy/60">
          &copy; 2027 Engineering Tech Community
        </p>
      </footer>
    </main>
  );
}
