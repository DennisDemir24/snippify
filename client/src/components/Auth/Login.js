import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Input from '../UI/Input'

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault()

        console.log('Submitted')
    }

    return (
      <div className="flex justify-center">
        <div className="shadow-md bg-form-bg mt-48 p-12 rounded-md w-1/4 h-80">
          <div className="text-primary">
            <div className="mb-4">
              <img className="h-6 m-auto" src={Logo} alt="" />
            </div>
            <p className="mt-1 text-lg font-heading text-center">
              Sign in to Snippify
            </p>
          </div>
          <form onSubmit={onSubmit} className="text-center">
            <div className="form-group mt-2">
              <Input placeholder="Email" />
            </div>
            <div className="form-group mt-2">
              <Input placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Login"
              className="bg-primary-btn-bg pt-1.5 pb-1.5 pl-6 pr-6 rounded text-s text-secondary mt-4"
            />
          </form>
          <span className="text-primary text-sm flex justify-center mt-3 hover:text-link-hover">
            <Link to="#">Sign up to get started</Link>
          </span>
        </div>
      </div>
    )
}

export default Login
