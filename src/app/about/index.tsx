import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Skills, Learning, TimeLine, Studies, SENASoft } from "./components";
import { Fragment } from "react";

export const About = () => {
  const { t } = useTranslation();
  const name = "Cristian";
  const skills = t("about.skillsText", { ns: "about" });
  const learning = t("about.learningText", { ns: "about" });
  const me = t("about.moreText", { ns: "about" });

  return (
    <div className="my-5 mx-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-3">
          {t("about.header", { ns: "about" })
            .split("{{name}}")
            .map((part, index) => (
              <Fragment key={index}>
                {part}
                {index === 0 ? (
                  <span className="text-primary">{name}</span>
                ) : null}
              </Fragment>
            ))}
        </h1>
        <p className="text-white break-words" dangerouslySetInnerHTML={{ __html: t("about.description", { ns: "about" }) }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-3xl font-semibold mt-4 mb-7">
          {t("about.skillsHeader", { ns: "about" })
            .split("{{underlineSkills}}")
            .map((part, index) => (
              <Fragment key={index}>
                {part}
                {index === 0 ? (
                  <span className="text-primary underline">{skills}</span>
                ) : null}
              </Fragment>
            ))}
        </h1>
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-3xl font-semibold mt-1 mb-6">
          {t("about.learningHeader", { ns: "about" })
            .split("{{underlineLearning}}")
            .map((part, index) => (
              <Fragment key={index}>
                {part}
                {index === 0 ? (
                  <span className="text-primary underline">{learning}</span>
                ) : null}
              </Fragment>
            ))}
        </h1>
        <Learning />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-xl font-semibold my-2">
          {t("about.workHeader", { ns: "about" })
            .split("{{underlineWorkExperience}}")
            .map((part, index) => (
              <Fragment key={index}>
                {part}
                {index === 0 ? (
                  <span className="text-primary underline">
                    {t("about.workText", { ns: "about" })}
                  </span>
                ) : null}
              </Fragment>
            ))}
        </h1>
        <TimeLine />
        <hr className="bg-primary border-0 mb-3 h-0.5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-3xl font-semibold my-4">
          {t("about.more", { ns: "about" })
            .split("{{more}}")
            .map((part, index) => (
              <Fragment key={index}>
                {part}
                {index === 0 ? (
                  <span className="text-primary underline">{me}</span>
                ) : null}
              </Fragment>
            ))}
        </h1>
        <h1 className="text-white text-2xl font-semibold my-1">
          {t("studies.studiesTitle", { ns: "about" })}{" "}
          <span className="text-primary underline">SENA</span>:
        </h1>
        <Studies />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-2xl font-semibold  mt-8">
          <a
            href="https://www.sena.edu.co/es-co/comunidades/aprendices/Paginas/senaSoft.aspx"
            className="text-white hover:underline hover:text-white"
            target="_blank"
          >
            <span className="font-bold text-white">SENA</span>
            <span className="text-primary font-normal">/Soft</span>{" "}
            <span className="font-bold text-white">2023</span>:
          </a>
        </h1>
        <SENASoft />
      </motion.div>
    </div>
  );
};
