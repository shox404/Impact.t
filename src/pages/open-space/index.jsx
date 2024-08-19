import React from 'react';
import Bg from "../open-space/IMG_5010.png";
import Chek from "../open-space/Group 54.png";
import Chek1 from "../open-space/Group 57.png";
import Nav from "../../components/navbar"

function Index(props) {
    return (
        <div className="w-full h-auto  ">
            <Nav/>
            <div className="w-full h-screen bg-black   sm:justify-center sm:items-center sm:h-[80%] sm:text-center  bg-cover bg-center">
                <h2 className=" sm:text-[30px]  sm:pt-[180px]  sm:w-[270px]  sm:leading-[40px] text-white text-[100px] w-[935px] pt-[320px] ml-14 leading-[100px]">
                    Your Co-Working Journey starts here
                </h2>
                <button  className={"w-[180px] mt-20 ml-[50px] sm:w-[160px] sm:text-[13px]  sm:h-[45px]  sm:ml-[-20px] sm:mt-[50px]    text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]  sm:mb-64"}>BOOKING SPACE</button>
            </div>

            <div className="flex w-full h-auto pb-20 gap-80 pt-32 bg-[#EBEBEB] sm:flex-col">
                <div className="ml-32 sm:ml-[30px]">
                    <h3 className="text-[32px] text-[#2D2D2D]">Membership</h3>
                </div>
                <div className={"sm:mt-[-280px] sm:ml-[30px]"}>
                    <h2 className="text-[#8D8D8D] text-[32px]">120+ Places</h2>
                    <p className="text-[20px] sm:w-[80%] text-[#2D2D2D] w-[390px] mt-8">
                        Our co-working environment is more than just shared desks. It's a community-driven ecosystem
                        designed to elevate your work experience
                    </p>
                </div>
            </div>
            <div className="flex w-full h-auto bg-[#EBEBEB] items-center justify-center gap-6  sm:flex-col">
                <div className="w-[440px] h-[585px] bg-[#FFFFFF] border rounded-[20px] flex flex-col  p-8 sm:w-[90%] sm:h-[480px]">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px] sm:text-[20px]">Day Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1 sm:text-[25px]">70 000 UZS <span
                        className="text-[#797979] text-[20px] sm:text-[18px]">/Day</span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amenities
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[80%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunities
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee
                        </p>
                    </div>
                    <button
                        className="w-[347px] mt-[130px] ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white text-[19px] sm:mt-[20px]  sm:mb-[-20px] sm:w-[90%]">
                        Booking space
                    </button>
                </div>
            </div>
           

        </div>
    );
}

export default Index;
