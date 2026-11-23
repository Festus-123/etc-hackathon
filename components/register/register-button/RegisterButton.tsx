"use client";

import { useEffect, useState } from "react";

const LEVELS = ["100L", "200L", "300L", "400L", "500L"];

const ROLES = [
  "Developer",
  "Designer",
  "Product manager",
  "Data / AI",
  "Hardware / IoT",
  "Other",
];

const field =
  "w-full rounded-lg border border-coal/20 bg-white px-3 py-3 text-base outline-none focus:border-blue";

export default function RegisterButton({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [needsTeam, setNeedsTeam] = useState<boolean | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    setNeedsTeam(null);
    setDone(false);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send Object.fromEntries(new FormData(e.currentTarget)) somewhere
    // (Google Form, Formspree, an API route...). Nothing is stored yet.
    setDone(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`btn-hard cursor-pointer rounded-lg px-6 py-4 text-center text-base font-black tracking-wide sm:text-lg ${className}`}
      >
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="overlay-in absolute inset-0 bg-coal/50"
            onClick={close}
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Register for the hackathon"
            className="drawer-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-cream p-6 text-left sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-blue">
                  Hackathon 2027
                </span>
                <h2 className="text-2xl font-black">Register</h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="cursor-pointer px-3 py-1 text-lg font-black hover:bg-cream-deep"
              >
                &times;
              </button>
            </div>

            {done ? (
              <div className="flex flex-col gap-4">
                <p className="inline-block w-fit bg-green px-2 py-1 text-xs font-black uppercase tracking-widest text-cream">
                  Received
                </p>
                <p className="text-lg font-bold">
                  You are registered. We will contact you with updates.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="btn-hard cursor-pointer rounded-lg bg-blue px-6 py-3 font-black text-cream shadow-hard-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Full name
                  <input name="name" required autoComplete="name" className={field} />
                </label>
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Department
                  <input name="department" required className={field} />
                </label>
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={field}
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Phone / WhatsApp
                  <input name="phone" type="tel" required className={field} />
                </label>
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Level
                  <select name="level" required defaultValue="" className={field}>
                    <option value="" disabled>
                      Select your level
                    </option>
                    {LEVELS.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Role
                  <select name="role" required defaultValue="" className={field}>
                    <option value="" disabled>
                      Select a role
                    </option>
                    {ROLES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-sm font-bold">
                  Team status
                  <select
                    name="team"
                    required
                    defaultValue=""
                    onChange={(e) => setNeedsTeam(e.target.value === "need")}
                    className={field}
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="have">I already have a team</option>
                    <option value="need">I need a team</option>
                  </select>
                </label>
                {needsTeam === true && (
                  <p className="text-sm">
                    We will add you to a group chat so you can meet other
                    students looking for teammates.
                  </p>
                )}
                {needsTeam === false && (
                  <label className="flex flex-col gap-1 text-sm font-bold">
                    Team name
                    <input name="teamName" required className={field} />
                  </label>
                )}
                <button
                  type="submit"
                  className="btn-hard mt-2 cursor-pointer rounded-lg bg-green px-6 py-4 text-lg font-black text-cream shadow-hard-sm"
                >
                  Submit &rarr;
                </button>
              </form>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
