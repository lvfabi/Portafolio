import { useId, useState } from "react";
import { site } from "../../data/site";
import { Icon } from "../icons/Icon";
import { Button } from "../ui/Button";

export function ProjectPrototype({
  embed,
  href,
  projectTitle,
}: {
  embed?: string;
  href?: string;
  projectTitle: string;
}) {
  const [visible, setVisible] = useState(false);
  const frameId = useId();

  return (
    <div className="project-prototype">
      <div className="actions">
        {embed && (
          <Button
            variant="outline"
            aria-expanded={visible}
            aria-controls={frameId}
            onClick={() => setVisible(!visible)}
          >
            {visible ? site.hidePrototype : site.viewPrototype}
            <Icon name={visible ? "up" : "down"} />
          </Button>
        )}
        {href && (
          <Button
            href={href}
            variant="text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.openPrototype}
            <Icon name="arrow" />
          </Button>
        )}
      </div>
      {embed && (
        <div id={frameId} hidden={!visible}>
          {visible && (
            <iframe
              className="project-prototype-frame"
              src={embed}
              title={site.prototypeTitle(projectTitle)}
              referrerPolicy="strict-origin-when-cross-origin"
              width={800}
              height={450}
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      )}
    </div>
  );
}
