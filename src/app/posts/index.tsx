import cooking from "../../assets/cooking.webp";
import dorito from "../../assets/dorito-spin.gif";
import profile from "../../assets/profile.jpg";
import { TbPinnedFilled } from "react-icons/tb";
import { CardComponent } from "../shared/components";
import { useTranslation } from "react-i18next";

export const Posts = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-center text-sm text-gray-50 mt-3 bg-tertiary w-[70px] rounded-full">
        <TbPinnedFilled size={16} className="ml-1" />
        {t("pinned.text", { ns: "posts" })}
      </div>
      <CardComponent
        profileImage={profile}
        name="Cristian Narvaez"
        date="11/11/2024"
        username="@narvaez_sky"
        description={t("posts.card1.description", { ns: "posts" })}
        hashtag="#SENACauca<3"
        imageVariant="image"
        imageSrc={cooking}
        imageAlt="cooking"
      />

      <CardComponent
        profileImage={profile}
        name="Cristian Narvaez"
        date="11/11/2024"
        username="@narvaez_sky"
        description={t("posts.card2.description", { ns: "posts" })}
        imageSrc={dorito}
        imageAlt="dorito"
        imageVariant="GIF"
        link="https://github.com/NarvaezSky/sena-threads"
        buttonText={t("posts.card2.buttonText", { ns: "posts" })}
      />
    </div>
  );
};
