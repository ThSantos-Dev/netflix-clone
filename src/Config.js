// CONSTANTES COM INFORMAÇÕES DE ACESSO A API
export const API_KEY = "a6053af969fcb3572eb54fb7bda93332";
export const API_BASE = "https://api.themoviedb.org/3";
export const LANGUAGE_CODE = "pt-BR";
export const CATEGORY_URL = {
  netflix: "/discover/tv?with_network=213",
  trending: "/trending/all/week",
  toprated: "/movie/top_rated",
  genres: {
    action: "/discover/movie?with_genres=28",
    comedy: "/discover/movie?with_genres=35",
    horror: "/discover/movie?with_genres=27",
    romance: "/discover/movie?with_genres=10749",
    documentary: "/discover/movie?with_genres=99",
  },
};

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
export const IMAGE_SIZE = "w300";