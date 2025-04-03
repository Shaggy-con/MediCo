import { Link } from "react-router-dom";

function RouteButton({ text, route = "/" }) {
  return (
    <Link
      to={route}
      className="bg-yellow-500 m-[0.5em] p-[0.5em] border-2 rounded-[0.5em]"
    >
      {text}
    </Link>
  );
}

export default RouteButton;
