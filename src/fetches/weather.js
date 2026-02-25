import { apiRequest } from "./api";

export function getWeather() {
  return apiRequest("/weather");
}