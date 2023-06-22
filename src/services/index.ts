import axios from "axios";

export const karsAPI = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 4000,
});

export const localAPI = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
});