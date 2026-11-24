import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { publicAsset } from "../../lib/assets";
import { anchors } from "../../lib/constants";
import { Reveal } from "../motion/Reveal";
import { PortfolioImage } from "../ui/PortfolioImage";
import { WindowHeading } from "../ui/WindowHeading";

export function About() {
  return (
    <section
      className="section-space retro-window about-window"
      id={anchors.about}
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <WindowHeading id="about-title" title={site.about} />
      <div className="window-content about-grid">
        <Reveal className="portrait-wrap">
          <div className="portrait">
            <PortfolioImage
              {...profile.portrait}
              src={publicAsset(profile.portrait.src)}
              portrait
            />
          </div>
        </Reveal>
        <Reveal className="about-copy" order={1}>
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
      </div>
    </section>
  );
}
