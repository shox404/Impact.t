import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../../components/navbar/index';

export default function Index() {
    return (
        <div className='w-full h-auto bg-[#EDEDED] xl:container mx-auto'>
            <Navbar />
            <h4 data-aos='fade-down' className='text-xl text-[#2D2D2D] text-center pt-36 py-10'>Elevate Your Work Environment</h4>
            <h1 data-aos='fade-down' data-aos-duration='1000' className='lg:text-[60px] text-[90px] text-[#2D2D2D] w-10/12 leading-none m-auto text-center'>Impact Studio coworking
                space and Art Gallery </h1>
            <div className='flex items-end lg:items-center justify-center gap-5 h-auto pt-20 lg:flex-wrap sm:flex-wrap md:flex-wrap xl:flex-nowrap '>
                <img src={require('./assets/AboutStudio.png')} alt="" />
                <img src={require('./assets/AboutStudio2.png')} alt="" />
                <div>
                    <img className='my-8' src={require('./assets/AboutStudio3.png')} alt="" />
                    <img src={require('./assets/AboutStudio4.png')} alt="" />
                </div>
                <img src={require('./assets/AboutStudio5.png')} alt="" />
            </div>
            <div className='pt-24 px-12 sm:px-8'>
                <h1 data-aos='fade-right' className='text-6xl sm:text-3xl sm:text-pretty lg:text-center leading-tight text-[#2D2D2D]  text-pretty'> <span className='pl-14 md:pl-0 lg:pl-0 sm:pl-0'>Our</span> new creative space - Impact.t Studio!
                    Here we will bring together art lovers, creative individuals and entrepreneurs for collaboration  and  inspiration</h1>
                <p data-aos='zoom-in' className='text-[#2D2D2D] w-3/12 lg:w-8/12 text-justify m-auto pt-24'>Every corner of our space is imbued with an atmosphere of freedom. At Impact.t Studio you will be able to attend events, attend artist exhibitions, participate in networking and exchange ideas, and work in comfortable and functional offices.</p>
                <p data-aos='zoom-in' className='text-[#2D2D2D] w-3/12 lg:w-8/12 text-justify m-auto pt-14'>From Impact.t Studio, you will not only have a comfortable office with all the conditions, but also witness various useful activities.
                    At Impact.t Studio you will be able to attend various events, artist exhibitions, participate in networking and exchange ideas, as well as work in comfortable and functional offices.</p>
            </div>
            <div className='px-12 pt-32'>
                <h4 data-aos='fade-right' className='text-4xl sm:text-3xl sm:text-center text-[#2D2D2D]'>
                    IMPACT.T Studio can become <br />
                    an inspiring space for art lovers!
                </h4>
                <div className='flex justify-center items-start gap-5 pt-20 sm:flex-wrap'>
                    <div data-aos='fade-up'>
                        <img src={require('./assets/AboutStudio6.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Events</h5>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='200'>
                        <img src={require('./assets/AboutStudio7.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Smart offices</h5>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='400'>
                        <img src={require('./assets/AboutStudio8.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Art Gallery</h5>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='600'>
                        <img src={require('./assets/AboutStudio9.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Terrace</h5>
                    </div>
                </div>
            </div>
            <div className='w-full pt-24 px-12'>
                <div data-aos='fade-up' className='rounded-[30px] bg-backgroundImageAboutStudio bg-no-repeat bg-cover px-20 lg:px-10 lg:py-10 py-16 h-auto w-full sm:text-center'>
                    <Link to={'/gallery'}>
                        <button className='w-36 h-10 bg-white rounded-full'>
                            GALLERY
                        </button></Link>
                    <div className='pt-52 w-full flex sm:flex-col sm:py-5 sm:justify-center sm:items-center justify-between items-end'>
                        <div >
                            <h3 className='text-3xl text-white sm:pt-10'>See all our points!</h3>
                            <h4 className='text-2xl font-light w-7/12 pt-5 sm:m-auto sm:w-11/12 sm:my-5 text-white'>Discover all our points and take advantage of the amazing benefits and rewards available to you today!</h4>
                        </div>
                        <div>
                            <Link to={'/gallery'}>
                                <button className='w-36 h-10 sm:mt-5 text-[#FF5722] bg-white rounded-full'>
                                    VIEW ALL
                                </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full py-24 px-12 sm:px-5 lg:px-14 flex gap-5 sm:flex-wrap lg:flex-wrap'>
                <img data-aos='zoom-in' src={require('./assets/AboutStudio12.png')} alt="" />
                <div data-aos='zoom-in' className='w-auto h-auto bg-[#2D2D2D] px-10 pr-24 py-10 rounded-3xl sm:rounded-xl'>
                    <h5 className='text-white pt-24 sm:pt-10 text-xl'>With its focus on social innovation and community empowerment, this coworking space is a breeding ground for impactful ideas.</h5>
                    <h5 className='text-xl text-white font-light leading-relaxed pt-24 sm:pt-10'>Akmal Paiziev</h5>
                    <h5 className='text-xl text-[#969696] font-[400]'>CEO and Founder Impact.t</h5>
                </div>
            </div>
        </div>
    )
}
