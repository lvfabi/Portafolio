import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { publicAsset } from "../../lib/assets";
import { anchors } from "../../lib/constants";
import { Decorative } from "../icons/Decorative";
import { Icon } from "../icons/Icon";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";

export function Contact() {
  const cv = publicAsset(profile.cv);
  const { copied, copy } = useCopyToClipboard();

  return (
    <section
      className="section-space contact"
      id={anchors.contact}
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <Reveal className="contact-inner">
        <Decorative kind="flower" className="contact-flower" />
        <h2 id="contact-title">
          <em>{site.contactTitle}</em>
        </h2>
        <div className="actions contact-actions">
          {profile.email && (
            <Button
              href={`mailto:${profile.email}`}
              onClick={() => void copy(profile.email)}
            >
              <Icon name="mail" />
              {site.email}
            </Button>
          )}
          {profile.linkedin && (
            <Button href={profile.linkedin} variant="outline">
              <Icon name="linkedin" />
              {site.linkedin}
            </Button>
          )}
          {profile.github && (
            <Button href={profile.github} variant="outline">
              <Icon name="github" />
              {site.github}
            </Button>
          )}
          {cv && (
            <Button href={cv} variant="outline" download>
              <Icon name="download" />
              {site.cv}
            </Button>
          )}
        </div>
        <p className="contact-status" role="status">
          {copied ? site.copied : ""}
        </p>
      </Reveal>
    </section>
  );
}
