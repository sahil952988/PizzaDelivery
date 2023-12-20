import Header from "../Header/Header"
import Footer from "../Header/Footer/Footer"
import Routers from "../../routes/Routers"


const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>

      <Footer />

    </div>
  )
}
export default Layout