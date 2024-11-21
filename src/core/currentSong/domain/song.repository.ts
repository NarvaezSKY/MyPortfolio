import { ISongRes } from "./get-song";

export interface ISongRepository {
    getSong(): Promise<ISongRes>;
}