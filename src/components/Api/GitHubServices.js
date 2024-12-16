// src/GitHubService.js
import axios from "axios";

const API_URL = "https://api.github.com/users/joel12sa/events";

export const getGitHubEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
