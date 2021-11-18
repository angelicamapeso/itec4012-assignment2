import "./styles.scss";

export default function DotButton({
  style = {},
}) {
  return (
    <button style={style} className="dot-button"></button>
  );
}