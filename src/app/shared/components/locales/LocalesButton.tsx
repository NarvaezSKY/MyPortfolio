import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export const LocalesButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Dropdown className="bg-[#0a0a16]">
      <DropdownTrigger>
        <Button
          variant="bordered"
          isIconOnly
          className="fixed bottom-4 right-4 z-50 bg-primary text-white"
          radius="full"
        >
          <IoLanguage size={25} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="border-2 border-primary rounded-xl text-primary"
      >
        <DropdownItem
          key="en"
          onClick={() => toggleLanguage("en")}
          className={currentLanguage === "en" ? "bg-primary text-white" : ""}
        >
          English
        </DropdownItem>
        <DropdownItem
          key="es"
          onClick={() => toggleLanguage("es")}
          className={currentLanguage === "es" ? "bg-primary text-white" : ""}
        >
          Spanish
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
