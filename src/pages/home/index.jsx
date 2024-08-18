import Navbar from "../../components/navbar";
import {
  ArrowRightOutlined,
  CaretRightFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { Avatar } from "antd";

export default function Home() {
  return (
    <div>
      <Navbar color={"white"} />
      <div className="bg-[#1C1C1C]">
        <h1 className="bg-gradient-to-r from-[#F9F9F9] to-[#939393] bg-clip-text text-transparent text-center w-3/4 text-8xl m-auto py-44 px-20">
          The place for people with global ambitions
        </h1>
        <hr className="w-[92%] m-auto" />
        <div className="grid grid-cols-3 text-[#EBEBEB] px-14 pt-10 pb-20">
          <p>
            The largest coworking <br /> center in Uzbekistan
          </p>
          <p className="flex items-center gap-3 m-auto">
            Play the video
            <div className="h-10 w-10 bg-[#EBEBEB] rounded-full flex items-center justify-center">
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
      <div className="bg-[#EBEBEB] p-14 rounded-t-3xl grid grid-cols-2 -mt-6">
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
      <div className="rounded-t-3xl p-14 bg-[#2D2D2D] flex justify-between gap-14 text-[#EBEBEB]">
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
              <button className="bg-[#EBEBEB] text-black rounded-full py-2 px-5 text-sm">
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
              <button className="bg-[#EBEBEB] text-black rounded-full py-2 px-5 text-sm">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl p-14 -mt-6 bg-[#EBEBEB]">
        <h1 className="text-2xl">Our Spaces</h1>
        <div className="mt-10 flex gap-9">
          <div className="card w-1/3 bg-no-repeat bg-cover relative">
            <img
              src={require("../../assets/images/home/img-5.png")}
              className="object-cover w-full"
            />
            <div className="items w-full absolute top-0 p-7 text-[#EBEBEB] flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <button className="bg-[#EBEBEB] text-black rounded-full py-2 px-5 text-sm">
                  Seat in open landscape
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h1>Open space</h1>
                  <p>Starting 70 000 uzs / day</p>
                </div>
                <div className="h-10 w-10 bg-[#EBEBEB] rounded-full flex items-center justify-center">
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
            <div className="items w-full absolute top-0 p-7 text-[#EBEBEB] flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <button className="bg-[#EBEBEB] text-black rounded-full py-2 px-5 text-sm">
                  Capacity 8 people
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h1>Meeting Rooms</h1>
                  <p>Starting 100 000 uzs / hourse</p>
                </div>
                <div className="h-10 w-10 bg-[#EBEBEB] rounded-full flex items-center justify-center">
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
            <div className="items w-full absolute top-0 p-7 text-[#EBEBEB] flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <button className="bg-[#EBEBEB] text-black rounded-full py-2 px-5 text-sm">
                  Large teams 15-20 people
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h1>Offices</h1>
                  <p>Starting 5 000 000 uzs / month</p>
                </div>
                <div className="h-10 w-10 bg-[#EBEBEB] rounded-full flex items-center justify-center">
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
            <div className="flex flex-col gap-3 text-[#EBEBEB]">
              <div className="p-10 rounded-2xl bg-[#2D2D2D]">
                Flexible Schedule and Conditions
              </div>
              <div className="p-10 rounded-2xl bg-[#FF5722] flex">
                <div className="flex flex-col gap-6">
                  <h1>Extensive Networking</h1>
                  <p>
                    Our community represents a wide range of professionals from
                    various fields. Here, you can easily expand your
                    professional connections and find new partners or clients.
                  </p>
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
      <div className="bg-[#2D2D2D] p-14 rounded-t-3xl flex justify-between text-[#EBEBEB]">
        <h1 className="text-2xl">Our Partners</h1>
        <div className="w-3/5">
          <h1 className="text-[#8D8D8D]">50+ Company</h1>
          <div className="flex my-6 font-light gap-20">
            <p className="w-1/2">
              As a valued partner, your presence enriches our community of
              innovators,
              <br /> creators, and entrepreneurs
            </p>
            <p className="w-1/2">
              Our co-working space is <br /> designed to foster collaboration,
              <br /> productivity, and creativity
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-5">
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/kfc.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/payme.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/korzina.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/tbc.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/taxi.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/epam.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/itpark.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/cloud.png")} />
            </div>
            <div className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/bank.png")} />
            </div>
          </div>
          <div className="flex justify-end my-8">
            <button className="bg-transparent border px-7 py-3 rounded-full">
              SHOW ALL
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl p-14 -mt-6 bg-[#EBEBEB]">
        <div className="flex justify-between my-14">
          <h1 className="text-2xl">Reviews</h1>
          <div className="w-3/5 flex flex-col gap-3 text-[#EBEBEB]">
            <div className="p-10 rounded-2xl bg-white text-black">
              <div className="flex justify-between gap-6">
                <div className="font-light">
                  <Avatar
                    src={require("../../assets/images/home/avatar.png")}
                    size={"large"}
                  />
                  <p>Artem Nestrov</p>
                  <p className="text-[#B3B3B3]">CEO intro group</p>
                </div>
                <div className="text w-3/4">
                  <h1 className="text-[#B3B3B3]">Quote</h1>
                  <p className="my-5">
                    Dual feelings. On the one hand, a pleasant renovation,
                    hospitable staff, and on the other, the first floor is
                    packed like sardines, swinging tables on 4 m. The Internet
                    sometimes disappears, and no one can really help with this
                    “it works for me.
                  </p>
                </div>
              </div>
              <hr className="m-auto w-[95%] my-10" />
              <button className="bg-transparent border h-10 w-10 rounded-full">
                <LeftOutlined />
              </button>
              <button className="bg-transparent border h-10 w-10 rounded-full ml-3">
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="my-14 pt-14">
          <div className="flex justify-between">
            <h1 className="text-2xl">News</h1>
            <div className="w-3/5">
              <h1 className="text-[#8D8D8D]">CEvents, Blog, News</h1>
              <div className="flex my-6">
                <p className="w-1/2">
                  Discover the Discover a treasure trove of articles designed to
                  fuel your creativity, enhance your productivity, and keep you
                  connected with the pulse of the co-working world
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-10 justify-between">
            <div className="card w-1/3 bg-no-repeat bg-cover relative">
              <div className="relative">
                <img
                  src={require("../../assets/images/home/card-1.png")}
                  className="w-full"
                />
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
                  <ArrowRightOutlined className="text-black scale-125" />
                </div>
              </div>
              <h1 className="my-5">
                How to hire the right product manager for your company
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-[#FF5722] flex gap-2 items-center">
                  <img src={require("../../assets/images/home/vector-3.png")} />
                  Event
                </p>
                <p className="text-[#2D2D2D]">| June 18, 2024 • 19:00</p>
              </div>
            </div>
            <div className="card w-1/3 bg-no-repeat bg-cover relative">
              <div className="relative">
                <img
                  src={require("../../assets/images/home/card-2.png")}
                  className="w-full"
                />
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
                  <ArrowRightOutlined className="text-black scale-125" />
                </div>
              </div>
              <h1 className="my-5">Welcome to Impact Studio</h1>
              <div className="flex items-center gap-2">
                <p className="text-[#FF5722] flex gap-2 items-center">
                  <img src={require("../../assets/images/home/vector-2.png")} />
                  News
                </p>
                <p className="text-[#2D2D2D]">| June 15, 2024 • Read 12 min</p>
              </div>
            </div>
            <div className="card w-1/3 bg-no-repeat bg-cover relative">
              <div className="relative">
                <img
                  src={require("../../assets/images/home/card-3.png")}
                  className="w-full"
                />
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
                  <ArrowRightOutlined className="text-black scale-125" />
                </div>
              </div>
              <h1 className="my-5">Impact.t hub: social innovation hub</h1>
              <div className="flex items-center gap-2">
                <p className="text-[#FF5722] flex gap-2 items-center">
                  <img src={require("../../assets/images/home/vector-1.png")} />
                  Blog
                </p>
                <p className="text-[#2D2D2D]">| May 2 8, 2024 • Read 7 min</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-8">
            <button className="bg-transparent border px-7 py-2 rounded-full border-black">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
