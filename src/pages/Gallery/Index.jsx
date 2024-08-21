import React from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div>
            <Navbar />
            <div className='h-auto pb-32 w-full bg-backgroundImageGallery bg-cover bg-no-repeat rounded-none'>
                <h1 data-aos='fade-left' data-aos-duration='1000' className='pt-60 pr-10 text-[95px] sm:text-6xl lg:text-center lg:w-full lg:px-10 sm:w-full sm:px-5 sm:pt-48 sm:text-center pl-14 w-2/3 text-white'>Discover all the
                    highlights we have 
                    to offer!</h1>
            </div>
            <div className='w-full h-auto flex sm:flex-wrap lg:flex-wrap xl:flex-wragitp lg:pt-14 sm:gap-2 sm:pt-5 items-center px-14 sm:px-5 gap-5 py-16 sm:py-5 pt-40 '>
                <Link to={'/'}><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>All</button>
                </Link>
                <Link to={'/open-space'}><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>Open space</button>
                </Link>
                <Link to={'/about-studio'}><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>Office</button>
                </Link>
                <Link><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>Meeting room</button>
                </Link>
                <Link><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>Terrace</button>
                </Link>
                <Link to={'/gallery'}><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>Art gallery</button>
                </Link>
                <Link><button data-aos='zoom-in' className='w-auto px-12 sm:px-7 sm:py-3 h-auto py-4 rounded-full bg-[#DFDFDF] text-[#2D2D2D] hover:bg-[#FF5722] hover:text-white'>Interior</button>
                </Link>
            </div>
            <hr className='bg-[#2d2d2d6f]  w-11/12 h-0.5 sm:h-0 m-auto mb-10 ' />
            <div className='flex gap-20 sm:flex-wrap lg:gap-5 sm:pt-5 px-14 pt-20'>
            <div className='w-auto h-auto flex-col'>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery2.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery5.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery8.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             </div>
            <div className='w-auto h-auto flex-col'>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery3.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery6.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             </div>
            <div className='w-auto h-auto flex-col'>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery4.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             <div data-aos='zoom-in'>
             <img src={require('./assets/gallery7.png')} alt="" />
             <h4 className='text-[#2D2D2D ] text-xl pt-5'>Meeting room “Orange”</h4>
             <p className='text-[#969696] font-light text-xl pt-2 pb-10'>Impact hub</p>
             </div>
             </div>
            </div>

        </div>
    )
}
