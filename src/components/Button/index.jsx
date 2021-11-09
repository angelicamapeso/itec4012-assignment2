import "./styles.scss";

/* Button styles: 
  - light
*/

export default function Button({
  children,
  style = "light",
  id })
{
  return(
    <button id={id} className={`btn-${style}`}>
      { children }
    </button>
  );
}