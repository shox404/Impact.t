import React from 'react';
import Nav from "../../components/navbar";
import Mushin from "../offece/IMG_4972-_3_-_1_.jpg";
import Chek1 from "../offece/Vector (2).png";
import Chek2 from "../offece/Vector (3).png";
import Chek3 from "../offece/2.png";
import Pl from "../meetings rooms/Rectangle 81.png";
import Conference from "../offece/IMG_4982.png";
import Conference1 from "../offece/IMG_5008.png";
import Conference2 from "../offece/IMG_4827.png";
import Grn from "../open-space/Group 73.png";


function Offece(props) {
    return (
        <div className="w-full h-auto bg-[#EBEBEB]">
            <Nav/>
            <div
                className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-start"
                style={{
                    backgroundImage: `url(${Mushin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 data-aos='fade-left' data-aos-duration='1000' className="lg:text-[70px] lg:w-[80%] sm:text-[30px] sm:pt-[180px] sm:w-[270px] sm:leading-[40px] text-white text-[100px] w-[955px] pt-[320px] ml-14 leading-[100px]">
                    Discover Our Exceptional Offices
                </h2>
                <button
                    className="w-[180px] mt-20 ml-[50px] sm:w-[160px] sm:text-[13px] sm:h-[45px] sm:ml-[50px] sm:mt-[50px] text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D] sm:mb-64"
                >
                    BOOKING SPACE
                </button>
            </div>
            <div className="flex w-full h-auto pb-20 gap-80 pt-32 bg-[#EBEBEB] sm:flex-col lg:flex-col">
                <div className="ml-32 sm:ml-[30px]">
                    <h3 data-aos='fade-right' className="text-[32px] text-[#2D2D2D] lg:ml-[85px] md:ml-[10px] md:mb-[280px]">Tariff plan</h3>
                </div>
                <div className="sm:mt-[-280px] sm:ml-[150px] lg:ml-[210px]">
                    <h2 data-aos='fade-up' className="text-[#8D8D8D] text-[32px] lg:mt-[-280px] ml-[-105px]">5+ Meeting rooms</h2>
                    <p data-aos='fade-up' className="text-[20px] sm:w-[80%] text-[#2D2D2D] w-[390px] mt-8 ml-[-105px]">
                        Our meeting rooms blend functionality with sophistication, providing the perfect setting for
                        your professional endeavors.
                    </p>
                </div>
            </div>

            <div className={"w-full flex-wrap gap-1  h-[270vh]  sm:h-auto lg:h-[160vh]"}>
                <div data-aos='fade-up' className="w-[843px] h-[447px] bg-white ml-[490px] rounded-[20px] lg:ml-0 sm:w-full sm:ml-0 sm:flex sm:h-[860px] sm:flex-col sm:gap-2 lg:w-full">

                    <img src={Conference} alt=""/>


                    <div className={"ml-[450px] mt-[-400px]  sm:ml-0 sm:mt-0"}>
                        <h3 className={"ml-[-18px] sm:ml-0 sm:pl-4"}>Office for main team</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px] ml-[-20px] sm:ml-0 sm:pl-4">5 000 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px] ">/Month </span></h2>


                        <div className="w-[300px] h-[50px] flex mt-4 ml-[-20px] sm:w-full sm:ml-0 sm:pl-4">


                            <div className="w-[1500px] gap-4 h-[50px] flex flex-col sm:w-full ">
                                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek1} alt=""/>Access 24/7</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek2} alt=""/>Communal payments</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek3} alt=""/>Use of meeting rooms and
                                    conference rooms</h3>
                            </div>
                            <br/>
                            <div className="w-[200px] gap-4 h-[50px] flex flex-col  sm:w-full">
                                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979] sm:w-full"><img
                                    className="w-[12px] h-[12px]" src={Chek1} alt=""/>High speed internet</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek2} alt=""/>Cleaning</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek3} alt=""/>Furniture</h3>      <h3
                                className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                className="w-[12px] h-[12px]" src={Chek3} alt=""/>Delicious black coffee 24/7</h3>
                            </div>

                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 ml-[-15px] mt-[80px] sm:ml-0 sm:pl-4"}>
                            <h2 className={"text-[13px]"}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 6 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px] ml-[-13px] sm:ml-0 sm:pl-4"}>A professional on-demand office space. Perfect
                            when you
                            need to get your head down and do
                            your best work</p>

                        <button
                            className="   w-[127px] mt-[20px] ml-[-13px]  h-[35px] bg-[#373737] rounded-[90px] text-white text-[10px]  sm:ml-4">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
                <div data-aos='fade-up' className="w-[843px] h-[447px] bg-white ml-[490px] mt-10 rounded-[20px] lg:ml-0 sm:w-full sm:ml-0 sm:flex sm:h-[860px] sm:flex-col sm:gap-2 lg:w-full">

                    <img src={Conference1} alt=""/>


                    <div className={"ml-[450px] mt-[-400px]  sm:ml-0 sm:mt-4 sm:pl-4"}>
                        <h3 className={"ml-[-18px] sm:ml-0"}>Office for main team</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px] ml-[-20px] sm:ml-0 ">8 000 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px] ">/Month </span></h2>


                        <div className="w-[300px] h-[50px] flex mt-4 ml-[-20px] sm:ml-0 sm:w-full">


                            <div className="w-[1500px] gap-4 h-[50px] flex flex-col sm:w-full">
                                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek1} alt=""/>Access 24/7</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek2} alt=""/>Communal payments</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek3} alt=""/>Use of meeting rooms and
                                    conference rooms</h3>
                            </div>
                            <br/>
                            <div className="w-[200px] gap-4 h-[50px] flex flex-col  sm:w-full">
                                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979] sm:w-full"><img
                                    className="w-[12px] h-[12px]" src={Chek1} alt=""/>High speed internet</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek2} alt=""/>Cleaning</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek3} alt=""/>Furniture</h3>      <h3
                                className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                className="w-[12px] h-[12px]" src={Chek3} alt=""/>Delicious black coffee 24/7</h3>
                            </div>

                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 ml-[-15px] mt-[80px] sm:pl-4 sm:ml-0"}>
                            <h2 className={"text-[13px] sm:ml-[-10px]"}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 8 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px] ml-[-13px] sm:pl-4"}>A professional on-demand office space. Perfect
                            when you
                            need to get your head down and do
                            your best work</p>

                        <button
                            className="   w-[127px] mt-[20px] ml-[-13px] sm:ml-1 h-[35px] bg-[#373737] rounded-[90px] text-white text-[10px]  ">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
                <div data-aos='fade-up' className="w-[843px] h-[447px]  bg-white ml-[490px] mt-10 rounded-[20px] lg:ml-0 sm:w-full sm:ml-0 sm:flex sm:h-[1120px] sm:flex-col sm:gap-2 lg:w-full">

                    <img src={Conference2} alt=""/>


                    <div className={"ml-[450px] mt-[-400px] sm:ml-0 sm:mt-4 "}>
                        <h3 className={"ml-[-18px] sm:ml-0 sm:pl-4"}>Office for main team</h3>
                        <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px] ml-[-20px] sm:ml-0 sm:pl-4">22 000 000 uzs<span
                            className="text-[#797979] text-[20px] sm:text-[18px]">/Month </span></h2>



                        <div className="w-[300px] h-[50px] flex mt-4 ml-[-20px] sm:ml-0 sm:w-full sm:pl-4">


                            <div className="w-[1500px] gap-4 h-[50px] flex flex-col sm:w-full">
                                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek1} alt=""/>Access 24/7</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek2} alt=""/>Communal payments</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek3} alt=""/>Use of meeting rooms and
                                    conference rooms</h3>
                            </div>
                            <br/>
                            <div className="w-[200px] gap-4 h-[50px] flex flex-col  sm:w-full">
                                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979] sm:w-full"><img
                                    className="w-[12px] h-[12px]" src={Chek1} alt=""/>High speed internet</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek2} alt=""/>Cleaning</h3>
                                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                    className="w-[12px] h-[12px]" src={Chek3} alt=""/>Furniture</h3>      <h3
                                className="flex items-center gap-2 text-[12px] text-[#797979]"><img
                                className="w-[12px] h-[12px]" src={Chek3} alt=""/>Delicious black coffee 24/7</h3>
                            </div>

                        </div>
                        <div className={"w-auto h-auto flex gap-4 pt-2 ml-[-15px] mt-[80px] sm:ml-0 sm:pl-4"}>
                            <h2 className={"text-[13px] "}>Impact.t hub</h2>
                            <img src={Pl} alt=""/>
                            <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 15-20 people</h2>
                        </div>
                        <br/>

                        <p className={"text-[12px] w-[250px] ml-[-13px] sm:ml-0 sm:pl-4"}>A professional on-demand office space. Perfect
                            when you
                            need to get your head down and do
                            your best work</p>

                        <button
                            className="   w-[127px] mt-[20px] ml-[-13px]  h-[35px] bg-[#373737] rounded-[90px] text-white text-[10px]  sm:ml-4">
                            BOOKING ROOM
                        </button>
                    </div>
                </div>
            </div>
            <div  className={"w-full h-screen flex justify-center items-center relative mt-[-250px] bg-[#EBEBEB]"}
                 style={{backgroundImage: ` url(${Grn})`}}>
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
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Offece;
