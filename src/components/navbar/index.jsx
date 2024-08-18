import logoWhite from "../../assets/materials/logo-white.png";
import logoBlack from "../../assets/materials/logo-black.png";
import "./styles.scss";
import {Link } from "react-router-dom";
export default function Navbar({ color }) {
  return (
    <nav
      className={`w-full fixed top-0 grid grid-cols-3 px-14 py-8 align-baseline text-xs font-normal z-50 ${
        color == "black" ? "text-black" : "text-white"
      }`}
    >
      <ul className="flex gap-9">
        <li>GALLERY</li>
        <li>OFFICE</li>
        <Link to={"/open-space"}>
          <li className="text-nowrap">OPEN SPACE</li>
        </Link>
        <li className="text-nowrap">MEETING ROOMS</li>
      </ul>
      <img src={color == "black" ? logoBlack : logoWhite} className="m-auto" />
      <ul className="flex gap-9 justify-end align-baseline">
        <li>NEWS</li>
        <li>CONTACTS</li>
        <select value={"EN"} className="bg-transparent outline-none">
          <option className={color !== "black" ? "text-black" : "text-white"}>
            EN
          </option>
          <option className={color !== "black" ? "text-black" : "text-white"}>
            RU
          </option>
        </select>
        <li className="text-nowrap">BOOKING SPACE</li>
      </ul>
    </nav>
  );
}
