import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
function Moviedb() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const api_key = "0d2eb62736c09e9f19d3e6eccc4ce685";
  //   useEffect(() => {
  //     fetch(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=0d2eb62736c09e9f19d3e6eccc4ce685"
  //     ).then((res) => {
  //       console.log("res", res);
  //     });
  //     //   .then((movie) => {
  //     //     console.log("movie", movie);
  //     //     setTopRatedMovies(movie);
  //     //   });
  //   }, []);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: api_key,
        },
      })
      .then(function (response) {
        console.log(response);
        setTopRatedMovies(response.data.results);
        console.log("checking data", response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log("checking wt had happend");
      });
  }, []);

  return (
    <div className="container-fluid">
      <h2>Top Rated Movies</h2>

      {topRatedMovies.map((movie) => {
        return (
          <div key={movie.id} className="topRatedMovies col-md-3 col-sm-3 ">
            <div className="topRated_Movie ">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                alt="poster"
              />
              <div className="movie_details">
                <p>
                  {movie.title} &nbsp; &nbsp;
                  <span style={{ float: "right" }}>{movie.release_date}</span>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="">Rating {movie.vote_average}/10</div>
                  <div className="">Rated {movie.audlt ? " A " : "U/A "}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Moviedb;
