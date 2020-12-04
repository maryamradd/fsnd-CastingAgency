import axios from "axios";

const {REACT_APP_API_URL} = process.env;

export const getActors = () => {
  const apiURL = REACT_APP_API_URL + "/actors";
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

export const getActorById = (id) => {
  const apiURL = REACT_APP_API_URL + "/actors/" + id;
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

export const deleteActor = (id) => {
  const apiURL = REACT_APP_API_URL + "/actors/" + id;
  return axios(apiURL, {
    method: "DELETE",
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
        //console.log(err.request);
      } else {
        // anything else
      }
    });
};
