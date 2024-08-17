type SvgIconProps = {
  width: number;
  height: number;
  id: "logo" | "logo-mobile";
  className?: string;
};

export default function SvgIcon({
  width,
  height,
  id,
  className = "",
}: SvgIconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={`${className} [&_path]:fill-current`}
    >
      <use xlinkHref={`/icons/svg-sprite.svg#${id}`} />
    </svg>
  );
}
