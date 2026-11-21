import { site } from "../../data/site";
import { anchors } from "../../lib/constants";
import { Icon } from "../icons/Icon";
import { SectionLink } from "../ui/SectionLink";

export function Footer() {
  return (
    <footer className="site-footer site-container">
      <p>{site.footer}</p>
      <SectionLink target={anchors.top} variant="text">
        {site.top}
        <Icon name="up" />
      </SectionLink>
    </footer>
  );
}
