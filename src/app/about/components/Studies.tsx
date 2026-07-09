import { motion } from "framer-motion";
import { useState } from "react";
import family from "../../../assets/about/family.webp";
import memories from "../../../assets/about/memories.webp";
import us from "../../../assets/about/us.webp";
import { ImageModal } from "../../shared/components";
import { useTranslation } from "react-i18next";

export const Studies = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <p className="text-white break-words">
            {t("studies.description", { ns: "about" })}
          </p>
        </motion.div>
        <div className="flex flex-col mt-10 mx-7">
          <div className="sm:flex-row flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="-rotate-6 mt-5"
            >
              <img
                src={family}
                alt="family"
                className="rounded-lg hover:scale-110 transition sm:max-w-sm duration-300 cursor-pointer mx-auto"
                onClick={() => {
                  setOpen(true);
                  setImage(family);
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
                src={us}
                alt="uw"
                className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setImage(us);
                }}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg mx-auto -mt-10 z-30"
          >
            <img
              src={memories}
              alt="memories"
              className="rounded-lg hover:scale-110 transition duration-300 cursor-pointer sm:rotate-0 -rotate-6 mb-5"
              onClick={() => {
                setOpen(true);
                setImage(memories);
              }}
            />
          </motion.div>
        </div>
      </div>
      <ImageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        src={image}
        alt="SENA Experience Image"
        lgSize="44%"
      />
    </>
  );
};
