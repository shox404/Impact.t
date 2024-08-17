import "./styles.scss";
import logo from "../../assets/materials/logo.png";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>GALLERY</li>
        <li>OFFICE</li>
        <li>OPEN SPACE</li>
        <li>MEETING ROOMS</li>
      </ul>
      <img src={logo} />
      <ul>
        <li>GALLERY</li>
        <li>OFFICE</li>
        <li>OPEN SPACE</li>
        <li>MEETING ROOMS</li>
      </ul>
    </nav>
  );
}
