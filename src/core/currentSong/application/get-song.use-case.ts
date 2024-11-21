import { ISongRepository } from '../domain/song.repository';

export const GetSongUseCase = (repository: ISongRepository) => () => {
    return repository.getSong()
}