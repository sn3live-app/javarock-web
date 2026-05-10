import Image from "next/image";
import Link from "next/link";

export function BrandMark({ size = "normal" }: { size?: "normal" | "large" }) {
  const imageSize = size === "large" ? 88 : 40;

  return (
    <Link className="brand-mark" href="/" aria-label="JavaRock home">
      <Image
        src="/javarock-icon.png"
        alt=""
        width={imageSize}
        height={imageSize}
        priority={size === "large"}
        className="brand-mark__image"
      />
      <span className={size === "large" ? "brand-mark__text large" : "brand-mark__text"}>
        JavaRock
      </span>
    </Link>
  );
}
