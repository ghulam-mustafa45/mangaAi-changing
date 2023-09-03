import React from 'react'
import {IoMdCopy} from 'react-icons/io'

const FirstMangaAI = () => {
  return (

<div className='bg-main-purple pb-5 overflow-clip font-Lato'>
       
       
        <div className='flex flex-col lg:flex-row bg-main-gray xl:h-[420px] font-Lato'> 
              <div className=' lg:w-1/2 p-3 lg:ml-10 pt-5 font-Lato'>
                    <h1 className='text-[#A075B4] text-3xl lg:text-4xl font-custom9 '>MANGA AI</h1>
                    <h3 className='text-[#88C48A] font-custom8 text-lg lg:text-xl'>Unleash Your Anime Creativity </h3>
                    <p className='text-white text-sm lg:text-base lg:w-96'>Welcome to Manga AI, where creativity meets technology to revolutionize anime content creation. Our platform blends AI and blockchain, offering a unique space for creators and fans to explore, collaborate, and thrive.</p>
                    <button className="rounded-md text-white bg-gradient-to-r from-purple-500 to-green-500 p-2 mt-2 lg:mt-4 float-left">Generate Anime Art</button>
                    <div className='border-1 h-12 border-purple-500 rounded-full inline-block font-Lato mb-2 mr-3 ml-3  float-left'></div>
                    <p className='text-white text-sm lg:text-base pt-3 font-custom7 '><u>Documentation</u></p>
              </div>
              
              <div className='flex items-center lg:w-[35%] lg:ml-auto justify-center relative font-Lato'>
                    <div className="relative inset-0 flex items-center justify-center">
                       <img className=' lg:h-auto w-full h-[32%]' src="./images/divp1.svg" alt="error" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img className='w-96 h-auto' src="./images/divp2.svg" alt="error" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img className=' w-80' src="./images/divp3.svg" alt="error" />
                    </div>
              </div>

        </div>

        <div className='flex border-dashed border-1 rounded-lg w-fit m-auto mt-5 font-Lato '>
            <button className='text-white text-2xl p-2' ><IoMdCopy /></button>
            <div className='border-1 h-10  border-white rounded-full border-dashed inline-block  mr-2 ml-2 float-left'></div>
            <input className='bg-transparent text-lg p-2 lg:w-80 w-60 text-center' type="text" placeholder='00000000000000000000' />
        </div>
        <button className=" font-Lato rounded-md text-white bg-gradient-to-r from-purple-500 to-green-500 p-2 flex m-auto lg:mt-4 mt-3 ">Buy $Manga</button>

</div>

  )
}

export default FirstMangaAI
