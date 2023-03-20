import axios from "axios";

const baseURL = "https://official-joke-api.appspot.com/";

export const http = axios.create({
  baseURL: baseURL,
});
