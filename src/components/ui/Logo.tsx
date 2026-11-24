import { profile } from "../../data/profile";
import { publicAsset } from "../../lib/assets";

export function Logo() {
  return (
    <img
      className="logo-heart"
      src={publicAsset(profile.logo)}
      width={48}
      height={48}
      alt=""
    />
  );
}
