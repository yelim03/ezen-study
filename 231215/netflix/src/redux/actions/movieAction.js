const getMovie = () => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();

    const url2 = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    const response2 = await fetch(url);
    const data2 = await response.json();

    const url3 = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    const response3 = await fetch(url);
    const data3 = await response.json();
  };
};
