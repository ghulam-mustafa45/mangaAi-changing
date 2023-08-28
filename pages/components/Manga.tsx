import React from 'react'

const Manga = () => {
  return (
    
 <>   

<div className='bg-purple-950 pb-72 p-7 hidden sm:block' id='grand-parent'>
  
  <h1 className=' w-fit m-auto pt-10 pb-5' >
          <span
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
          <div className='bg-gray-800 rounded-lg sm:w-1/3 pl-5 justify-center relative z-10"
          style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}>MANGA
          </span>
    </h1>

<div  id='parent'>  

    <div className='sm:flex-none '>
          <div className='bg-gray-800 w-fit rounded-lg p-8 float-left' id='child'>
            <h4 className='text-green-400 text-center pt-3 sm:text-2xl text-sm'>Staking</h4>
            <p className='text-white sm:w-48 text-justify pt-3 pb-4 w-44 sm:text-base text-xs'>MANGA token holders have the opportunity to actively engage with the platform's growth through staking.</p>
            <button className="rounded-md text-white mb-4 bg-gradient-to-r from-purple-600 to-green-500 w-32 p-2 font-medium flex justify-center m-auto sm:mt-4 mt-3 ">Stake</button>
          </div>
            

          <div className='bg-gray-800 rounded-lg p-4 sm:ml-72 ml-56 w-fit'  id='child'>
            <h4 className='text-green-400 text-center'>Governance</h4>
            <p className='text-white pt-2 sm:text-base text-xs sm:w-full w-44 text-justify '>Governance proposals, ranging from feature enhancements to ecosystem expansion, are subject to voting by MANGA token holders, ensuring a decentralized and community-driven approach to platform evolution.</p>             
          </div>
    </div>
       
          <div className='bg-gray-800 rounded-lg p-4 ml-8 mt-2 w-fit float-left' id='child'>
            <h4 className='text-green-400 text-center '>$MANGA Burn</h4>
            <p className='text-white w-80 pt-2 text-justify pb-3'>The tokens utilized for NFT minting will be systematically burned during our monthly Burn Event</p>
          </div>

          <div className='bg-gray-800 rounded-lg p-4 pb-2 ml-8 mt-2 w-fit float-left' id='child'>
            <h4 className='text-green-400 text-center '>Minting NFTs</h4>
            <p className='text-white w-96 pt-2 text-justify'>Use Manga Tokens to mint exclusive Manga NFTs, securing your ownership of anime art on the blockchain.</p>
            <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-2   float-left'></div>
            <a className='text-white' href="/">Mint Now</a>
          </div>              
</div>

</div>

</>
  )
}

export default Manga
