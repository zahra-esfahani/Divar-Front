import Main from "../components/tempelates/Main"
import SideBar from "../components/tempelates/SideBar"

function HomePage() {
  return (
    <>
    <div style={{display:"flex"}}>
      <SideBar/>
      <Main/>
    </div>
    </>
  )
}

export default HomePage