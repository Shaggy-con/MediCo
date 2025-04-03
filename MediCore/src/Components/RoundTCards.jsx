import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

function RoundTCards({ list }) {
  // TODO : Add functioning to the button

  return (
    <div className="grid grid-cols-3 gap-4 w-[100%] p-[3em]">
      {list.map((el) => (
        <div
          key={uuidv4()}
          className="bg-color-white rounded-xl bg-white col-span-1 p-[1em] text-center"
        >
          <h3 className="logoFont text-2xl">{el.title}</h3>
          <br />
          <h2>
            Date and Title : {el.date} , {el.time}
          </h2>
          <br />
          <h2>
            <u>Destinations</u>
          </h2>
          {el.destinations.map((dest) => (
            <li key={uuidv4()}>{dest}</li>
          ))}
          <br />
          <Button text="Check out!!!"></Button>
        </div>
      ))}
    </div>
  );
}

export default RoundTCards;
