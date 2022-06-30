import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <div className="container-fluid text-dark">
          <div className="featured row m-0 px-md-5 d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h3 className="main-header">
                {" "}
                Organize <br />
                tasks, sketch, and write notes.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptates, corporis blanditiis minima,
              </p>

              <Link href="/signup" passHref>
                <button className="btn btn-dark btn-lg d-block mt-2">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="">
                <img
                  src="/illustration.png"
                  className="img-fluid"
                  style={{ height: "550px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
