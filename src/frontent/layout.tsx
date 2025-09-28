import { Outlet } from "react-router-dom"
import Header from "./components/header/page"
import Footer from "./components/footer/page"



const Layout = () => {
  
  return (
    <>
    <Header />
    <main>
     <Outlet />
    </main>
 
      <Footer />
    </>
  )
}

export default Layout