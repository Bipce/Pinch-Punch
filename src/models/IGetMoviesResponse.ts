import { IMovie } from "./IMovie";

export interface IGetMoviesResponse {
  page: number;
  results: IMovie[];
  totalPages: number;
  totalResults: number;
  poster_path: string;
  genre_ids: number;
}
