import React from 'react';
import Bg from "../open-space/IMG_5010.png";
import Chek from "../open-space/Group 54.png";
import Chek1 from "../open-space/Group 57.png";
import Grn from"../open-space/Group 73.png";
import Nav from"../../components/navbar/index"
function Index(props) {
    return (
        <div className="w-full h-auto  ">
            <Nav/>
            <div className="w-full h-screen bg-black   sm:justify-center sm:items-center sm:h-[80%] sm:text-center bg-cover bg-center" style={{backgroundImage: `url(${Bg})`}}>
                <h2 className=" sm:text-[30px]  sm:pt-[180px]  sm:w-[270px]  sm:leading-[40px] text-white text-[100px] w-[935px] pt-[320px] ml-10 leading-[100px]">
                    Your Co-Working Journey starts here
                </h2>
                <button  className={"w-[180px] mt-20 ml-[50px] sm:w-[160px] sm:text-[13px]  sm:h-[45px]  sm:ml-[-50px] sm:mt-[30px]   text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]"}>BOOKING SPACE</button>
            </div>
            <div className="flex w-full h-auto pb-20 gap-80 pt-32 bg-[#EBEBEB]">
                <div className="ml-32">
                    <h3 className="text-[32px] text-[#2D2D2D]">Membership</h3>
                </div>
                <div>
                    <h2 className="text-[#8D8D8D] text-[32px]">120+ Places</h2>
                    <p className="text-[20px] text-[#2D2D2D] w-[390px] mt-8">
                        Our co-working environment is more than just shared desks. It's a community-driven ecosystem
                        designed to elevate your work experience
                    </p>
                </div>
            </div>

            <div className="flex w-full h-screen bg-[#EBEBEB] items-center justify-center gap-6">
                <div className="w-[440px] h-[585px] bg-[#FFFFFF] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px]">Day Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1">70 000 UZS <span
                        className="text-[#797979] text-[20px]">/Day</span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amenities
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunities
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee
                        </p>
                    </div>
                    <button
                        className="w-[347px] mt-[130px] ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white text-[19px]">
                        Booking space
                    </button>
                </div>
                <div className="w-[440px] h-[585px] bg-[#D1D1D1] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px]">Flex Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1">1,7 mln uzs <span
                        className="text-[#797979] text-[20px]">/Month</span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunites
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Printer 15 pages
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee
                        </p>
                    </div>
                    <button
                        className="w-[347px] mt-[90px]  ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white text-[19px]">
                        Booking space
                    </button>
                </div>
                <div className="w-[440px] h-[585px] bg-[#2D2D2D] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#FFFFFF] mt-4 text-[28px]">Fix Plan</h3>
                    <h2 className="text-[48px] text-[#FFFFFF] mt-1">2,2 mln uzs <span
                        className="text-[#797979] text-[20px]">/Month</span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Assigned workplace
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>  <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                        <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                        Community events and networking opportunites
                    </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Printer 25 pages
                        </p>
                    </div>
                    <button
                        className="  mt-[91px] w-[347px]  ml-3 h-[57px] bg-[#DFDFDF] rounded-[90px] text-[#2D2D2D] text-[19px]">
                        Booking space
                    </button>
                </div>
            </div>


            <div className={"w-full h-screen flex justify-center items-center relative  bg-[#EBEBEB]"}
                 style={{backgroundImage:` url(${Grn})`}}>
                <img className={"w-[90%] absolute z-10"} src={Grn} alt=""/>
                <div className="absolute z-20 ml-[-600px]">
                    <button
                        className={"w-[180px] mb-72    text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]"}>GALLERY
                    </button>
                    <h2 className={"text-[48px] text-white"}>See all our points!</h2>
                    <h3 className={"w-[602px] text-white text-[24px]"}>Discover all our points and take advantage of the
                        amazing benefits and rewards available to you today!</h3>
                </div>
                <div className="absolute z-20 ml-[500px] mt-[290px]">
                    <button
                        className={"w-[180px] h-[50px] text-[15px] text-[#FF5722]  rounded-[90px] bg-white mt-[130px] ml-[500px]"}>VIEW
                        ALL
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Index;
