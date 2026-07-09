import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TimelineItem = ({ title, subtitle, subtitleHref, date, delay }: {
  title: string;
  subtitle: string;
  subtitleHref?: string;
  date: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8"
  >
    <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-primary" />
    <div className="space-y-1">
      <h3 className="text-primary font-medium">{title}</h3>
      <h4 className="text-white font-semibold">
        {subtitleHref ? (
          <a
            href={subtitleHref}
            className="text-white hover:text-white hover:underline"
            target="_blank"
          >
            {subtitle}
          </a>
        ) : (
          subtitle
        )}
      </h4>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  </motion.div>
);

export const TimeLine = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0a0a16] p-6 rounded-lg flex flex-col gap-8 w-full">
      <div className="relative">
        <div className="absolute left-[7px] top-[24px] bottom-4 w-[2px] bg-secondary" />
        <div className="space-y-8">
          <TimelineItem
            title={t("timeline.webDev", { ns: "about" })}
            subtitle={t("timeline.company", { ns: "about" })}
            subtitleHref="https://www.sena.edu.co"
            date={t("timeline.dates.webDev", { ns: "about" })}
            delay={0}
          />
          <TimelineItem
            title={t("timeline.frontend", { ns: "about" })}
            subtitle="BPOLabs Solutions"
            subtitleHref="https://bpolabsolutions.com/"
            date={t("timeline.dates.bpolabs", { ns: "about" })}
            delay={0.15}
          />
          <TimelineItem
            title={t("timeline.fullstack", { ns: "about" })}
            subtitle="Freelance"
            date={t("timeline.dates.freelance", { ns: "about" })}
            delay={0.3}
          />
        </div>
      </div>
      <div>
        <h2 className="text-white text-xl font-semibold mb-4">
          {t("about.studiesHeader", { ns: "about" })
            .split("{{underlineStudies}}")
            .map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 ? (
                  <span className="text-primary underline">
                    {t("about.studiesText", { ns: "about" })}
                  </span>
                ) : null}
              </span>
            ))}
        </h2>
        <div className="relative">
          <div className="absolute left-[7px] top-[24px] bottom-4 w-[2px] bg-secondary" />
          <div className="space-y-8">
            <TimelineItem
              title={t("timeline.computerEngineering", { ns: "about" })}
              subtitle={t("timeline.institution", { ns: "about" })}
              date={t("timeline.dates.computerEngineering", { ns: "about" })}
              delay={0}
            />
            <TimelineItem
              title={t("timeline.technologist", { ns: "about" })}
              subtitle={t("timeline.company", { ns: "about" })}
              subtitleHref="https://www.sena.edu.co"
              date={t("timeline.dates.sena", { ns: "about" })}
              delay={0.15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};