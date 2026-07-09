import { useState, Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { ImageModal } from "../";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type PinStatus = "public" | "private" | "deprecated";

const pinStyles: Record<PinStatus, string> = {
  public: "bg-green-500/20 text-green-400 border-green-500",
  private: "bg-gray-500/20 text-gray-400 border-gray-500",
  deprecated: "bg-red-500/20 text-red-400 border-red-500",
};

interface CardImage {
  src: string;
  alt: string;
  variant?: "image" | "GIF";
}

interface CardComponentProps {
  profileImage?: string;
  name?: string;
  date?: string;
  username?: string;
  description?: string;
  title?: string;
  hashtag?: string;
  imageSrc?: string;
  imageVariant?: string;
  imageAlt?: string;
  images?: CardImage[];
  link?: string;
  buttonText?: string;
  githubFrontEnd?: string;
  githubBackEnd?: string;
  navigate?: boolean;
  frontendOnly?: boolean;
  lgSize?: string;
  pin?: PinStatus;
}

export const CardComponent = ({
  profileImage,
  name,
  date,
  username,
  description,
  hashtag,
  imageSrc,
  imageAlt,
  images,
  link,
  imageVariant,
  title,
  buttonText,
  githubFrontEnd,
  githubBackEnd,
  navigate,
  frontendOnly,
  lgSize,
  pin,
}: CardComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { t } = useTranslation();

  const galleryImages = images?.length ? images : (imageSrc ? [{ src: imageSrc, alt: imageAlt || "Image", variant: imageVariant as "image" | "GIF" | undefined }] : []);
  const currentImage = galleryImages[selectedImageIndex];

  return (
    <>
      <Card className="bg-transparent px-4 my-3 border-2 border-primary">
        <CardHeader className="justify-between">
          <div className="flex gap-4 mt-2">
            <Avatar
              isBordered
              radius="full"
              color="primary"
              size="md"
              src={profileImage}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <div className="flex flex-col sm:flex-row justify-start  items-center">
                <h4 className="text-small text-white font-semibold leading-none">
                  {name}
                </h4>
                <p className="text-xs tracking-tight text-start text-default-400 -ml-10 sm:ml-2">
                  • {date}
                </p>
                {pin && (
                  <span className={`ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded border ${pinStyles[pin]}`}>
                    {t(`projects.pin.${pin}`, { ns: "projects" })}
                  </span>
                )}
              </div>
              <h5 className="text-small tracking-tight text-default-400">
                {username}
              </h5>
            </div>
          </div>
          {link && !navigate && (
            <Button
              color="primary"
              as="a"
              href={link}
              radius="full"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="solid"
            >
              {buttonText}
            </Button>
          )}

          {link && navigate && (
            <Button
              color="primary"
              as="a"
              href={link}
              radius="full"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="solid"
              isIconOnly
            >
              <FiExternalLink size={18} />
            </Button>
          )}
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          {title && (
            <p className="text-2xl font-semibold text-white mb-2">{title}</p>
          )}

          <p>{description?.split("\n").map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}</p>
          {hashtag && (
            <span className="pt-2">
              {hashtag}
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          )}

          {galleryImages.length === 1 && galleryImages[0].variant === "GIF" && (
            <div className="mt-3 flex justify-center aspect-[16/9]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="rounded-lg w-1/3 h-w-1/3 cursor-pointer"
                onClick={() => {
                  setSelectedImageIndex(0);
                  setIsOpen(true);
                }}
              />
            </div>
          )}

          {galleryImages.length === 1 && galleryImages[0].variant !== "GIF" && (
            <div className="mt-3 flex justify-center relative aspect-[16/9]" >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className={`rounded-lg max-w-[100%] cursor-pointer transition-opacity duration-1000 ${
                  isImageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setIsImageLoading(false)}
                onClick={() => {
                  setSelectedImageIndex(0);
                  setIsOpen(true);
                }}
                loading="lazy"
              />
            </div>
          )}

          {galleryImages.length === 2 && (
            <div className="mt-3 grid grid-cols-2 gap-1">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[16/9]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="rounded-lg w-full h-full object-cover cursor-pointer"
                    onClick={() => {
                      setSelectedImageIndex(idx);
                      setIsOpen(true);
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {galleryImages.length >= 3 && (
            <div className="mt-3 grid grid-cols-2 gap-1">
              <div className="relative row-span-2 min-h-[300px]">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="rounded-lg w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImageIndex(0);
                    setIsOpen(true);
                  }}
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9]">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="rounded-lg w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImageIndex(1);
                    setIsOpen(true);
                  }}
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9]">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="rounded-lg w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImageIndex(2);
                    setIsOpen(true);
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </CardBody>
        <CardFooter className="gap-3 justify-center">
          {githubFrontEnd && frontendOnly && (
            <div>
              <a
                href={githubFrontEnd}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-highlight transition-colors duration-300 ease-in-out"
              >
                Check out this project on GitHub!
              </a>
            </div>
          )}

          {githubBackEnd && githubBackEnd && (
            <div className="flex flex-col">
              <a
                href={githubBackEnd}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-highlight transition-colors duration-300 ease-in-out"
              >
                Checkout this project BackEnd on GitHub!
              </a>
              <a
                href={githubBackEnd}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-highlight transition-colors duration-300 ease-in-out"
              >
                Checkout this project FrontEnd on GitHub!
              </a>
            </div>
          )}
        </CardFooter>
      </Card>
      {currentImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          src={currentImage.src}
          alt={currentImage.alt}
          lgSize={lgSize}
          hasPrev={galleryImages.length > 1 && selectedImageIndex > 0}
          hasNext={galleryImages.length > 1 && selectedImageIndex < galleryImages.length - 1}
          onPrev={() => setSelectedImageIndex((prev) => prev - 1)}
          onNext={() => setSelectedImageIndex((prev) => prev + 1)}
        />
      )}
    </>
  );
};
