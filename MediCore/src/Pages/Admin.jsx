import Form from "../Components/Form";

function Admin() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
          Admin Portal
        </h1>
        <br />
        <br />
        <Form></Form>
      </div>
    </div>
  );
}

export default Admin;
