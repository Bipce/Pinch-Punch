import axios from "axios";
import { IGenre } from "../models/Genre/IGenre";
import { IGetGenresResponse } from "../models/Genre/IGetGenresResponse";

import { IMovie } from "../models/Movie(s)/IMovie";
import { IGetMoviesResponse } from "../models/Movie(s)/IGetMoviesResponse";

import { IGetMoviesParams } from "../models/Movie(s)/IGetMoviesParams";
import { IGetMovieResponse } from "../models/Movie(s)/IGetMovieResponse";
import { IGetCreditsResponse } from "../models/Credits/IGetCreditsResponse";

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

export const getMovie = async (movieId: number): Promise<IMovie> => {
  const res = await axios.get<IGetMovieResponse>(`/movie/${movieId}`);
  return res.data;
};

export const getCredits = async (movieId: number): Promise<IGetCreditsResponse> => {
  const res = await axios.get<IGetCreditsResponse>(`/movie/${movieId}/credits`);
  return res.data;
};
