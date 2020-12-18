import axios from "axios";

const {REACT_APP_API_URL} = process.env;

export const getMovies = () => {
  const apiURL = REACT_APP_API_URL + "/movies";
  return axios(apiURL, {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        // client never received a response, or request never left
        console.log(err.request);
      } else {
        // anything else
      }
    });
};

export const getMovieById = (id) => {
  const apiURL = REACT_APP_API_URL + "/movies/" + id;
  return axios(apiURL, {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        // client never received a response, or request never left
        console.log(err.request);
      } else {
        // anything else
      }
    });
};

export const deleteMovie = (id, token) => {
  const apiURL = REACT_APP_API_URL + "/movies/" + id;
  return axios(apiURL, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        // client never received a response, or request never left
        //console.log(err.request);
      } else {
        // anything else
      }
    });
};

export const addMovie = (body, token) => {
  const apiURL = REACT_APP_API_URL + "/movies";

  return axios(apiURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: body,
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        // client never received a response, or request never left
        //console.log(err.request);
      } else {
        // anything else
      }
    });
};

export const editMovie = (body, movieId, token) => {
  const apiURL = REACT_APP_API_URL + "/movies/" + movieId;
  return axios(apiURL, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: body,
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        // client never received a response, or request never left
        //console.log(err.request);
      } else {
        // anything else
      }
    });
};
