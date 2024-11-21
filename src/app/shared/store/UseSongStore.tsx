import { create } from "zustand";
import { ISongRes } from "../../../core/currentSong/domain/get-song/get-song.res";
import { GetSongUseCase } from "../../../core/currentSong/application/get-song.use-case";
import { SongRepository } from "../../../core/currentSong/infraestructure/song.repository";

type State = {
  song: ISongRes;
  loading: boolean;
};

type Actions = {
  getSong: () => Promise<void>;
};

type Store = State & Actions;

export const UseSongStore = create<Store>((set) => ({
  song: {} as ISongRes,
  loading: false,

  getSong: async () => {
    try {
      const currentSong = UseSongStore.getState().song;
      const isFirstLoad = !currentSong.recenttracks?.track?.length;

      if (isFirstLoad) {
        set({ loading: true });
      }

      const getSong = GetSongUseCase(SongRepository);
      const data = await getSong();
      const newTrackName = data.recenttracks.track[0].name;
      const currentTrackName = currentSong.recenttracks?.track[0]?.name;

      if (newTrackName !== currentTrackName) {
        set({ loading: true });
        setTimeout(() => {
          set({ song: data, loading: false });
        }, 1000);
      } else {
        set({ song: data, loading: false });
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
}));
