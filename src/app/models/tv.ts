export interface TV {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TvDTO {
  page: number;
  results: TV[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface TvVideoDTO {
  id: number;
  results: TvVideo[];
}

export interface TvVideo {
  site: string;
  key: string;
}

export interface TvImage {
  backdrops: {
    file_path: string;
  }[];
}
