import { Link } from "react-router-dom";
import Logo from "../assets/images/STREAMIFY.svg";

export default function Sidebar() {
  return (
    <aside className="bs-sidebar">
      <div className="sidebar-inner-wrapper h-100">
        <div className="navbar d-block h-100">
          <div>
            <div className="logo-wrapper text-center">
              <img src={Logo} className="img-fluid mx-auto" alt="" />
            </div>
            <div className="border"></div>
          </div>
          <div className="pt-4">
            <ul className="navbar-list h-100">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  <span className="icon icon-dashboard"></span> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tables" className="nav-link">
                  <span className="icon icon-chart"></span> Tables
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/billing" className="nav-link">
                  <span className="icon icon-card"></span> Billing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rtl" className="nav-link">
                  <span className="icon icon-setting"></span> RTL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
