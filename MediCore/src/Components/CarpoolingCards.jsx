import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

function CarpoolingCards({ list }) {
  return (
    <div className="grid grid-cols-3 gap-4 w-[100%] p-[2em]">
      {list.map((el) => (
        <div
          key={uuidv4()}
          className="bg-color-white rounded-xl bg-white col-span-1 p-[1em] text-center"
        >
          <h3 className="logoFont text-2xl">{el.destination}</h3>
          <br />
          <h2>
            Date and Title : {el.date} , {el.time}
          </h2>
          <br />
          <Button text="Check out!!!"></Button>
        </div>
      ))}
    </div>
  );
}

export default CarpoolingCards;
