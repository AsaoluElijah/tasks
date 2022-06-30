const ActionDropdown = ({ theme }) => {
  return (
    <div className="dropdown">
      <a
        className={`btn btn-${theme || "dark"} btn-sm py-0 ropdown-toggle`}
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        .&nbsp;.
      </a>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">
            Copy
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ActionDropdown;
