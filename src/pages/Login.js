import React from "react"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection/CommonSection"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
      <Helmet title='Login'>
        <section className="text-white text-[30px]">
          <CommonSection title="Please Login" />
        </section>

        <div className="flex justify-center">
          <form className="form bg-[#fde4e4] md:w-[27%] min-w-[350px]  my-10 rounded-[5px]">

            <div className="form_group ml-5 pt-3 mr-3 pb-3 border-b-2 border-[rgba(33,34,69,.2980392156862745)]">
              <input className="w-[100%] border-none bg-[#fde4e4] outline-none" type="text" placeholder="Enter Your Email" required />
            </div>

            <div className="form_group ml-5 pt-3 mr-3 pb-3 border-b-2 border-[rgba(33,34,69,.2980392156862745)]">
              <input className="w-[100%] border-none bg-[#fde4e4] outline-none" type="password" placeholder="Enter You Password" required />
            </div>

            <button className=" cursor-pointer my-5 ml-40  bg-[#df2020] text-white py-2 px-4 rounded-[5px]">Login</button>
          </form>
        </div>

        <div className="flex justify-center mb-10 hover:text-[#0a58ca]">
          <div className="text-gray-600"> <Link to="/Register">Don't have an account ? <span>Create account</span></Link></div>
        </div>

      </Helmet>
    </>

  )
}
export default Login