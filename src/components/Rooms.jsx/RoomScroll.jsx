import "./RoomScroll.scss";
import { useRef, useState } from "react";

//icons

import Bedroom from "../../assets/icons/icon_bedroom.png"
import Bathroom from "../../assets/icons/icon_bathroom.png"
import livingroom from "../../assets/icons/icon_living-room.png"
import kitchen from "../../assets/icons/icon_kitchen.png"


export default function RoomScroll() {
  const scrollRef = useRef(null);
  const [activeRoom, setActiveRoom] = useState(null);

  const rooms = [
    { name: "Soveværelse", icon: Bedroom },
    { name: "Stue", icon: livingroom },
    { name: "Badeværelse", icon: Bathroom },
    { name: "Køkken", icon: kitchen }
  ];

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section
      className="RoomScrollSec" ref={scrollRef} onWheel={handleWheel}>

      {rooms.map((room, index) => (
        <div className="RoomDivBox" key={index}>
          <button id="shadow" 
            className={activeRoom === index ? "active" : ""}
            onClick={() => setActiveRoom(index)}
          >
            <div className="buttonContentBox">
              <img src={room.icon} alt={room.name} className="room-icon" />
              <p>{room.name}</p>
            </div>
          </button>
        </div>
      ))}
    </section>
  );
}