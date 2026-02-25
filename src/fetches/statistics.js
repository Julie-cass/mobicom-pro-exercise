import { apiRequest } from "./api";

export function getStatistics(deviceId, from, to) {
  let query = `?device_id=${deviceId}`;
  if (from) query += `&from=${from}`;
  if (to) query += `&to=${to}`;

  return apiRequest(`/statistics${query}`);
}