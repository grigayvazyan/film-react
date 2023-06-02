
function request(url) {
    return fetch(url)
      .then((res) => res.json())
  }
  
  
  export function getFilmList(page) {
    const GET_FILM_LIST_URL =
      `https://api.themoviedb.org/3/movie/popular?api_key=ff147ad56a70e7a476553df853ddbbb5&language=en-US&page=${page}`;
    return request(GET_FILM_LIST_URL);
  }
  
  export function getFilm(id) {
    const GET_FILM_LIST_URL =
      `https://api.themoviedb.org/3/movie/${id}?api_key=ff147ad56a70e7a476553df853ddbbb5&language=en-US`;
    return request(GET_FILM_LIST_URL)
        .then((res) => {
            const filmInfo = {
                id: res.id,
                genres: res.genres,
                original_title: res.original_title,
                title: res.title,
                backdrop_path: 'https://image.tmdb.org/t/p/original' + res.backdrop_path,
                runtime: res.runtime,
                vote_average: res.vote_average,
                homepage: res.homepage,
                overview: res.overview,
            
                
            }
            
            return filmInfo
            
        });
  }

  export function getTopFilm(page) {
    const TOP_FILM_LIST_URL = 
    `https://api.themoviedb.org/3/movie/top_rated?api_key=ff147ad56a70e7a476553df853ddbbb5&language=en-US&page=${page}`;
    return request(TOP_FILM_LIST_URL)
  }

  export function getComingSonFilm(page) {
    const COMING_SON_FILM_LIST_URL = 
    `https://api.themoviedb.org/3/movie/upcoming?api_key=ff147ad56a70e7a476553df853ddbbb5&language=en-US&page=${page}`;
    return request(COMING_SON_FILM_LIST_URL)
  }

  export function getGenerals() {
    const GET_GENERALS_LIST =
    `https://api.themoviedb.org/3/genre/movie/list?api_key=ff147ad56a70e7a476553df853ddbbb5&language=en-US`
    return request(GET_GENERALS_LIST)
  }
