import React from 'react'
import Logo from '../../assets/logo.svg'

const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault()

        console.log('Submitted')
    }

    return (
    <div className="flex justify-center">
    <div className="shadow-md bg-form-bg mt-48 p-12 rounded-md w-1/4 h-80">
      <div className="text-white">
        <div className="mb-4">
            <img className="h-6" src={Logo} alt="" />
        </div>
        <p className="mt-1 text-lg font-heading">Sign in to Snippify</p>
      </div>
      <form onSubmit={onSubmit} className="text-center">
        <div className="form-group mt-2">
          <input className="w-full rounded-md p-2" type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group mt-2">
          <input
            className="w-full rounded-md p-2"
            type="password"
            name="password"
            placeholder="Pasword"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-primary-btn-bg pt-1.5 pb-1.5 pl-6 pr-6 rounded text-s text-white mt-4"
        />
      </form>
      <span className="text-white text-sm flex justify-center mt-3">Sign up to get started</span>
     </div>
    </div>
    )
}

export default Login
