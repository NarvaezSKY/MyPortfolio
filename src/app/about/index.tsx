import { useTranslation } from "react-i18next";
import { Skills, Learning, TimeLine, Studies, SENASoft } from "./components";
import { Fragment } from "react";

export const About = () => {
  const { t } = useTranslation();
  const name = "Cristian";
  const skills = t("about.skillsText", { ns: "about" });
  const learning = t("about.learningText", { ns: "about" });
  const underlineExperience = t("about.experience", { ns: "about" });
  const me = t("about.moreText", { ns: "about" });

  return (
    <div className="my-5 mx-4">
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
      <p className="text-white break-words">
        {t("about.description", { ns: "about" })}
      </p>

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
      <h1 className="text-white text-3xl font-semibold my-1">
        {t("about.experienceHeader", { ns: "about" })
          .split("{{underlineExperience}}")
          .map((part, index) => (
            <Fragment key={index}>
              {part}
              {index === 0 ? (
                <span className="text-primary underline">
                  {underlineExperience}
                </span>
              ) : null}
            </Fragment>
          ))}
      </h1>
      <TimeLine />
      <hr className="bg-primary border-0 mb-3 h-0.5" />
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
        {t("studies.studiesTitle", { ns: "about" })} <span className="text-primary underline">SENA</span>:
      </h1>
      <Studies />
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
    </div>
  );
};
