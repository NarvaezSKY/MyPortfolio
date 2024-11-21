import { useState, Fragment } from "react";
import { ImageModal } from "../../shared/components";
import { useTranslation } from "react-i18next";
import competition from "../../../assets/about/ss-competition.webp";
import winners from "../../../assets/about/ss-winners.webp";
import team from "../../../assets/about/team.webp";

export const SENASoft = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const { t } = useTranslation();
  const first = t("senaSoft.first", { ns: "about" });
  return (
    <>
      <div className="flex items-center text-gray-50 mt-1 rounded-full">
        <p>
          {t("senaSoft.description", { ns: "about" })
            .split("{{firstPlace}}")
            .map((part, index) => (
              <Fragment key={index}>
                {part}
                {index === 0 ? (
                  <span className="font-semibold text-primary hover:underline">
                    <a
                      href="https://portfolio-sory.onrender.com/"
                      target="_blank"
                      className="text-primary hover:underline hover:text-primary"
                    >
                      {first}
                    </a>
                  </span>
                ) : null}
              </Fragment>
            ))}
        </p>
      </div>
      <div className="flex flex-col mt-10 mx-2">
        <div className="flex sm:flex-row flex-col">
          <div className="-rotate-6 mt-3 z-40 ">
            <img
              src={competition}
              alt="competition"
              className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer max-w-[70%px]"
              onClick={() => {
                setOpen(true);
                setImage(competition);
              }}
              loading="lazy"
            />
          </div>
          <div className="rotate-6">
            <img
              src={winners}
              alt="winners"
              className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer sm:max-w-[400px] sm:-ml-14"
              onClick={() => {
                setOpen(true);
                setImage(winners);
              }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-center z-40 sm:rotate-0 -rotate-6 sm:-mt-8 mt-0">
          <img
            src={team}
            alt="team"
            className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer sm:max-w-[500px]"
            onClick={() => {
              setOpen(true);
              setImage(team);
            }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex items-centern justify-center text-gray-50 mt-6 rounded-full text-justify">
        <a
          href="https://drive.google.com/file/d/1aSqGW665QRdo0QOKW3fd9KyECGi1aq6a/view"
          target="_blank"
          className="hover:underline text-xs text-primary hover:text-primary"
        >
          {t("senaSoft.certificate", { ns: "about" })}
        </a>
      </div>

      <ImageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        src={image}
        alt="SENA Experience Image"
      />
    </>
  );
};
