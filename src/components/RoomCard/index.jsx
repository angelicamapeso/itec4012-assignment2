import "./styles.scss";

import DotButton from "../DotButton";

export default function RoomCard({
  id = "",
  className = "",
  src = "https://source.unsplash.com/700x900/?room",
  btnPosTop = '50%',
  btnPosLeft = '50%',
}) {
  return (
    <div id={id} className={`room-card ${className}`}>
      <img className="room-img" src={src} alt=""/>
      <DotButton style={{ top: btnPosTop, left: btnPosLeft }} />
    </div>
  );
}