import "./styles.scss";

/* Button styles:
  - light
  - dark
*/

export default function Button({
  children,
  className = "",
  contentType = "icon",
  styleType = "light",
  id = "",
  onClick = (e) => {},
}) {
  return(
    <button
      id={id}
      className={`btn-${styleType} btn-${contentType} ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  );
}