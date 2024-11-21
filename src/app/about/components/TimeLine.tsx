import { useTranslation } from "react-i18next";

export const TimeLine = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0a0a16] p-6 rounded-lg flex justify-start w-full">
      <div className="relative">
        <div className="absolute left-[7px] top-[24px] bottom-4 w-[2px] bg-secondary" />

        <div className="space-y-8">
          <div className="relative pl-8">
            <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-primary" />
            <div className="space-y-1">
              <h3 className="text-primary font-medium">
                {t("timeline.frontend", { ns: "about" })}
              </h3>
              <h4 className="text-white font-semibold">
                <a
                  href="https://bpolabsolutions.com/"
                  className="text-white hover:text-white hover:underline"
                  target="_blank"
                >
                  BPOLabs Solutions
                </a>
              </h4>
              <p className="text-gray-400 text-sm">
                {t("timeline.dates.bpolabs", { ns: "about" })}
              </p>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-primary" />
            <div className="space-y-1">
              <h3 className="text-primary font-medium">
                {t("timeline.fullstack", { ns: "about" })}
              </h3>
              <h4 className="text-white font-semibold">Freelance</h4>
              <p className="text-gray-400 text-sm">
                {t("timeline.dates.freelance", { ns: "about" })}
              </p>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-primary" />
            <div className="space-y-1">
              <h3 className="text-primary font-medium">
                {t("timeline.technologist", { ns: "about" })}
              </h3>
              <h4 className=" font-semibold">
                <a
                  href="https://www.sena.edu.co"
                  className="text-white hover:text-white hover:underline"
                  target="_blank"
                >
                  Servicio Nacional de Aprendizaje - SENA
                </a>
              </h4>
              <p className="text-gray-400 text-sm">
                {t("timeline.dates.sena", { ns: "about" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
