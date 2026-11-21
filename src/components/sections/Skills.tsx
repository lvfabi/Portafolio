import { site } from "../../data/site";
import { skills } from "../../data/skills";
import { Marquee } from "../motion/Marquee";
import { Reveal } from "../motion/Reveal";
import { Tags } from "../ui/Tags";

export function Skills() {
  return (
    <section className="section-space" aria-labelledby="skills-title">
      <Reveal>
        <h2 id="skills-title" className="section-title">
          {site.skills}
        </h2>
      </Reveal>
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
    </section>
  );
}
