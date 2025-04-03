import { Link } from "react-router-dom";
import RouteButton from "./RouteButton";

function Navbar() {
  //TODO : add functioning to the project

  return (
    <div className="min-h-[60px] flex flex-row bg-yellow-300 justify-between px-4">
      <Link to={"/"} className="logoFont text-[25px] self-center">
        Librazen
      </Link>
      <div className="flex flex-row">
        <RouteButton text={"Register"} route={"/register"}></RouteButton>
        <RouteButton text={"Patient"} route={"/login"}></RouteButton>
        <RouteButton text={"Doctor"} route={"/doctor"}></RouteButton>
        <RouteButton text={"Pharmacy"} route={"/pharmacy"}></RouteButton>
        <RouteButton text={"Finance"} route={"/finance"}></RouteButton>
        <RouteButton text={"ER Ward"} route={"/er"}></RouteButton>
      </div>
    </div>
  );
}

export default Navbar;
