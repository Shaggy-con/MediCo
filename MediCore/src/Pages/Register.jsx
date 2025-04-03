import Button from "../Components/Button";

function Register() {
  const inp =
    "bg-white m-[0.5em] h-[1.7em] rounded-[1em] w-[70%] pl-[0.7em] pr-[0.7em]";

  return (
    <div className="flex flex-col items-center ">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Registeration
      </h1>
      <form
        action=""
        className="bg-blue-100 min-w-[600px] w-1/2 p-[1em] rounded-xl flex flex-col items-center"
      >
        <h1 className="text-2xl">Enter you details here to register</h1>
        <br />
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className={inp} />
        <br />
        <label htmlFor="phone">Phone number</label>
        <input type="text" id="phone" className={inp} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" className={inp} />
        <br />
        <label htmlFor="passN">Enter new password</label>
        <input type="password" id="passN" className={inp} />
        <br />
        <label htmlFor="passC">Confirm Password</label>
        <input type="password" id="passC" className={inp} />
        <br />
        <Button text="Register"></Button>
      </form>
    </div>
  );
}

export default Register;
