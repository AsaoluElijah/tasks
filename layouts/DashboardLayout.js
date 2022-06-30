import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0 d-none d-md-block">
          <Sidebar />
        </div>
        <div className="col-md-10 p-0">
          <div className="">
            <Navbar />
          </div>
          <div className="container mt-4" style={{ height: "85%" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
