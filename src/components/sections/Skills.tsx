import { site } from "../../data/site";
import { skills } from "../../data/skills";
import { Marquee } from "../motion/Marquee";
import { Reveal } from "../motion/Reveal";
import { Tags } from "../ui/Tags";
import { WindowHeading } from "../ui/WindowHeading";

export function Skills() {
  return (
    <section
      className="section-space retro-window skills-window"
      aria-labelledby="skills-title"
    >
      <WindowHeading id="skills-title" title={site.skills} />
      <div className="window-content">
        <div className="skills-grid">
          {skills.map(({ title, items }, index) => (
            <Reveal key={title} className="skills-group" order={index}>
              <h3>{title}</h3>
              <Tags items={items} accent={index} />
            </Reveal>
          ))}
        </div>
        <Marquee
          items={skills.flatMap(({ items }) => items)}
          label={site.skills}
        />
      </div>
    </section>
  );
}
