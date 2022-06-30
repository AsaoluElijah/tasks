import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [showAlert, setshowAlert] = useState({ status: false, message: null });

  return (
    <div className="container d-flex min-vh-100 justify-content-center align-items-center">
      <div className="shadow rounded text-dark border p-5 bg-white">
        <form action="/dashboard">
          <h2 className="fw-bolder">Create new account</h2>
          {showAlert.status && (
            <div className="d-none mt-4 alert alert-info">
              <strong>Error: </strong>
              {showAlert.message}
            </div>
          )}
          <div className="form-group mt-4">
            <label htmlFor="username">Choose username</label>
            <input type="text" id="username" className="form-control" />
          </div>{" "}
          <div className="form-group mt-3">
            <label htmlFor="password">Choose password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-dark w-100">Continue</button>
          </div>
          <div className="form-group mt-4 text-end">
            <small>
              Already have an account?{" "}
              <Link href="/login" passHref>
                <a>Login</a>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
