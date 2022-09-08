import { useState } from "react";

const NavItems = () => {
    const Links = [
        { name: "Beranda", link: "#profil" },
        { name: "Komunitas", link: "#service" },
        { name: "Area Anggota", link: "#harga" },
        { name: "Kegiatan", link: "#testimoni" },
      ];
    
      const [open, setOpen] = useState(false)
     
      return (
        <div className="md:container md:mx-auto md:-px-4">
          <div className="shadow-md w-full fixed top-0 left-0 ">
          <div  className="md:flex items-center justify-between bg-white py-5 md:px-10 px-6 text-gray-900 font-semibold antialiased tracking-wide ">
            <span className="font-pop text-2xl font-bold text-gray-900  ">R K J B</span>
            {/* <img src="logo.png" alt="logo" className="mr-1 pt-2"/> */}
            <div onClick={() => setOpen(!open) } className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <img src={open ? 'x.svg' : 'menu.svg'}/>
            </div>
            <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transtion-all duration-500 ease-in ${open ? 'top-20' : '-top-[470px]'}`}>
              {Links.map((Link, index) => (
                <li key={index} className="md:ml-8 text-base md:my-0 my-7">
                  <a href={Link.link}>{Link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
  );
};

export default NavItems;
