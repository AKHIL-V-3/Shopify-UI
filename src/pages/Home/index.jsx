import { Body } from "../../Comonents/Body"
import { Header } from "../../Comonents/Header"
import { Sidebar } from "../../Comonents/Sidebar"

const Home = () => {
  return (
    <>
      
      <Header/>
       <div className="w-full h-screen fixed flex justify-between">
       <Sidebar/>
       <Body/>
       </div>
    </>
  )
}

export default Home