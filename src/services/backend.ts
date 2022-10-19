import axios from "axios";
import { IGenre } from "../models/IGenre";
import { IGetGenresResponse } from "../models/IGetGenresResponse";
import { IGetMoviesParams } from "../models/IGetMoviesParams";
import { IGetMoviesResponse } from "../models/IGetMoviesResponse";
import { IMovie } from "../models/IMovie";

export const getMovies = async (): Promise<IMovie[]> => {
  const params: IGetMoviesParams = {
    with_original_language: "en",
    include_video: true,
  };
  const res = await axios.get<IGetMoviesResponse>("/discover/movie", { params });
  return res.data.results;
};

export const getGenres = async (): Promise<IGenre[]> => {
  const res = await axios.get<IGetGenresResponse>("/genre/movie/list");
  return res.data.genres;
};
