export interface Movie {
  adult: boolean;
  backdrop_path: string;
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
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

export interface MovieDTO {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideoDTO {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImage {
  backdrops: {
    file_path: string;
  }[]
}

export interface MovieCredits{
    cast: {
        original_name: string;
        profile_path: string;
    }[];
}

