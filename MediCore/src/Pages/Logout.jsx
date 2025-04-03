import Button from "../Components/Button";

function Logout() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Do you want to really Logout ?
      </h1>
      <br />
      <div className="text-3xl">
        <Button text="Logout"></Button>
        <Button text="Cancel"></Button>
      </div>
    </div>
  );
}

export default Logout;
