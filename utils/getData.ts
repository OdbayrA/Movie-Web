import { ActorRoot, DetailRoot, GenresType, MovieRoot } from "./types";

const base_url = "https://api.themoviedb.org/3";

const upComing = "/movie/upcoming?language=en-US&page=1";
const popular = "/movie/popular?language=en-US&page=1";
const topRated = "/movie/top_rated?language=en-US&page=1";
const nowPlaying = "/movie/now_playing?language=en-US&page=1";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDRkNGM1YjEyMWZhODdjMjk0MzI4MWI1ZDg2N2E4YSIsIm5iZiI6MTc3MDYwODk0OC43NjgsInN1YiI6IjY5ODk1OTM0N2MyYWQzM2ZmMmY4MTQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d8flkKE5wR64BoyR3XX-gdTbTiOWaw9KM0uEobsWrgM";

const method = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getUpComingMovies = async (): Promise<MovieRoot> => {
  const res = await fetch(`${base_url}${upComing}`, method);
  const data = await res.json();
  return data;
};

export const getPopularMovies = async (): Promise<MovieRoot> => {
  const res = await fetch(`${base_url}${popular}`, method);
  const data = await res.json();
  return data;
};

export const getTopRated = async (): Promise<MovieRoot> => {
  const res = await fetch(`${base_url}${topRated}`, method);
  const data = await res.json();
  return data;
};

export const getDetails = async (id: string): Promise<DetailRoot> => {
  const res = await fetch(`${base_url}/movie/${id}?language=en-US`, method);
  const data = await res.json();
  return data;
};

export const getActors = async (id: string): Promise<ActorRoot> => {
  const res = await fetch(
    `${base_url}/movie/${id}/credits?language=en-US`,
    method,
  );
  const data = await res.json();
  return data;
};

export const getSimilarMovie = async (id: string): Promise<MovieRoot> => {
  const res = await fetch(
    `${base_url}/movie/${id}/similar?language=en-US&page=1`,
    method,
  );
  const data = await res.json();
  return data;
};

export const getNowPlaying = async (): Promise<MovieRoot> => {
  const res = await fetch(`${base_url}${nowPlaying}`, method);
  const data = await res.json();
  return data;
};

export const getGenres = async (): Promise<GenresType> => {
  const res = await fetch(`${base_url}/genre/movie/list?language=en`, method);
  const data = await res.json();
  return data;
};

export const getMovieGenre = async (
  genreIds: string,
  page: 1,
): Promise<MovieRoot> => {
  const res = await fetch(
    `${base_url}/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
    method,
  );
  const data = await res.json();
  return data;
};
