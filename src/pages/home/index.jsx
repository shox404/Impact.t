import Navbar from "../../components/navbar";
import { ArrowRightOutlined, CaretRightFilled } from "@ant-design/icons";
import "./styles.scss";

export default function Home() {
  return (
    <div>
      <Navbar color={"white"} />
      <div className="bg-[#1C1C1C]">
        <h1 className="bg-gradient-to-r from-[#F9F9F9] to-[#939393] bg-clip-text text-transparent text-center w-3/4 text-8xl m-auto py-44 px-20">
          The place for people with global ambitions
        </h1>
        <hr className="w-[92%] m-auto" />
        <div className="grid grid-cols-3 text-white px-14 pt-10 pb-20">
          <p>
            The largest coworking <br /> center in Uzbekistan
          </p>
          <p className="flex items-center gap-3 m-auto">
            Play the video
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <CaretRightFilled className="text-black scale-125" />
            </div>
          </p>
          <div className="flex justify-end">
            <button className="h-12 bg-[#FF5A26] w-[170px] rounded-full">
              OUR SPACES
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-14 rounded-t-3xl grid grid-cols-2 -mt-6">
        <p className="pb-28">
          IMPACT.T is a technological hub <br /> for people who build the
          companies <br />
          of the future.
        </p>
        <div className="text-lg flex flex-col gap-8 pb-28 w-full">
          <h1>
            <span className="pl-12">
              A place where a community is born, where
            </span>
            people help each other create useful companies and products, and
            also exchange experiences and knowledge, making new acquaintances.
          </h1>
          <h1>
            Discover a vibrant coworking community designed for productivity,
            collaboration, and success!
          </h1>
        </div>
        <img src={require("../../assets/images/home/img-1.png")} />
        <img
          src={require("../../assets/images/home/img-2.png")}
          className=" w-full"
        />
      </div>
      <div className="rounded-t-3xl p-14 bg-[#2D2D2D] flex justify-between gap-14 text-white">
        <div className="card w-1/2">
          <img
            src={require("../../assets/images/home/img-3.png")}
            className="rounded-2xl object-cover h-[420px]"
          />
          <div className="flex flex-col gap-5 py-5">
            <div className="flex gap-5 justify-between items-center">
              <h1 className="text-2xl">Impact.t Technology hub</h1>
              <p className="text-[#A4A4A4] text-sm">
                Technology hub, Coworking, Accelerator
              </p>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <p className="text-[#A4A4A4] text-sm font-light">
                Tashkent, Chilanzar district, <br />
                Bogibuston Street 186
              </p>
              <button className="bg-white text-black rounded-full py-2 px-5 text-sm">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
        <div className="card w-1/2">
          <img
            src={require("../../assets/images/home/img-4.png")}
            className="rounded-2xl object-cover h-[420px]"
          />
          <div className="flex flex-col gap-5 py-5">
            <div className="flex gap-5 justify-between items-center">
              <h1 className="text-2xl">Impact.t Studio</h1>
              <p className="text-[#A4A4A4] text-sm">
                Coworking space and Art Gallery
              </p>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <p className="text-[#A4A4A4] text-sm font-light">
                Tashkent, Yakkasaray district,
                <br /> Abdulla Qahhar Street 30a
              </p>
              <button className="bg-white text-black rounded-full py-2 px-5 text-sm">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl p-14 -mt-6 bg-white">
        <h1 className="text-2xl">Our Spaces</h1>
        <div className="mt-10 flex gap-9">
          <div className="card w-1/3 bg-no-repeat bg-cover relative">
            <img
              src={require("../../assets/images/home/img-5.png")}
              className="object-cover w-full"
            />
            <div className="items w-full absolute top-0 p-7 text-white flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <button className="bg-white text-black rounded-full py-2 px-5 text-sm">
                  Seat in open landscape
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h1>Open space</h1>
                  <p>Starting 70 000 uzs / day</p>
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRightOutlined className="text-black scale-125" />
                </div>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-no-repeat bg-cover relative">
            <img
              src={require("../../assets/images/home/img-6.png")}
              className="object-cover w-full"
            />
            <div className="items w-full absolute top-0 p-7 text-white flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <button className="bg-white text-black rounded-full py-2 px-5 text-sm">
                  Capacity 8 people
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h1>Meeting Rooms</h1>
                  <p>Starting 100 000 uzs / hourse</p>
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRightOutlined className="text-black scale-125" />
                </div>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-no-repeat bg-cover relative">
            <img
              src={require("../../assets/images/home/img-7.png")}
              className="object-cover w-full"
            />
            <div className="items w-full absolute top-0 p-7 text-white flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <button className="bg-white text-black rounded-full py-2 px-5 text-sm">
                  Large teams 15-20 people
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h1>Offices</h1>
                  <p>Starting 5 000 000 uzs / month</p>
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRightOutlined className="text-black scale-125" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-14">
          <h1 className="text-2xl">Our Advantages</h1>
          <div className="w-3/5">
            <h1 className="text-[#8D8D8D]">Coworking = Networking</h1>
            <div className="flex my-6">
              <p className="w-1/2">
                Discover the Advantages of choosing <br /> our co-working space
              </p>
              <p className="w-1/2">
                Why choose us? your path to <br /> success starts here
              </p>
            </div>
            <div className="flex flex-col gap-3 text-white">
              <div className="p-10 rounded-2xl bg-[#2D2D2D]">
                Flexible Schedule and Conditions
              </div>
              <div className="p-10 rounded-2xl bg-[#FF5722] flex">
                <div className="flex flex-col gap-6">
                  <h1>Extensive Networking</h1>
                  <p>Our community represents a wide range of professionals from various fields. Here, you can easily expand your professional connections and find new partners or clients.</p>
                </div>
                <img src={require("../../assets/images/home/img-8.png")} />
              </div>
              <div className="p-10 rounded-2xl bg-[#2D2D2D]">
                Conveniences and Comfort
              </div>
              <div className="p-10 rounded-2xl bg-[#2D2D2D]">
                Interesting Events
              </div>
              <div className="p-10 rounded-2xl bg-[#2D2D2D]">
                Continuous Support
              </div>
              <div className="p-10 rounded-2xl bg-[#2D2D2D]">
                Unique Atmosphere
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
