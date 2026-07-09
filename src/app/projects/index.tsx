import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CardComponent } from "../shared/components";
import profile from "../../assets/profile.jpg";

import senathreads from "../../assets/projects/personal/senathreads.png";
import rpm from "../../assets/projects/personal/rpm.png";
import twitch from "../../assets/projects/personal/twitch.png";

import carneImg from "../../assets/projects/for-work/carne/CarnéDeEgresadoSENARegionalCauca.jpg";
import carnePresentation from "../../assets/projects/for-work/carne/presentation.jpg";
import carnePromo from "../../assets/projects/for-work/carne/promo.jpg";
import formReingrImg from "../../assets/projects/for-work/form-reingr/Formulario Reingresos SENA.jpg";
import pe04Img from "../../assets/projects/for-work/pe-04/Proyecto Actualizar PE-04.jpg";
import reportsCmrImg from "../../assets/projects/for-work/reports-cmr/ReportesCoordinaciónMisionalRegionalPowerBI.png";
import segCmrImg from "../../assets/projects/for-work/seg-cmr/Seguimiento Plan Operativo CMR.png";
import segIdiImg from "../../assets/projects/for-work/seg-idi/SeguimientoInnovaciónYCompetitividad.png";

export const Projects = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"work" | "personal">("work");

  const getTabClass = (tab: string) =>
    activeTab === tab
      ? "border-primary text-white"
      : "border-transparent text-gray-300";

  return (
    <div>
      <div className="flex w-full flex-row justify-between mt-2">
        <button
          onClick={() => setActiveTab("work")}
          className={`flex-grow border-b-2 ${getTabClass("work")} px-2 py-2 text-center text-sm sm:text-base transition-all duration-200 hover:text-white`}
        >
          {t("projects.tabWork", { ns: "projects" })}
        </button>
        <button
          onClick={() => setActiveTab("personal")}
          className={`flex-grow border-b-2 ${getTabClass("personal")} px-2 py-2 text-center text-sm sm:text-base transition-all duration-200 hover:text-white`}
        >
          {t("projects.tabPersonal", { ns: "projects" })}
        </button>
      </div>

      {activeTab === "work" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-default-400 text-sm mt-6 mb-8 px-4" dangerouslySetInnerHTML={{ __html: t("projects.work.intro", { ns: "projects" }) }} />
          <CardComponent
            profileImage={profile}
            name="Cristian Narvaez"
            date="2026"
            username="@narvaez_sky"
            title="Carné de Egresado SENA"
            description={t("projects.work.carne", { ns: "projects" })}
            images={[
              { src: carneImg, alt: "Carné de Egresado SENA", variant: "image" },
              { src: carnePresentation, alt: "Presentation Carné de Egresado SENA", variant: "image" },
              { src: carnePromo, alt: "Promo Carné de Egresado SENA", variant: "image" },
            ]}
            link="https://egresados-sena-cauca.ctpitech.net/"
            buttonText={t("check", { ns: "projects" })}
            pin="public"
          />

          <CardComponent
            profileImage={profile}
            name="Cristian Narvaez"
            date="2026"
            username="@narvaez_sky"
            title="Formulario Reingresos"
            description={t("projects.work.formReingr", { ns: "projects" })}
            imageSrc={formReingrImg}
            imageAlt="Formulario Reingresos SENA"
            imageVariant="image"
            pin="private"
          />

          <CardComponent
            profileImage={profile}
            name="Cristian Narvaez"
            date="2026"
            username="@narvaez_sky"
            title="PE-04"
            description={t("projects.work.pe04", { ns: "projects" })}
            imageSrc={pe04Img}
            imageAlt="Proyecto Actualizar PE-04"
            imageVariant="image"
            pin="private"
          />

          <CardComponent
            profileImage={profile}
            name="Cristian Narvaez"
            date="2026"
            username="@narvaez_sky"
            title="Reportes CMR"
            description={t("projects.work.reportsCmr", { ns: "projects" })}
            imageSrc={reportsCmrImg}
            imageAlt="Reportes Coordinación Misional Regional"
            imageVariant="image"
            pin="private"
          />

          <CardComponent
            profileImage={profile}
            name="Cristian Narvaez"
            date="2026"
            username="@narvaez_sky"
            title="Seguimiento CMR"
            description={t("projects.work.segCmr", { ns: "projects" })}
            imageSrc={segCmrImg}
            imageAlt="Seguimiento Plan Operativo CMR"
            imageVariant="image"
            pin="private"
          />

          <CardComponent
            profileImage={profile}
            name="Cristian Narvaez"
            date="2026"
            username="@narvaez_sky"
            title="Seguimiento Innovación y Competitividad"
            description={t("projects.work.segIdi", { ns: "projects" })}
            imageSrc={segIdiImg}
            imageAlt="Seguimiento Innovación y Competitividad"
            imageVariant="image"
            pin="private"
          />
        </motion.div>
      )}

      {activeTab === "personal" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <CardComponent
            name="Cristian Narvaez"
            date="11/11/2024"
            username="@narvaez_sky"
            title="Twitch API Project"
            description={t("projects.twitch", { ns: "projects" })}
            profileImage={profile}
            link="https://twitch-api-project.vercel.app/"
            buttonText={t("check", { ns: "projects" })}
            imageSrc={twitch}
            imageAlt="Rutas Para Moteros"
            imageVariant="image"
            hashtag="#KickIsBetter!"
            navigate={true}
            frontendOnly={true}
            githubFrontEnd="https://github.com/NarvaezSKY/TwitchAPI-Project.git"
            pin="public"
          />
          <CardComponent
            name="Cristian Narvaez"
            date="11/11/2024"
            username="@narvaez_sky"
            title="RPM - Rutas Para Moteros"
            description={t("projects.rpm", { ns: "projects" })}
            profileImage={profile}
            link="https://rutasparamoteros.vercel.app/"
            buttonText={t("check", { ns: "projects" })}
            imageSrc={rpm}
            imageAlt="Rutas Para Moteros"
            imageVariant="image"
            hashtag="#RPM!"
            navigate={true}
            githubFrontEnd="https://github.com/NarvaezSKY/RPM-FrontEnd.git"
            githubBackEnd="https://github.com/NarvaezSKY/RPMBackEnd.git"
            pin="public"
          />
          <CardComponent
            name="Cristian Narvaez"
            date="11/11/2024"
            username="@narvaez_sky"
            title="SENAThreads"
            description={t("projects.senathreads", { ns: "projects" })}
            profileImage={profile}
            link="https://test-sena-book.vercel.app/home"
            buttonText={t("check", { ns: "projects" })}
            imageSrc={senathreads}
            imageAlt="SENAThreads"
            imageVariant="image"
            hashtag="#ConnectUp!"
            navigate={true}
            pin="deprecated"
          />
        </motion.div>
      )}
    </div>
  );
};
