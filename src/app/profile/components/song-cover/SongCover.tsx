import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UseSongStore } from "../../../shared/store";
import { useExtractColors } from "react-extract-colors";
import "./animation.css";
import SongCoverLoader from "../song-cover-loader/SongCoverLoader";

const SongCover = () => {
  const { song, loading } = UseSongStore();

  const track = song?.recenttracks?.track?.[0];
  const albumImage = track?.image?.[2]["#text"];

  const { colors } = useExtractColors(albumImage, {
    maxColors: 3,
    format: "hex",
    maxSize: 100,
    colorSimilarityThreshold: 100,
    sortBy: "vibrance",
  });

  useEffect(() => {
    if (colors.length >= 3) {
      document.documentElement.style.setProperty("--color-1", colors[0]);
      document.documentElement.style.setProperty("--color-2", colors[1]);
      document.documentElement.style.setProperty("--color-3", colors[2]);
    } else {
      document.documentElement.style.setProperty("--color-1", "#000000");
      document.documentElement.style.setProperty("--color-2", "#7b7d7b");
      document.documentElement.style.setProperty("--color-3", "#F0f0f0");
    }
  }, [colors]);

  return (
    <div className="flex justify-end items-center p-4 rounded-lg border-2 h-32 border-primary w-full animatedBackground">
      {loading ? (
        <SongCoverLoader />
      ) : (
        <div className="flex items-center">
          <div className="flex flex-col text-right mx-2 text-white">
            <h2
              className="text-lg font-semibold truncate
                max-w-[155px]  /* Base */
                sm:max-w-[155px]
                md:max-w-[400px]
                lg:max-w-none"
            >
              {track?.name || "Unknown Track"}
            </h2>
            <p
              className="text-sm text-gray-50 truncate
                max-w-[155px]  /* Base */
                sm:max-w-[155px]
                md:max-w-[400px]
                lg:max-w-none"
            >
              {track?.artist?.["#text"] || "Unknown Artist"}
            </p>
            <p
              className="text-sm text-gray-50 truncate
                max-w-[155px]  /* Base */
                sm:max-w-[155px]
                md:max-w-[400px]
                lg:max-w-none"
            >
              {track?.album?.["#text"] || "Unknown Album"}
            </p>
          </div>

          <div className="w-20 h-20 rounded-lg mr-4 overflow-hidden">
            <Link to={`${track?.url}`} target="_blank">
              {albumImage ? (
                <img
                  src={albumImage}
                  alt="Album cover"
                  className="w-full h-full object-cover cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out"
                />
              ) : (
                <div className="w-full h-full bg-gray-100"></div>
              )}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongCover;
