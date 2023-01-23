export interface MovieI {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvProgramI {
  backdrop_path?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ResultsI {
  page: number;
  results: MovieI[] | TvProgramI[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetailI {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: GenreI[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductioncompanyI[];
  production_countries: ProductioncountryI[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenlanguageI[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SpokenlanguageI {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ProductioncountryI {
  iso_3166_1: string;
  name: string;
}

interface ProductioncompanyI {
  id: number;
  logo_path?: any;
  name: string;
  origin_country: string;
}

interface GenreI {
  id: number;
  name: string;
}

export interface TvDetailI {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedbyI[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreI[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastepisodetoairI;
  name: string;
  next_episode_to_air?: any;
  networks: NetworkI[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  seasons: SeasonI[];
  spoken_languages: SpokenlanguageI[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface SeasonI {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path?: any;
  season_number: number;
}

interface NetworkI {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

interface LastepisodetoairI {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path?: any;
  vote_average: number;
  vote_count: number;
}

interface CreatedbyI {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path?: any;
}
