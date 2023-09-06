const Nav = () => {
    const Links = [
        {name : "About"},
        {name : "Careers"},
        {name : "Location"},
    ]

    return (
    <nav className=' py-10 mb-12 flex justify-between bg-hamoudc'>
    <div className='font-Brawler text-4xl flex '>
      HAMOUD
    <Image src={logo} className='w-16 px-0 mx-4'/>
    </div>
    <div>{}</div>
    <ul className="backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 right-0 md:h-auto h-screen ">
        { 
        Links.map((link,index)=>(
            <li key={index} className="md:inline-block md:ml-10 ml-5 font-Acme text-2xl cursor-pointer hover:text-white delay-125">
                <a href="#" className="text-white text-sm"><span className="font-bold mr-1.5">0{index}</span>{link.name}</a>
            </li>
        ))
        }
    </ul>
  </nav>
  
    )
}

export default Nav