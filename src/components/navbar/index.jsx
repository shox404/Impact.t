import logo from "../../assets/materials/logo.png";
import { Select } from "antd";
import "./styles.scss";

export default function Navbar() {
  return (
    <nav className="flex">
      <ul>
        <li>GALLERY</li>
        <li>OFFICE</li>
        <li>OPEN SPACE</li>
        <li>MEETING ROOMS</li>
      </ul>
      <img src={logo} />
      <ul>
        <li>NEWS</li>
        <li>CONTACTS</li>
        <Select value={"EN"} className="">
          <Select.Option>EN</Select.Option>
          <Select.Option>RU</Select.Option>
        </Select>
        <li>BOOKING SPACE</li>
      </ul>
    </nav>
  );
}
