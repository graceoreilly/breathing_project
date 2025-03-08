/* eslint-disable react/prop-types */
import logo from "../../Images/wellness-logo.png";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <>
    <Link to="/">
    <img
      src={logo}
      alt="Logo containing a wave and leave style drawing"
      className={className}
    />
    </Link>
    </>
  );
}

export default Logo;
