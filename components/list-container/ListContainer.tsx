export default function ListContainer({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3 text-sm leading-relaxed sm:text-base">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="font-black text-green">&rarr;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}