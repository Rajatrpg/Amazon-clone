import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8008", // cloud function
});

export default instance;