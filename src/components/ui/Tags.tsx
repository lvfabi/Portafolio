import { colors } from "../../lib/constants";

export function Tags({
  items,
  accent = 0,
}: {
  items: readonly string[];
  accent?: number;
}) {
  if (!items.length) return null;
  return (
    <ul className={`tags tone-${colors[accent % colors.length]}`}>
      {items.map((item) => (
        <li className="pill tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
