import axiosInstance from "../../../axios/instance";
import { ISongRes } from "../domain/get-song";
import { USERNAME, API_KEY } from "../../../axios/config/config";
import { ISongRepository } from "../domain/song.repository";

const getSong = async (): Promise<ISongRes> => {
    try {
        const response = await axiosInstance.get<ISongRes>(`/?method=user.getRecentTracks&user=${USERNAME}&api_key=${API_KEY}&format=json`)
        return response.data
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

export const SongRepository: ISongRepository = {
    getSong
}