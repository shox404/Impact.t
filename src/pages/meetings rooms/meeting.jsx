import React from 'react';
import Nav from "../../components/navbar";
import Bg from "../meetings rooms/IMG_4986.png";
import Conference from "../meetings rooms/IMG_4973.png"
import Conference2 from "../meetings rooms/IMG_4974.png"
import Conference3 from "../meetings rooms/IMG_4972.png"
import Conference4 from "../meetings rooms/IMG_4971.png"
import Chek from "../meetings rooms/Group 64.png"
import Pl from "../meetings rooms/Rectangle 81.png"
import Grn from "../open-space/Group 73.png";

function Meeting(props) {
    return (
        <div className="w-full h-auto  bg-[#EBEBEB] ">
            <Nav/>
            <div
                className="w-full h-screen bg-black   sm:justify-center sm:items-center sm:h-[80%] sm:text-center  bg-cover bg-center"
                style={{backgroundImage: `url(${Bg})`}}>
                <h2 data-aos='fade-right' data-aos-duration='1000' className=" lg:text-[70px] lg:w-[80%] sm:text-[30px]  sm:pt-[180px]  sm:w-[270px]  sm:leading-[40px] text-white text-[100px] w-[955px] pt-[320px] ml-14 leading-[100px]">
                    Unlock Our dynamic Meeting rooms
                </h2>
                <button data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'
                    className={"w-[180px] mt-20 ml-[50px] sm:w-[160px] sm:text-[13px]  sm:h-[45px]  sm:ml-[-20px] sm:mt-[50px]    text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]  sm:mb-64"}>BOOKING
                    SPACE
                </button>
            </div>
            <div className="flex w-full h-auto pb-20 gap-80 pt-32 bg-[#EBEBEB] sm:flex-col lg:flex-col ">
                <div data-aos='zoom-in' className="ml-32 sm:ml-[30px]">
                    <h3 className="text-[32px] text-[#2D2D2D] lg:ml-[85px] md:ml-[10px] md:mb-[280px]">Tariff plan</h3>
                </div>
                <div data-aos='fade-up' className={"sm:mt-[-280px] sm:ml-[30px] lg:ml-[210px]"}>
                    <h2 className="text-[#8D8D8D] text-[32px] lg:mt-[-280px]">5+ Meeting rooms</h2>
                    <p className="text-[20px] sm:w-[80%] text-[#2D2D2D] w-[390px] mt-8 ">
                        Our meeting rooms blend functionality with sophistication, providing the perfect setting for
                        your professional endeavors.
                    </p>
                </div>

            </div>
            <div className={"w-full flex-wrap gap-2  h-[150vh] flex sm:h-[460vh] lg:h-[170vh]"}>
                <div  data-aos='zoom-in' data-aos-duration='1000' className="w-[630px] h-[335px] bg-white ml-8 rounded-[20px] sm:w-full sm:flex sm:flex-col sm:h-[100vh] sm:ml-0 sm:mb-[-280px] lg:h-[335px] lg:mb-[-280px]">

                    <img src={Conference} alt=""/>


                    <div data-aos='fade-up' data-aos-duration='1000' className={"ml-[330px] mt-[-310px]  sm:ml-0 sm:mt-0 sm:pl-4 sm:pt-2"}>
                        <h3>Conference Room “Orange”</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px]">1 00 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px]">/Hourse </span></h2>
                        <div className="w-[300px] h-[50px] flex mt-4">
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Table</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>TV</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Armchairs</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Board</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>HDMI</h3>
                                <h3 className="flex w-[150px] items-center gap-2 text-[10px]  te xt-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Air circulation System</h3>
                            </div>
                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                            <h2 className={"text-[13px]"}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 6 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px]"}>A professional on-demand office space. Perfect when you
                            need to get your head down and do
                            your best work</p>

                        <button
                            className="   w-[127px] mt-[10px]   h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px]  ">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
                <div  data-aos='zoom-in' data-aos-duration='1000' className="w-[630px] h-[335px] bg-white ml-6 rounded-[20px] sm:w-full sm:flex sm:flex-col sm:h-[100vh] sm:ml-0 lg:h-[335px]">

                    <img src={Conference2} alt=""/>


                    <div data-aos='fade-up' data-aos-duration='1000' className={"ml-[330px] mt-[-310px] sm:ml-0 sm:mt-0 sm:pl-4 sm:pt-2 "}>
                        <h3>Conference Room “Blue”</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px]">1 00 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px]">/Hourse </span></h2>
                        <div className="w-[300px] h-[50px] flex mt-4">
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Table</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>TV</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Armchairs</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Board</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>HDMI</h3>
                                <h3 className="flex w-[150px] items-center gap-2 text-[10px]  te xt-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Air circulation System</h3>
                            </div>
                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                            <h2 className={"text-[13px]"}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 6 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px]"}>A professional on-demand office space. Perfect when you
                            need to get your head down and do your best work</p>

                        <button
                            className="   w-[127px] mt-[10px]   h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px]  ">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-duration='1000' className="w-[630px] mt-[-240px] h-[335px]  bg-white ml-8 rounded-[20px] sm:w-full sm:flex sm:flex-col sm:h-[100vh] sm:ml-0 lg:h-[335px]">

                    <img src={Conference3} alt=""/>


                    <div data-aos='fade-up' data-aos-duration='1000' className={"ml-[330px] mt-[-310px] sm:ml-0 sm:mt-0 sm:pl-4 sm:pt-2  "}>
                        <h3>Conference Room “Blue”</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px]">1 50 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px]">/Hourse </span></h2>
                        <div className="w-[300px] h-[50px] flex mt-4">
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Table</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>TV</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Armchairs</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Board</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>HDMI</h3>
                                <h3 className="flex w-[150px] items-center gap-2 text-[10px]  te xt-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Air circulation System</h3>
                            </div>
                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                            <h2 className={"text-[13px]"}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 8 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px]"}>A professional on-demand office space. Perfect when you
                            need to get your head down and do your best work</p>

                        <button
                            className="   w-[127px] mt-[10px]   h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px]  ">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-duration='1000' className="w-[630px] mt-[-240px] h-[335px] bg-white ml-6 rounded-[20px] sm:w-full sm:flex sm:flex-col sm:h-[100vh] sm:ml-0 lg:h-[335px]">
                    <img src={Conference4} alt=""/>
                    <div data-aos='fade-up' data-aos-duration='1000' className={"ml-[330px] mt-[-310px]  sm:ml-0 sm:mt-0 sm:pl-4 sm:pt-2 "}>
                        <h3>Conference Room “Blue”</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px]">1 80 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px]">/Hourse </span></h2>
                        <div className="w-[300px] h-[50px] flex mt-4">
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Table</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>TV</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Armchairs</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Board</h3>
                            </div>
                            <br/>
                            <div className="w-[80px] h-[50px] flex flex-col ">
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>HDMI</h3>
                                <h3 className="flex w-[150px] items-center gap-2 text-[10px]  te xt-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek} alt=""/>Air circulation System</h3>
                            </div>
                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                            <h2 className={"text-[13px]"}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 10 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px]"}>A professional on-demand office space. Perfect when you
                            need to get your head down and do your best work</p>

                        <button
                            className="   w-[127px] mt-[10px]   h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px]  ">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
            </div>
            <div  className={"w-full h-screen flex justify-center items-center relative mt-[-250px] bg-[#EBEBEB]"}
                 style={{backgroundImage: ` url(${Grn})`}}>
                <img data-aos='fade-up git' className={"w-[90%] absolute z-10 sm:w-full sm:h-[600px] lg:h-[600px]"} src={Grn} alt=""/>
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
            <br/>
            <br/>
        </div>
    );
}

export default Meeting;