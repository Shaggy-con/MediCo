import Button from "../Components/Button";
import Form from "../Components/Form";

function Login() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Login
      </h1>
      <br />
      <br />
      <Form></Form>
    </div>
  );
}

export default Login;
