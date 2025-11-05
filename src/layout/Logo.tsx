import { useEffect, useState } from "react";

interface ILogoProps {
  isCollapsed: boolean;
}

function Logo({ isCollapsed }: ILogoProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    let timeout: number;
    if (!isCollapsed) {
      timeout = setTimeout(() => setImageSrc("/logo-large.svg"), 200);
    } else {
      setImageSrc("/logo-small.svg");
    }

    return () => clearTimeout(timeout);
  }, [isCollapsed]);

  return (
    <div className="hidden px-400 py-300 lg:block">
      <img src={imageSrc as string} alt="Logo of the application" />
    </div>
  );
}

export default Logo;
