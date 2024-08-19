import {
  InstagramOutlined,
  SendOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="bg-[#1C1C1C] rounded-t-3xl -mt-6 relative p-10 ">
      <ul className="flex gap-9 text-[#B4B4B4] justify-center md:flex-wrap">
        <li>GALLERY</li>
        <li>OFFICE</li>
        <li className="text-nowrap">OPEN SPACE</li>
        <li className="text-nowrap">MEETING ROOMS</li>
      </ul>
      <div className="my-14">
        <h1 className="bg-gradient-to-r from-[#F9F9F9] to-[#939393] bg-clip-text text-transparent text-center w-3/4 text-7xl m-auto py-10 px-20 md:text-5xl md:w-full md:px-5">
          VISIT US TODAY
        </h1>
        <div className="flex justify-center gap-3 md:flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="px-5 py-3 rounded-full bg-[#3A3A3A] text-white md:w-full"
          />
          <input
            type="text"
            defaultValue="+998"
            className="px-5 py-3 rounded-full bg-[#3A3A3A] text-white md:w-full"
          />
          <button className="px-4 py-3 rounded-full bg-white md:w-full">
           <span className="hidden md:inline">SEND</span> <SendOutlined />
          </button>
        </div>
      </div>
      <div className="flex pt-10 items-end justify-between md:flex-wrap">
        <img
          src={require("../../assets/materials/logo-white.png")}
          className="w-28"
        />
        <p className="text-white md:hidden">© 2024 Created by zukhuri</p>
        <div className="flex gap-2">
          <div className="px-3 py-2 rounded-full bg-white">
            <InstagramOutlined />
          </div>
          <div className="px-3 py-2 rounded-full bg-white">
            <YoutubeOutlined />
          </div>
          <div className="px-3 py-2 rounded-full bg-white">
            <SendOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}
