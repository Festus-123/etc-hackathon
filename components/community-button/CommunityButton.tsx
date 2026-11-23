// TODO: replace with the real link.
const COMMUNITY_URL = "#community";


export default function CommunityButton() {
  return (
    <a
      href={COMMUNITY_URL}
      className="btn-hard inline-block border-2 border-coal bg-blue px-6 py-4 text-center text-base font-black tracking-wide text-cream  sm:text-lg"
    >
      Join the community
    </a>
  );
}