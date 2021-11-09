import "./styles.scss";

/* Button styles: 
  - light
*/

export default function Button({ children, style = "light" }) {
  return(
    <button class={`btn-${style}`}>
      { children }
    </button>
  );
}