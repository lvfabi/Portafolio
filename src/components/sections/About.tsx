import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { anchors } from "../../lib/constants";
import { Reveal } from "../motion/Reveal";
import { ProfilePortraits } from "./ProfilePortraits";

export function About() {
  return (
    <section
      className="section-space about-grid"
      id={anchors.about}
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <Reveal>
        <ProfilePortraits />
      </Reveal>
      <Reveal className="about-copy" order={1}>
        <h2 id="about-title">{site.about}</h2>
        {profile.about.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <dl className="about-facts">
          {profile.facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
