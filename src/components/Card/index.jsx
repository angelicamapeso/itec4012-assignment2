import "./styles.scss";

export default function Card({
  id = "",
  className = "",
  children,
  // whether or not to overlay children
  // on top of background
  overlay = false,
  color = "#FFF",
  src = "",
  alt="",
}) {
  const image = <img className="card-img" src={src} alt={alt}/>

  return (
    <div
      id={id}
      className={'card' +
        (className ? ' ' + className : '') +
        (overlay ? ' card-overlay' : '')
      }
    >
      { src ? image : null}
      <div
        className="card-contents"
        style={{ backgroundColor: overlay ? 'transparent' : color }}
      >
        { children }
      </div>
    </div>
  );
}