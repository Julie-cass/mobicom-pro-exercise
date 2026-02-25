import { updateDevice } from "../fetches/devices";

export default function DeviceControls({ device }) {

  async function changeMode() {
    try {
      await updateDevice(device.id, {
        work_mode: "auto"
      });
      alert("Mode updated!");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <button onClick={changeMode}>
      Set Auto Mode
    </button>
  );
}