import xdd from "../../../../assets/xdd.gif";
import xdd2 from "../../../../assets/xdd2.gif";
import xdd3 from "../../../../assets/xdd3.gif";
export const NotFound = () => {
  return (
    <div className="text-white text-3xl flex font-sans flex-col justify-center items-center my-10">
      <p>what are you exactly looking for¿¿¿¿¿</p>
      <div className="flex sm:flex-row flex-col justify-around items-center p-4 space-x-7">
      <img src={xdd2} alt="404" />
      <img src={xdd} alt="404" />
      <img src={xdd3} alt="404" />
      </div>
    </div>
  );
};
