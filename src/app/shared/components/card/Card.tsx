import { useState } from "react";
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
  link?: string;
  buttonText?: string;
  githubFrontEnd?: string;
  githubBackEnd?: string;
  navigate?: boolean;
  frontendOnly?: boolean;
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
  link,
  imageVariant,
  title,
  buttonText,
  githubFrontEnd,
  githubBackEnd,
  navigate,
  frontendOnly,
}: CardComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

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

          <p>{description}</p>
          {hashtag && (
            <span className="pt-2">
              {hashtag}
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          )}

          {imageSrc && imageVariant === "image" && (
            <div className="mt-3 flex justify-center relative">
              <img
                src={imageSrc}
                alt={imageAlt || "Image"}
                className={`rounded-lg max-w-[100%] cursor-pointer transition-opacity duration-1000 ${
                  isImageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setIsImageLoading(false)}
                onClick={() => setIsOpen(true)}
                loading="lazy"
              />
            </div>
          )}

          {imageSrc && imageVariant === "GIF" && (
            <div className="mt-3 flex justify-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg w-1/3 h-w-1/3 cursor-pointer"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
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
      {imageSrc && imageAlt && (
        <ImageModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          src={imageSrc}
          alt={imageAlt}
        />
      )}
    </>
  );
};
