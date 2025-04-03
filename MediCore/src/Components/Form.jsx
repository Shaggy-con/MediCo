import Button from "./Button";

function Form({ Id, Password, work }) {
  const inp =
    "bg-white m-[0.5em] h-[1.7em] rounded-[1em] w-[70%] pl-[0.7em] pr-[0.7em]";

  return (
    <div className="bg-blue-100 min-w-[600px] w-1/2 p-[1em] rounded-xl flex flex-col items-center">
      <h1 className="text-2xl">Please Enter your details</h1>
      <br />
      <br />
      <form action="" className="flex flex-col items-center w-[90%]">
        <label htmlFor="ID">ID Number</label>
        <input type="text" id="ID" className={inp} />
        <br />
        <label htmlFor="Pass">Password</label>
        <input type="password" id="Pass" className={inp} />
        <Button text={"Login"} work={work}></Button>
      </form>
    </div>
  );
}

export default Form;
