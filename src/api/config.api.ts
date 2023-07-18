import axios from "axios";

const AUTH_TOKEN = "";
export const api = axios.create({
  baseURL: "http://localhost:5000/v1",
  headers: AUTH_TOKEN,
});
