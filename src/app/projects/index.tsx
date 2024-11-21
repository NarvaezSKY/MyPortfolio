import { CardComponent } from "../shared/components";
import profile from "../../assets/profile.jpg";
import senathreads from "../../assets/projects/senathreads.png";
import rpm from "../../assets/projects/rpm.png";
import twitch from "../../assets/projects/twitch.png";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div>
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
        githubFrontEnd={"https://github.com/NarvaezSKY/RPM-FrontEnd.git"}
        githubBackEnd={"https://github.com/NarvaezSKY/RPMBackEnd.git"}
      />
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
        githubFrontEnd={"https://github.com/NarvaezSKY/TwitchAPI-Project.git"}
      />
    </div>
  );
};
