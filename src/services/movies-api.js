const KEY = 'f16772f2af0be9f113024bcab02efac7';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  );
}

export function fetchMovie(movieName) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${movieName}`
  );
}

export function fetchMovieDetails(movie_id) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movie_id) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movie_id) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
