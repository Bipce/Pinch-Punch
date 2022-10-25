import { IMovie } from "./IMovie";

export interface IGetMoviesResponse {
  page: number;
  results: IMovie[];
  totalResults: number;
  poster_path: string;
  genre_ids: number;
}
