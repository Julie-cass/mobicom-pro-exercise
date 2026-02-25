import { apiRequest } from "./api";

// GET /devices
export function getDevices() {
  return apiRequest("/devices");
}

export function updateDevice(id, data) {
  return apiRequest(`/devices/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}