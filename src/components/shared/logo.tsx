import Link from "next/link";
import SvgIcon from "./svg-icon";

type LogoProps = {
  variant?: "desktop" | "mobile";
};

export default function Logo({ variant = "desktop" }: LogoProps) {
  const width = variant == "desktop" ? 190 : 48;

  const logo = (
    <div className="font-bold uppercase leading-[3rem]">
      {variant === "desktop" ? (
        <SvgIcon id="logo" width={width} height={48} />
      ) : (
        <SvgIcon id="logo-mobile" width={width} height={48} />
      )}
    </div>
  );

  return <Link href="/">{logo}</Link>;
}
