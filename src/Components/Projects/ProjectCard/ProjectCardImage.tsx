import React, { useState } from "react";

interface Props {
  isLeftSided?: boolean;
  desktopImageSrc?: string;
  mobileImageSrc?: string;
  imageAlt?: string;
}

const ProjectCardImage: React.FC<Props> = ({
  isLeftSided,
  desktopImageSrc,
  mobileImageSrc,
  imageAlt,
}) => {
  const [desktopImageIsLoading, setDesktopImageIsLoading] = useState(true);
  const [mobileImageIsLoading, setMobileImageIsLoading] = useState(true);

  const onDesktopImageLoad = () => {
    setDesktopImageIsLoading(false);
  };
  const onMobileImageLoad = () => {
    setMobileImageIsLoading(false);
  };
  return (
    <div
      className="project-image-container relative"
      data-aos={`${isLeftSided ? "fade-right" : "fade-left"}`}
    >
      {desktopImageIsLoading ? (
        <div className="desktop-screenshot w-full rounded sm:rounded-lg lg:rounded-xl image-placeholder"></div>
      ) : null}
      {mobileImageIsLoading ? (
        <div className="mobile-screenshot absolute bottom-0 image-placeholder"></div>
      ) : null}
      <img
        src={desktopImageSrc}
        alt={imageAlt + " desktop"}
        className={`desktop-screenshot w-full rounded sm:rounded-lg lg:rounded-xl${
          desktopImageIsLoading ? " hide-image" : ""
        }`}
        onLoad={() => onDesktopImageLoad()}
      />
      <img
        src={mobileImageSrc}
        alt={imageAlt + " mobile"}
        className={`mobile-screenshot absolute bottom-0${
          mobileImageIsLoading ? " hide-image" : ""
        }`}
        onLoad={() => onMobileImageLoad()}
      />
    </div>
  );
};

export default ProjectCardImage;
