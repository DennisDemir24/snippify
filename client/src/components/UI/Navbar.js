import React from 'react'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
      <nav className="flex w-full justify-between mt-11 text-white">
        <div className="ml-7">
          <img src={Logo} alt="" />
        </div>
        <div className="flex w-2/6">
          <div className="font-heading flex w-full justify-around">
            <a href="" className="text-s">
              Home
            </a>
            <a href="" className="text-s">
              Snippets
            </a>
            <button className="bg-primary-btn-bg pt-1.5 pb-1.5 pl-6 pr-6 rounded text-s">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
