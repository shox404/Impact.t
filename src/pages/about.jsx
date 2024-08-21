import React from "react";
import Img from "../assets/about/IMG_4493.png";
import Card1 from "../assets/about/IMG_4902.png";
import Card2 from "../assets/about/IMG_4959.png";
import Card3 from "../assets/about/IMG_4961.png";
import Bg from "../assets/about/Group 73.png";
import Image from "../assets/about/IMG_4492.png";
import Nav from "../components/navbar/index"

const About = () => {
  const cards = [
    {
      img: Card1,
      p: "Working time",
      time: "24/7",
      day: "364 day",
    },
    {
      img: Card2,
      p: "Terrace on the 4’th floor",
      time: "220",
      day: `m2`,
    },
    {
      img: Card3,
      p: "Events",
      time: "364",
      day: "everyday",
    },
  ];
  return (
    <div>
      <Nav color={"black"}/>
      <div className="w-full h-auto pt-20">
        <div className="w-full h-[500px] flex flex-col justify-center items-center bg-[#EDEDED]">
          <p data-aos='zoom-out' className="text-[16px]">Elevate Your Work Environment</p>
          <p data-aos='fade-down' data-aos-duration='1000' className="text-[112px] text-center sm:text-[42px] lg:text-[73px]">
            Impact technology hub, coworking, accelerator
          </p>
        </div>
        <div className="w-full h-[850px] sm:h-auto sm:mt-[-80px] bg-[#EDEDED] flex justify-center items-center lg:mt-[-170px]">
          <img src={Img} alt="" className="mx-auto w-[1250px] sm:w-[90%] lg:w-[90%]" />
        </div>
        <div className="w-full mx-auto bg-[#EDEDED] h-auto py-5  flex flex-col justify-start items-center gap-16 pt-2 sm:gap-10 sm:pt-0 ">
          <p data-aos='fade-right' className="text-[70px] w-[95%] mx-auto sm:text-[42px] lg:text-[60px]">
            {" "}
            Nestled in the heart of the city, Impact.t hub is more than just a
            workspace— it's a hub of innovation and social impact
          </p>
          <div className="w-full flex justify-center items-center sm:flex-col sm:px-2 sm:gap-10 lg:items-start lg:justify-start lg:px-7">
            <div className="w-[30%] sm:hidden lg:hidden"></div>
            <div className="w-[500px] sm:w-full lg:w-[600px] lg:mr-6">
              <p data-aos='fade-right' data-aos-delay='300'
                className="text-[20px] text-[#2D2D2D]"
                style={{ lineHeight: "30px" }}
              >
                With its vibrant community of changemakers, entrepreneurs, and
                activists, Impact.t hub is redefining the traditional coworking
                model. From sustainable design to purpose-driven initiatives,
                every aspect of this dynamic workspace is geared towards driving
                positive change in the world. Whether you're a budding
                entrepreneur with a vision for social impact or a seasoned
                activist looking to connect with like-minded individuals,
                Impact.t hub offers the perfect environment to collaborate,
                innovate, and make a difference.
              </p>
            </div>
            <p data-aos='fade-right' data-aos-delay='600'
              className="text-[#2d2d2d] w-[500px] mb-[120px] sm:w-full sm:mb-0 lg:mb-[-80px]"
              style={{ lineHeight: "30px" }}
            >
              Join the movement today and be a part of something truly
              transformative. With its focus on social innovation and community
              empowerment, this coworking space is a breeding ground for
              impactful ideas. Whether you're a social entrepreneur, activist,
              or freelancer, Impact.t hub provides the space and resources you
              need to turn your vision into reality. Join the community and be
              inspired to create change.
            </p>
          </div>
        </div>
        <div className="w-full h-[800px]  bg-[#EDEDED] flex flex-col sm:h-auto  p-10 sm:p-0  lg:h-auto">
          <p data-aos='fade-right' className="text-[32px] w-[423px] sm:w-full">
            Discover a new way of working at Impact.t hub
          </p>
          <div className="w-full h-auto sm:h-[2000px] flex justify-center items-center gap-5 sm:flex-col mt-20 sm:mt-0">
            {cards.map((item, index) => (
              <div data-aos='zoom-in'
                key={index}
                className="w-[407px] h-[550px] flex flex-col sm:w-[90%] "
              >
                <img src={item.img} alt="" />
                <div className="w-full h-[200px] flex flex-col py-6 px-5 bg-white rounded-b-[20px]">
                  <p className="text-[20px] lg:text-[18px]">{item.p}</p>
                  <hr className="mt-5" />
                  <p className="text-[60px] text-[#2D2D2D]">
                    {item.time}
                    <span
                      className="text-[18px] ml-2"
                      style={{ fontWeight: "350" }}
                    >
                      {item.day}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"w-full h-screen flex justify-center items-center relative  bg-[#EBEBEB] lg:h-[800px] lg:mt-[-200px]"}>
                <img data-aos='fade-up' className={"w-[90%] absolute z-10 sm:w-[95%] sm:h-[600px] lg:h-[600px]"} src={Bg} alt=""/>
                <div className="absolute z-20 ml-[-600px] sm:ml-0 lg:ml-[-40px]"> 
                    <button className={"w-[180px] mb-72  ml-10  text-[15px] h-[50px] sm:ml-5 sm:mb-10 lg:ml-[-40px] bg-white rounded-[90px] text-[#2D2D2D]"}>GALLERY</button>
<h2 className={"text-[48px] text-white ml-10 sm:ml-5 lg:ml-[-40px]"}>See all our points!</h2>
                    <h3 className={"w-[602px] text-white text-[24px] ml-10 sm:w-[90%] sm:ml-5 lg:ml-[-40px] "}>Discover all our points and take advantage of the amazing benefits and rewards available to you today!</h3>
                </div>
                <div className="absolute z-20 ml-[480px] sm:ml-0 mt-[310px] lg:ml-0 sm:mt-80 lg:mt-[140px]">
                    <button className={"w-[180px] h-[50px] text-[15px] text-[#FF5722]  rounded-[90px] bg-white mt-[130px] ml-[500px] sm:ml-[-170px] sm:mt-[150px]"}>VIEW ALL</button>
                </div>
            </div>
        <div className="w-full h-[600px]  mb-12 sm:mb-0 sm:h-auto sm:py-8 bg-[#EDEDED] flex justify-center items-center gap-10 px-10 sm:flex-col lg:flex-col lg:h-auto lg:py-10">
          <img data-aos='fade-down' data-aos-duration='1000' src={Image} alt="" className="pl-7 sm:pl-0 lg:pl-0"/>
          <div data-aos='fade-down' data-aos-duration='1000' data-aos-delay='200' className="w-auto h-[540px] flex flex-col pt-20 px-5 bg-[#2D2D2D] rounded-[20px] sm:h-[540px] lg:pt-5 lg:h-[400px]">
            <p className="text-[24px] text-white">
              With its focus on social innovation and community empowerment,
              this coworking space is a breeding ground for impactful ideas.
            </p>
            <p className="text-white mt-20 ">Akmal Paiziev</p>
            <p className="text-[#969696] text-[18px]">CEO and Founder Impact.t</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
