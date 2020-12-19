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
        return err.response.data;
      } else if (err.request) {
        // client never received a response, or request never left
        console.log(err.request);
      } else {
        // anything else
      }
    });
};

export const deleteActor = (id, token) => {
  const apiURL = REACT_APP_API_URL + "/actors/" + id;
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

export const addActor = (body, token) => {
  const apiURL = REACT_APP_API_URL + "/actors";
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

export const editActor = (body, actorId, token) => {
  const apiURL = REACT_APP_API_URL + "/actors/" + actorId;
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
