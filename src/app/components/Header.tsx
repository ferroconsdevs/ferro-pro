import Image from 'next/image'

export default function Header() {

  return (
    <header className="header-1 w-full py-12 relative z-10 bg-[#1A1A1A]">
        <nav className="navbar flex flex-col justify-center items-center gap-4">
          <div className="banner-header flex fixed top-8 items-between w-full justify-between px-8">
            <div className="">
              <ul className="nav-links flex gap-2 text-[#00FFFF]">
                <li><a href="#proyects">Proyectos</a></li>
                <li><a href="#services">Servicios</a></li>
              </ul>
            </div>
            <div className="flex gap-2">
              <Image
                src="/icon/user.svg"
                alt="Logo"
                width={25}
                height={25}
              />
              <Image
                src="/icon/building-store.svg"
                alt="Logo"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="logo">
            <Image
              src="/img/logo.svg"
              alt="Logo"
              width={500}
              height={50}
            />
          </div>

          <span>Portal para <span className="text-[#00FFFF]">Pro</span>fesionales</span>

        </nav>
      </header>
  )}