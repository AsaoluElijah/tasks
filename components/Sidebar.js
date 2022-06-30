import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="container border-end">
      <ul className="nav nav-pills flex-column min-vh-100 justify-content-center">
        <li>
          <Link href="/dashboard" passHref>
            <a className="nav-link active link-light">Tasks</a>
          </Link>
        </li>

        <li className="my-4">
          <Link href="/dashboard/note" passHref>
            <a className="nav-link link-light">Notes</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/sketch" passHref>
            <a className="nav-link link-light">Sketch</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
