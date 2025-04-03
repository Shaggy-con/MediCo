import CarpoolingCards from "../Components/CarpoolingCards";

function Carpooling() {
  let obj = {
    destination: "A",
    time: "9:00AM",
    date: "19/04/2025",
    maxCapacity: 5,
    people: ["A", "B", "C"],
  };

  let obj2 = {
    destination: "A",
    time: "9:00AM",
    date: "19/04/2025",
    maxCapacity: 5,
    people: ["A", "B", "C"],
  };

  let arr = [obj, obj2];

  return (
    <div className="flex flex-col items-center">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Carpoolings
      </h1>
      <CarpoolingCards list={arr}></CarpoolingCards>
    </div>
  );
}

export default Carpooling;
