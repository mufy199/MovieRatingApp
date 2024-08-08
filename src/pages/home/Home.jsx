import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import "../../App.css";
import ColumnDisplay from "./ColumnDisplay";
import { fetchMovies, fetchTvShows } from "./query";
import { Audio,Oval } from 'react-loader-spinner'

function Home() {
  const displayType = {
    movies: "movies",
    shows: "shows",
  };
  const [display, setDisplay] = useState(displayType.movies);
  const { data: movieData, isLoading: isLoadingMovies, isError: isErrorMovies, error: errorMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    onSuccess: (data) => {
        console.log('Fetched Movies:', data)
    }
  });
  const { data: tvShowData, isLoading: isLoadingTvShows, isError: isErrorTvShows, error: errorTvShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
    onSuccess: (data) => {
        console.log('Fetched Movies:', data)
    }
  });
  if (isErrorMovies || isErrorTvShows) {
    return (
      <div>
        Error: {isErrorMovies ? errorMovies.message : errorTvShows.message}
      </div>
    );
  }
//   console.log(movieData.results);
    // console.log("Loading",isLoadingMovies);
    // console.log("Loading",isLoadingTvShows);
    !isLoadingMovies ? console.log('Movie Data:', movieData.results) : undefined
    !isLoadingTvShows ? console.log('Movie tvShows:', tvShowData.results) : undefined
    // console.log(display);
  return (
    <div>
      <div style={{ marginTop: 50, height: "auto" }} className="hi">
        <Button.Group className="hi">
          <Button
            className={`btn ${
              display === displayType.movies ? "blue" : undefined
            }`}
            onClick={() => setDisplay(displayType.movies)}
          >
            Movies
          </Button>
          <Button
            className={`btn ${
              display === displayType.shows ? "blue" : undefined
            }`}
            onClick={() => setDisplay(displayType.shows)}
          >
            TV Shows
          </Button>
        </Button.Group>
      </div>
      {isLoadingMovies || isLoadingTvShows ? (
        <div className="spinner">
        <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        /></div>
      ) : (
        <div style={{ marginTop: 20 }}>
          {display === displayType.movies ? (
            <ColumnDisplay data={movieData.results} displayType={displayType.movies} />
          ) : (
            <ColumnDisplay data={tvShowData.results} displayType={displayType.shows} />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
