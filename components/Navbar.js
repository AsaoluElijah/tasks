const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light bg- border-bottom"
        style={{ background: "#fbfbfbd4", color: "#292d1c" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <h4>Tasks</h4>
          </a>
          <div className="d-flex ml-auto">
            <div className="px-3 py-2 fw-bold rounded-circle border bg-white">
              A
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
