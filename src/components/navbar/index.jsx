import logoWhite from "../../assets/materials/logo-white.png";
import logoBlack from "../../assets/materials/logo-black.png";
import "./styles.scss";


export default function Navbar({ color }) {
  return (
    <nav 
      className={`w-full sticky top-0 grid grid-cols-3 px-14 py-8 align-baseline text-xs font-normal ${
        color == "black" ? "text-black" : "text-white"
      }`}
    >
      <ul className="flex gap-9">
        <li>GALLERY</li>
      
        <li>OFFICE</li>
        
        <li className="text-nowrap">OPEN SPACE</li>
        <li className="text-nowrap">MEETING ROOMS</li>
      </ul>
      <img src={color == "black" ? logoBlack : logoWhite} className="m-auto" />
      <ul className="flex gap-9 justify-end align-baseline">
        <li>NEWS</li>
        <li>CONTACTS</li>
        <select value={"EN"}>
          <option>EN</option>
          <option>RU</option>
        </select>
        <li className="text-nowrap">BOOKING SPACE</li>
      </ul>
    </nav>
  );
}
