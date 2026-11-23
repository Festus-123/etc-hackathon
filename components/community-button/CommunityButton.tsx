export default function CommunityButton({
  className = "bg-blue text-cream",
  href = "#contact",
  label = "Join the community",
}: {
  className?: string;
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={`btn-hard inline-block rounded-lg px-6 py-4 text-center text-base font-black tracking-wide sm:text-lg ${className}`}
    >
      {label}
    </a>
  );
}
