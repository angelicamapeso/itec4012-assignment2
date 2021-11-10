import "./styles.scss";

export default function LinkWrapper({
  children,
  id = "",
  className = "",
  href = "/",
}) {
  return (
    <a id={id} className={'link-wrapper ' + className} href={href}>
      { children }
    </a>
  );
}