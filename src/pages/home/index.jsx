import Navbar from "../../components/navbar";
import {
  ArrowRightOutlined,
  CaretRightFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { Avatar } from "antd";
import "aos/dist/aos.css";
import AOS from 'aos'
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div >
      <Navbar color={"white"} />
      <div className="bg-[#1C1C1C]">
        <h1 data-aos='fade-down' className="bg-gradient-to-r from-[#F9F9F9] to-[#939393] bg-clip-text text-transparent text-center w-3/4 text-8xl m-auto py-44 px-20 md:text-5xl md:w-full md:px-10">
          The place for people with global ambitions
        </h1>
        <hr className="w-[92%] m-auto" />
        <div className="grid grid-cols-3 text-[#EBEBEB] px-14 pt-10 pb-20 gap-6 md:grid-cols-1">
          <p data-aos='fade-up' className="md:text-center">
            The largest coworking <br /> center in Uzbekistan
          </p>
          <p data-aos='fade-up' data-aos-delay="200" className="flex items-center gap-3 m-auto">
            Play the video
            <div className="h-10 w-10 bg-[#EBEBEB] rounded-full flex items-center justify-center">
              <CaretRightFilled className="text-black scale-125" />
            </div>
          </p>
          <div data-aos='fade-up' data-aos-delay="300" className="flex justify-end md:justify-center">
            <button className="h-12 bg-[#FF5A26] w-[170px] rounded-full">
              OUR SPACES
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#EBEBEB] p-14 rounded-t-3xl grid grid-cols-2 -mt-6 md:grid-cols-1 md:p-5">
        <p data-aos='fade-down' className="pb-28">
          IMPACT.T is a technological hub <br /> for people who build the
          companies <br />
          of the future.
        </p>
        <div className="text-lg flex flex-col gap-8 pb-28 w-full">
          <h1 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'>
            <span className="pl-12">
              A place where a community is born, where
            </span>
            people help each other create useful companies and products, and
            also exchange experiences and knowledge, making new acquaintances.
          </h1>
          <h1 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
            Discover a vibrant coworking community designed for productivity,
            collaboration, and success!
          </h1>
        </div>
        <img data-aos='fade-left' data-aos-duration='1000'
          src={require("../../assets/images/home/img-1.png")}
          className="md:w-full"
        />
        <img data-aos='fade-right' data-aos-duration='1000' data-aos-delay-='1000'
          src={require("../../assets/images/home/img-2.png")}
          className="w-full md:mt-8"
        />
      </div>
      <div className="rounded-t-3xl p-14 bg-[#2D2D2D] flex justify-between gap-14 text-[#EBEBEB] md:flex-wrap md:p-5">
        <div className="card w-1/2 md:w-full">
          <img  data-aos='zoom-in'
            src={require("../../assets/images/home/img-3.png")}
            className="rounded-2xl object-cover h-[420px] md:h-[200px]"
          />
          <div className="flex flex-col gap-5 py-5">
            <div className="flex gap-5 justify-between items-center md:flex-wrap">
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
        <div className="card w-1/2 md:w-full">
          <img data-aos='zoom-in'
            src={require("../../assets/images/home/img-4.png")}
            className="rounded-2xl object-cover h-[420px] md:h-[200px]"
          />
          <div className="flex flex-col gap-5 py-5">
            <div className="flex gap-5 justify-between items-center md:flex-wrap">
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
      <div className="rounded-t-3xl p-14 -mt-6 bg-[#EBEBEB] md:p-5">
        <h1 className="text-2xl">Our Spaces</h1>
        <div className="mt-10 flex gap-9 md:flex-wrap">
          <div data-aos='fade-up' className="card w-1/3 bg-no-repeat bg-cover relative md:w-full">
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
          <div data-aos='fade-up'  className="card w-1/3 bg-no-repeat bg-cover relative md:w-full">
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
          <div data-aos='fade-up' className="card w-1/3 bg-no-repeat bg-cover relative md:w-full">
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
        <div className="flex justify-between my-14 md:flex-wrap">
          <h1 className="text-2xl">Our Advantages</h1>
          <div className="w-3/5 md:w-full">
            <h1 className="text-[#8D8D8D]">Coworking = Networking</h1>
            <div className="flex my-6 md:flex-wrap md:gap-5">
              <p className="w-1/2 md:w-full">
                Discover the Advantages of choosing <br /> our co-working space
              </p>
              <p className="w-1/2 md:w-full">
                Why choose us? your path to <br /> success starts here
              </p>
            </div>
            <div className="flex flex-col gap-3 text-[#EBEBEB]">
              <div data-aos='fade-right' className="p-10 rounded-2xl bg-[#2D2D2D]">
                Flexible Schedule and Conditions
              </div>
              <div data-aos='fade-right' className="p-10 rounded-2xl bg-[#FF5722] flex md:flex-wrap gap-8">
                <div  className="flex flex-col gap-6">
                  <h1>Extensive Networking</h1>
                  <p>
                    Our community represents a wide range of professionals from
                    various fields. Here, you can easily expand your
                    professional connections and find new partners or clients.
                  </p>
                </div>
                <img src={require("../../assets/images/home/img-8.png")} />
              </div>
              <div data-aos='fade-right' className="p-10 rounded-2xl bg-[#2D2D2D]">
                Conveniences and Comfort
              </div>
              <div data-aos='fade-right' className="p-10 rounded-2xl bg-[#2D2D2D]">
                Interesting Events
              </div>
              <div data-aos='fade-right' className="p-10 rounded-2xl bg-[#2D2D2D]">
                Continuous Support
              </div>
              <div data-aos='fade-right' className="p-10 rounded-2xl bg-[#2D2D2D]">
                Unique Atmosphere
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2D2D2D] p-14 rounded-t-3xl flex justify-between text-[#EBEBEB] md:p-5 md:flex-wrap">
        <h1 className="text-2xl">Our Partners</h1>
        <div className="w-3/5 md:w-full">
          <h1 className="text-[#8D8D8D]">50+ Company</h1>
          <div className="flex my-6 font-light gap-20 md:flex-wrap md:gap-10">
            <p className="w-1/2 md:w-full">
              As a valued partner, your presence enriches our community of
              innovators,
              <br className="md:hidden" /> creators, and entrepreneurs
            </p>
            <p className="w-1/2 md:w-full">
              Our co-working space is <br className="md:hidden" /> designed to
              foster collaboration,
              <br className="md:hidden" /> productivity, and creativity
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-5 md:grid-cols-2">
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/kfc.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/payme.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/korzina.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/tbc.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/taxi.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/epam.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/itpark.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/cloud.png")} />
            </div>
            <div data-aos='zoom-in' className="bg-[#989898] py-8 px-12 flex items-center justify-center rounded-xl">
              <img src={require("../../assets/images/home/bank.png")} />
            </div>
          </div>
          <div data-aos='fade-right' className="flex justify-end my-8">
            <button className="bg-transparent border px-7 py-3 rounded-full">
              SHOW ALL
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl p-14 -mt-6 bg-[#EBEBEB] md:p-5">
        <div className="flex justify-between my-14 md:flex-wrap">
          <h1 className="text-2xl" data-aos='fade-right'>Reviews</h1>
          <div className="w-3/5 flex flex-col gap-3 text-[#EBEBEB] md:w-full md:mt-8">
            <div data-aos='fade-right' className="p-10 rounded-2xl bg-white text-black md:p-5">
              <div className="flex justify-between gap-6 md:flex-wrap">
                <div  className="font-light md:w-full md:flex md:gap-7 md:items-center">
                  <Avatar
                    src={require("../../assets/images/home/avatar.png")}
                    size={"large"}
                  />
                  <div>
                    <p>Artem Nestrov</p>
                    <p className="text-[#B3B3B3]">CEO intro group</p>
                  </div>
                </div>
                <div className="text w-3/4 md:w-full">
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
          <div className="flex justify-between md:flex-wrap">
            <h1 data-aos='fade-right' className="text-2xl">News</h1>
            <div className="w-3/5 md:w-full md:mt-7">
              <h1 className="text-[#8D8D8D]">CEvents, Blog, News</h1>
              <div className="flex my-6">
                <p data-aos='zoom-in' className="w-1/2 md:w-full">
                  Discover the Discover a treasure trove of articles designed to
                  fuel your creativity, enhance your productivity, and keep you
                  connected with the pulse of the co-working world
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-10 justify-between md:flex-wrap">
            <div className="card w-1/3 bg-no-repeat bg-cover relative md:w-full">
              <div className="relative">
                <img data-aos='fade-up'
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
            <div className="card w-1/3 bg-no-repeat bg-cover relative md:w-full">
              <div className="relative">
                <img data-aos='fade-up'
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
                  <img  src={require("../../assets/images/home/vector-2.png")} />
                  News
                </p>
                <p className="text-[#2D2D2D]">| June 15, 2024 • Read 12 min</p>
              </div>
            </div>
            <div className="card w-1/3 bg-no-repeat bg-cover relative md:w-full">
              <div className="relative">
                <img data-aos='fade-up'
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
