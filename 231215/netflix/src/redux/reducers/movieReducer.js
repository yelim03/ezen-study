const initialState = {
  popularMovies: {},
  topMovies: {},
  upComingMovies: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        popularMovies: payload.popularMovies,
        topMovies: payload.topMovies,
        upComingMovies: payload.upComingMovies,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
