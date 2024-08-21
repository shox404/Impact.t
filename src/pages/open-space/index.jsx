import React from 'react';
import Bg from "../open-space/IMG_5010.png";
import Chek from "../open-space/Group 54.png";
import Chek1 from "../open-space/Group 57.png";
import Grn from "../open-space/Group 73.png";
import Nav from "../../components/navbar/index"

function Index(props) {
    return (
        <div className="w-full h-auto  ">
            <Nav/>
            <div
                className="w-full h-screen bg-black   sm:justify-center sm:items-center sm:h-[80%] sm:text-center  bg-cover bg-center"
                style={{backgroundImage: `url(${Bg})`}}>
                <h2 data-aos='fade-left' data-aos-duration='1000' className=" lg:text-[70px] lg:w-[80%] sm:text-[30px]  sm:pt-[180px]  sm:w-[270px]  sm:leading-[40px] text-white text-[100px] w-[935px] pt-[320px] ml-14 leading-[100px]">
                    Your Co-Working Journey starts here
                </h2>
                <button data-aos='fade-left' data-aos-delay='200'
                    className={"w-[180px] mt-20 ml-[50px] sm:w-[160px] sm:text-[13px]  sm:h-[45px]  sm:ml-[-20px] sm:mt-[50px]    text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]  sm:mb-64"}>BOOKING
                    SPACE
                </button>
            </div>


            <div className="flex w-full h-auto pb-20 gap-80 pt-32 bg-[#EBEBEB] sm:flex-col lg:flex-col">
                <div className="ml-32 sm:ml-[30px]">
                    <h3 data-aos='fade-right' className="text-[32px] text-[#2D2D2D] lg:ml-[85px]">Membership</h3>
                </div>
                <div className={"sm:mt-[-280px] sm:ml-[30px] lg:ml-[210px]"}>
                    <h2 data-aos='fade-down' className="text-[#8D8D8D] text-[32px] lg:mt-[-280px]">120+ Places</h2>
                    <p data-aos='zoom-out' className="text-[20px] sm:w-[80%] text-[#2D2D2D] w-[390px] mt-8 ">
                        Our co-working environment is more than just shared desks. It's a community-driven ecosystem
                        designed to elevate your work experience
                    </p>
                </div>
            </div>


            <div className={"flex w-full h-auto justify-center items-center gap-10 bg-[#EBEBEB] sm:flex-wrap lg:flex-wrap"}>
                <div data-aos='fade-up' className="w-[440px] sm:w-[90%] sm:h-auto h-[585px] bg-[#FFFFFF] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px]">Day Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1 sm:text-[28px]">70 000 uzs<span
                        className="text-[#797979] text-[20px] sm:text-[18px]">/Day </span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[90%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunites </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee
                        </p>
                    </div>
                    <button
                        className="   sm:w-[90%] w-[347px] mt-[130px]  ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white text-[19px]  ">
                        Booking space
                    </button>
                </div>
                <div data-aos='fade-up' data-aos-delay='300' className="w-[440px] sm:w-[90%] sm:h-auto h-[585px] bg-[#D1D1D1] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px]">Flex Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1 sm:text-[28px]">1,7 mln uzs<span
                        className="text-[#797979] text-[20px] sm:text-[18px]">/Month </span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[90%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunites</p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[90%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Printer 15 pages</p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee                        </p>
                    </div>
                    <button
                        className="   sm:w-[90%] w-[347px] mt-[95px]  ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white  text-[19px]  ">
                        Booking space
                    </button>
                </div>
                <div data-aos='fade-up' data-aos-delay='600' className="w-[440px] sm:w-[90%] sm:h-auto h-[585px] bg-[#2D2D2D] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#FFFFFF] mt-4 text-[28px]">Fix Plan</h3>
                    <h2 className="text-[48px] text-[#FFFFFF] mt-1 sm:text-[28px]">2,2 mln uzs <span
                        className="text-[#797979] text-[18px]">/Month</span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Assigned workplace
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className=" sm:w-[85%] flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>  <p className="sm:w-[98%]  flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                        <img className="  w-[16px] h-[17px]" src={Chek} alt=""/>
                        Community events and networking opportunites
                    </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Printer 25 pages
                        </p>
                    </div>
                    <button
                        className="sm:w-[90%]  mt-[91px] w-[347px]  ml-3 h-[57px] bg-[#DFDFDF] rounded-[90px] text-[#2D2D2D] text-[19px]">
                        Booking space
                    </button>
                </div>
            </div>
            <div  className={"w-full h-screen flex justify-center items-center relative  bg-[#EBEBEB]"} style={{backgroundImage: ` url(${Grn})`}}>
                <img data-aos='fade-up' className={"w-[90%] absolute z-10 sm:w-full sm:h-[600px] lg:h-[600px]"} src={Grn} alt=""/>
                <div className="absolute z-20 ml-[-600px] sm:ml-0 lg:ml-[-40px]">
                    <button
                        className={"w-[180px] mb-72  ml-10  text-[15px] h-[50px] sm:ml-5 sm:mb-10 lg:ml-[-40px] bg-white rounded-[90px] text-[#2D2D2D]"}>GALLERY
                    </button>
                    <h2 className={"text-[48px] text-white ml-10 sm:ml-5 lg:ml-[-40px]"}>See all our points!</h2>
                    <h3 className={"w-[602px] text-white text-[24px] ml-10 sm:w-[90%] sm:ml-5 lg:ml-[-40px] "}>Discover
                        all our points and take advantage of the amazing benefits and rewards available to you
                        today!</h3>
                </div>


                <div className="absolute z-20 ml-[480px] sm:ml-0 mt-[310px] lg:ml-0 lg:mt-[140px] sm:mt-[320px]">
                    <button
                        className={"w-[180px] h-[50px] text-[15px] text-[#FF5722]  rounded-[90px] bg-white mt-[130px] ml-[500px] sm:ml-[-170px] sm:mt-[150px]"}>VIEW
                        ALL
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Index;