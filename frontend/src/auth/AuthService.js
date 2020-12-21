import axios from "axios";

const {REACT_APP_API_URL} = process.env;

export const getRole = (token) => {
  const apiURL = REACT_APP_API_URL + "/role";

  return axios(apiURL, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else {
        console.log(err);
      }
    });
};
