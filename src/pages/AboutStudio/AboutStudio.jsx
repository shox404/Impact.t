import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div className='w-full h-auto bg-[#EDEDED]'>
            <h4 className='text-xl text-[#2D2D2D] text-center pt-36 my-10'>Elevate Your Work Environment</h4>
            <h1 className='text-[90px] text-[#2D2D2D] w-10/12 leading-none m-auto text-center'>Impact Studio coworking
                space and Art Gallery </h1>
            <div className='flex items-end justify-center gap-5 h-auto pt-20'>
                <img src={require('./assets/AboutStudio.png')} alt="" />
                <img src={require('./assets/AboutStudio2.png')} alt="" />
                <div>
                    <img className='my-8' src={require('./assets/AboutStudio3.png')} alt="" />
                    <img src={require('./assets/AboutStudio4.png')} alt="" />
                </div>
                <img src={require('./assets/AboutStudio5.png')} alt="" />
            </div>
            <div className='pt-24 px-12'>
                <h1 className='text-6xl leading-tight text-[#2D2D2D]  text-pretty'> <span className='pl-14'>Our</span> new creative space - Impact.t Studio!
                    Here we will bring together art lovers, creative individuals and entrepreneurs for collaboration  and  inspiration</h1>
                <p className='text-[#2D2D2D] w-3/12 text-justify m-auto pt-24'>Every corner of our space is imbued with an atmosphere of freedom. At Impact.t Studio you will be able to attend events, attend artist exhibitions, participate in networking and exchange ideas, and work in comfortable and functional offices.</p>
                <p className='text-[#2D2D2D] w-3/12 text-justify m-auto pt-14'>From Impact.t Studio, you will not only have a comfortable office with all the conditions, but also witness various useful activities.
                    At Impact.t Studio you will be able to attend various events, artist exhibitions, participate in networking and exchange ideas, as well as work in comfortable and functional offices.</p>
            </div>
            <div className='px-12 pt-32'>
                <h4 className=' text-4xl text-[#2D2D2D]'>
                    IMPACT.T Studio can become <br />
                    an inspiring space for art lovers!
                </h4>
                <div className='flex justify-center items-start gap-5 pt-20'>
                    <div>
                        <img src={require('./assets/AboutStudio6.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Events</h5>
                    </div>
                    <div>
                        <img src={require('./assets/AboutStudio7.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Smart offices</h5>
                    </div>
                    <div>
                        <img src={require('./assets/AboutStudio8.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Art Gallery</h5>
                    </div>
                    <div>
                        <img src={require('./assets/AboutStudio9.png')} alt="" />
                        <h5 className='pt-3 text-[#2D2D2D]'>Terrace</h5>
                    </div>
                </div>
            </div>
            <div className='w-full pt-24 px-12'>
                <div className='rounded-3xl bg-[#FF5722] bg-backgroundImageAboutStudio bg-no-repeat bg-cover px-20 py-16 h-auto w-full '>
                    <Link to={'/gallery'}>
                        <button className='w-36 h-10 bg-white rounded-full'>
                            GALLERY
                        </button></Link>
                    <div className='pt-52 w-full flex items-end'>
                        <div >
                            <h3 className='text-3xl text-white'>See all our points!</h3>
                            <h4 className='text-2xl font-light w-7/12 pt-5 text-white'>Discover all our points and take advantage of the amazing benefits and rewards available to you today!</h4>
                        </div>
                        <div>
                            <Link to={'/gallery'}>
                                <button className='w-36 h-10 text-[#FF5722] bg-white rounded-full'>
                                    VIEW ALL
                                </button></Link>
                        </div>
                    </div>                </div>
            </div>

        </div>
    )
}
