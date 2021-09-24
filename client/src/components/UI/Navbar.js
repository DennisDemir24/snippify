import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
      <nav className="flex w-full justify-between mt-11 text-primary">
        <div className="ml-7">
          <img src={Logo} alt="" />
        </div>
        <div className="flex w-2/6">
          <div className="font-heading flex w-full justify-around">
            <Link to="#" className="text-s hover:text-link-hover">
              Home
            </Link>
            <Link to="#" className="text-s hover:text-link-hover">
              Explore
            </Link>
            <Link to="/snippets" className="text-s hover:text-link-hover">
              Snippets
            </Link>
            <button className="bg-primary-btn-bg pt-1.5 pb-1.5 pl-6 pr-6 rounded text-s text-secondary">
              <Link to="/login">Sign In</Link>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
