import axios from "axios";
import { IGenre } from "../models/IGenre";
import { IGetGenresResponse } from "../models/IGetGenresResponse";

import { IMovie } from "../models/IMovie";
import { IGetMoviesResponse } from "../models/IGetMoviesResponse";

import { IGetMoviesParams } from "../models/IGetMoviesParams";

export const getGenres = async (): Promise<IGenre[]> => {
  const res = await axios.get<IGetGenresResponse>("/genre/movie/list");
  return res.data.genres;
};

export const getMovies = async (genreId: number, page: number = 1): Promise<IMovie[]> => {
  const params: IGetMoviesParams = {
    with_original_language: "en",
    include_video: true,
    with_genres: genreId.toString(),
    page,
  };

  const res = await axios.get<IGetMoviesResponse>("/discover/movie", { params });
  return res.data.results;
};
