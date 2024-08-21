import logoWhite from "../../assets/materials/logo-white.png";
import logoBlack from "../../assets/materials/logo-black.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function Navbar({ color }) {
  const [state, setState] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTop(window.scrollY);
    });
    if (window.innerWidth >= 768) setState(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setState(true);
    });
  }, []);

  const toggle = () => setState(!state);

  return (
    <nav
      className={`w-full fixed top-0 grid grid-cols-3 px-14 py-8 align-baseline text-xs font-normal z-50 transition-all md:grid-cols-1 md:p-14 ${top > 100 ? (color == "black" ? "bg-white" : "bg-black") : ""
        } ${color == "black" ? "text-black md:bg-white" : "text-white md:bg-black"
        } ${state ? 0 : "top-[-100%]"}`}
    >
      <ul className="flex gap-9 md:flex-wrap md:justify-center">
      <Link to={'/gallery'}>
      <li>GALLERY</li>
        </Link>
        <Link to={'/office'}>
          <li>OFFICE</li>
        </Link>
        <Link to={"/open-space"}>
          <li className="text-nowrap">OPEN SPACE</li>
        </Link>
        <Link to={'/rooms'}>
          <li className="text-nowrap">MEETING ROOMS</li>

        </Link>
      </ul>
      <Link to={"/"}>
        <img
            src={color == "black" ? logoBlack : logoWhite}
          className="m-auto md:my-10"
        />
      </Link>
      <ul className="flex gap-9 justify-end align-baseline md:flex-wrap md:justify-center">
        <Link to={'/new'}>
          <li>NEWS</li>
        </Link>        <Link to={'/about'}>
        <li>CONTACTS</li>

      </Link>

        {/*<li>CONTACTS</li>*/}
        <select value={"EN"} className="bg-transparent outline-none">
          <option className={color !== "black" ? "text-black" : "text-white"}>
            EN
          </option>
          <option className={color !== "black" ? "text-black" : "text-white"}>
            RU
          </option>
        </select>
        <Link to={'/about-studio'}>
          <li className="text-nowrap">BOOKING SPACE</li>
        </Link>
      </ul>
      <button
          onClick={toggle}
        className="hidden fixed top-5 right-5 py-2 px-4 rounded-full md:inline bg-black"
      >
        MENU
      </button>
    </nav>
  );
}
