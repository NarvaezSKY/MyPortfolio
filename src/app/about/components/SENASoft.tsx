import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center text-gray-50 mt-1 rounded-full"
      >
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
      </motion.div>
      <div className="flex flex-col mt-10 mx-2">
        <div className="flex sm:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="-rotate-6 mt-3 z-40"
          >
            <img
              src={competition}
              alt="competition"
              className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer max-w-[70%px]"
              onClick={() => {
                setOpen(true);
                setImage(competition);
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rotate-6"
          >
            <img
              src={winners}
              alt="winners"
              className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer sm:max-w-[400px] sm:-ml-14"
              onClick={() => {
                setOpen(true);
                setImage(winners);
              }}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center z-40 sm:rotate-0 -rotate-6 sm:-mt-8 mt-0"
        >
          <img
            src={team}
            alt="team"
            className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer sm:max-w-[500px]"
            onClick={() => {
              setOpen(true);
              setImage(team);
            }}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-centern justify-center text-gray-50 mt-6 rounded-full text-justify"
      >
        <a
          href="https://drive.google.com/file/d/1aSqGW665QRdo0QOKW3fd9KyECGi1aq6a/view"
          target="_blank"
          className="hover:underline text-xs text-primary hover:text-primary"
        >
          {t("senaSoft.certificate", { ns: "about" })}
        </a>
      </motion.div>

      <ImageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        src={image}
        alt="SENA Experience Image"
      />
    </>
  );
};
