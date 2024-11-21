import { Skeleton } from "@nextui-org/react";

const SongCoverLoader = () => {
    return (
        <div className="flex items-center p-4 rounded-lg">
          <div className="flex flex-col text-right mx-2 text-white space-y-2">
            {/* Skeleton para el título de la canción */}
            <Skeleton className="w-32 rounded-lg ml-auto">
              <div className="h-5 w-32 rounded-lg bg-default-300"></div>
            </Skeleton>
    
            {/* Skeleton para el nombre del artista */}
            <Skeleton className="w-24 rounded-lg ml-auto">
              <div className="h-4 w-24 rounded-lg bg-default-200"></div>
            </Skeleton>
    
            {/* Skeleton para el nombre del álbum (más largo) */}
            <Skeleton className="w-28 rounded-lg ml-auto">
              <div className="h-4 w-28 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
    
          {/* Skeleton para la portada del álbum */}
          <div className="w-20 h-20 rounded-lg mr-4 overflow-hidden">
            <Skeleton className="rounded-lg w-full h-full">
              <div className="w-full h-full bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      );
};

export default SongCoverLoader;
