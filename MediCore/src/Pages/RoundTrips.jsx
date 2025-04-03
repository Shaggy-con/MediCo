import RoundTCards from "../Components/RoundTCards.jsx";

function RoundTrips() {
  let obj = {
    title: "Trip of the day",
    destinations: ["Place 1", "Place 2", "Place 3"],
    time: "9:00PM",
    date: "19/04/2025",
    people: ["A", "B", "C"],
  };

  let obj4 = {
    title: "Trip of the day",
    destinations: ["Place 1", "Place 2", "Place 3"],
    time: "9:00PM",
    date: "19/04/2025",
    people: ["A", "B", "C"],
  };

  let obj2 = {
    title: "Trip of the day",
    destinations: ["Place 1"],
    time: "9:00PM",
    date: "19/04/2025",
    people: ["A", "B"],
  };

  let obj3 = {
    title: "Trip of the day",
    destinations: ["Place 1", "Place 2", "Place 3"],
    time: "9:00PM",
    date: "19/04/2025",
    people: ["A", "B", "C"],
  };

  let arr = [obj, obj2, obj3, obj4];

  return (
    <div className="flex flex-col items-center">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Round Trips to enjoy
      </h1>
      <RoundTCards list={arr} className="w-[100%]"></RoundTCards>
    </div>
  );
}

export default RoundTrips;
