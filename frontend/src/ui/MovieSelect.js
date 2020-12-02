import {React, useState, useEffect} from "react";
import {Select} from "@chakra-ui/react";
import {getMovies} from "../movies/MoviesService";

export const MovieSelect = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      //console.log(res);
      setMovies(res.movies);
      console.log(movies);
    });
  }, []);

  return (
    <>
      <Select {...props} placeholder="Select movie" variant="filled">
        {movies.map((movie, index) => (
          <option key={index} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </Select>
    </>
  );
};
