import "./styles.scss";

/* Button styles:
  - light
  - dark
*/

export default function Button({
  children,
  className = "",
  type = "light",
  id = "",
  onClick = (e) => {},
}) {
  return(
    <button
      id={id}
      className={`btn-${type} ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  );
}