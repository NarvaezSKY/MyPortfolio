import { Spinner } from "@nextui-org/react";
import { useLoader } from "./hooks";

export const Loader = () => {
  const { loading, showOnlyName, fadeName } = useLoader();

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center flex-col bg-black bg-opacity-50 transition-opacity duration-1100 ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-white text-2xl sm:text-3xl font-extralight flex flex-col sm:flex-row justify-center">
        <span
          className={`${
            showOnlyName ? "opacity-0" : "opacity-100"
          } transition-opacity duration-200`}
        >
          <p className="ml-0 sm:mr-2">Welcome to </p>
        </span>
        <span
          className={`text-primary font-medium ${
            showOnlyName ? "sm:-ml-12" : ""
          } transition-all duration-300 ${
            fadeName ? "opacity-0" : "opacity-100"
          }`}
        >
          Cristian Narvaez
        </span>
        <span
          className={`${
            showOnlyName ? "opacity-0" : "opacity-100"
          } transition-opacity duration-200`}
        >
          <p className="ml-0 sm:ml-2">Portfolio</p>
        </span>
      </div>
      <div className="flex justify-center mt-5">
        <Spinner
          size="sm"
          className={`${showOnlyName ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    </div>
  );
};
