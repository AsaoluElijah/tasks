import DashboardLayout from "../../layouts/DashboardLayout";
import Head from "next/head";

const Note = () => {
  return (
    <>
      <Head>
        <title>Note - Write cool stuffs</title>
      </Head>
      <div className="alert alert-info">Notes interface in progress.</div>
      <div
        className="blinking-cursor "
        style={{ border: "none", outline: "none" }}
      >
        |
      </div>
    </>
  );
};

export default Note;

Note.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
