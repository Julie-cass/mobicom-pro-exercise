import "./SlidingToggle.scss";

export default function SlidingToggle({ isOn, roomKey, deviceKey, toggleDevice }) {
  return (
    <label className="sliding-toggle-label">
      <input type="checkbox" checked={isOn} onChange={() => toggleDevice(roomKey, deviceKey)}
      />
      <span className="slider" />
    </label>
  );
}