export interface TV{
    backdrop_path: string,
    first_air_date: string,
    id: number,
    name: string,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,    
    vote_average: number,
    vote_count: number
}

export interface TvDTO{
    page: number,
    results: TV[],
    total_results: number,
    total_pages: number
}