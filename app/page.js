import react from 'react'
import Image from 'next/image'
import logo from '/public/hb-transformed.png'
import Limon from '/public/620466077c427f141effa294382f5fba_M.png'
import Hamoud from '/public/R-transformed.png'
import Selecto from '/public/selecto_transparent.png'
import shape1 from '/public/shape1.svg'
import shape2 from '/public/shape2.svg'
import shape3 from '/public/shape3.svg'
import grp2 from '/public/Group 2.svg'
import selectoS from '/public/Ellipse 8.svg'


export default function Home() {
  return( 
  
  <div>
    <main className=' bg-hamoudc md:px-20 lg:px-40'>
    <nav className=' py-10 mb-12 flex justify-between bg-hamoudc'>
    <div className='font-Brawler text-4xl flex '>
      HAMOUD
    <Image src={logo} className='w-16 px-0 mx-4'/>
    </div>
    <div>{}</div>
    <div className='flex justify-end'>
    <ul className='flex space-x-14 px-34 text-gray-500 '>
      <li className='font-Acme text-2xl cursor-pointer hover:text-white delay-125 '>About</li>
      <li className='font-Acme text-2xl  cursor-pointer hover:text-white delay-125'>Careers</li>
      <li className='font-Acme text-2xl  cursor-pointer  hover:text-white delay-125'>Location</li>
    </ul>
    </div>
  </nav>
  
    <section className='min-h-screen'>
     <p className='  flex items-stretch text-center leading-relaxed text-md font-Paint text-7xl mt-40 '>
     Enjoy the flavor with our 
        Hamoud latest
     </p>
    </section>
    <section className='min-h-screen'>
    <div className=' w-96 absolute right-48 py-7'>
      <Image src={grp2} />
    </div>
    <div className='absolute filter drop-shadow-2xl'>
        <Image src={Hamoud} className='transform -rotate-12 py-7'/>
    </div>
    </section>
  </main>
  </div>
  );
}
