import React from 'react'

const MangaMobiloe = () => {
  return (
    <>   

<div className='bg-purple-950 sm:pb-72 pb-5 p-2 md:hidden' >
  
  <h1 className=' w-fit m-auto pt-10 pb-4' >
          <span
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
          <div className='bg-gray-800 rounded-lg sm:w-1/3 pl-5 justify-center relative z-10"
          style={{ backgroundImage: 'linear-gradient(to right, #8B008B, #8B5CF6, #00FF00)',}}>MANGA
          </span>
    </h1>

<div>  

    <div className='flex '>
          <div className='bg-gray-800 w-fit rounded-lg p-1 ' >
            <h4 className='text-green-400 text-center pt-3 sm:text-2xl text-sm font-bold'>Staking</h4>
            <p className='text-white sm:w-48 text-justify pt-3 pb-4 w-44 sm:text-base text-xs'>MANGA token holders have the opportunity to actively engage with the platform's growth through staking.</p>
            <button className="rounded-md text-white mb-4 bg-gradient-to-r from-purple-600 to-green-500 w-32 p-2 font-medium flex justify-center m-auto sm:mt-4 mt-3 text-sm">Stake</button>
          </div>
            
          <div className='bg-gray-800 rounded-lg p-3 ml-2 w-fit ' >
            <h4 className='text-green-400 text-center mt-2 sm:text-2xl text-sm font-bold'>$MANGA Burn</h4>
            <p className='text-white sm:w-48 text-justify pt-3 pb-4 w-28 sm:text-base text-xs'>The tokens utilized for NFT minting will be systematically burned during our monthly Burn Event</p>
          </div>

    </div>
       
       <div className='flex'>
    <div className='bg-gray-800 rounded-lg p-1 w-fit mt-3'  >
            <h4 className='text-green-400 text-center pt-3 sm:text-2xl text-sm font-bold'>Governance</h4>
            <p className='text-white sm:w-48 text-justify pt-3 pb-4 w-44 sm:text-base text-xs '>Governance proposals, ranging from feature enhancements to ecosystem expansion, are subject to voting by MANGA token holders, ensuring a decentralized and community-driven approach to platform evolution.</p>             
          </div>

          <div className='bg-gray-800 rounded-lg p-3 pb-2 ml-3  w-fit mt-3' >
            <h4 className='text-green-400 text-center pt-2 sm:text-2xl text-sm font-bold'>Minting NFTs</h4>
            <p className='text-white sm:w-48 text-justify pt-3 pb-4 w-28 sm:text-base text-xs'>Use Manga Tokens to mint exclusive Manga NFTs, securing your ownership of anime art on the blockchain.</p>
            <div className='border-1 h-7 border-purple-500 rounded-full inline-block mb-2 mr-2   float-left'></div>
            <a className='text-white text-sm sm:text-base' href="/">Mint Now</a>
          </div>  

          </div>            
</div>

</div>

</>
  )
}

export default MangaMobiloe
