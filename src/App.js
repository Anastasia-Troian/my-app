import Hello from "./Components/Hello/hello"
import GoodBye from "./Components/GoodBye/goodBye"
import DateTime from "./Components/Date/date"

import Profile from "./Components/Profile/profile"
import NavBar from "./Components/Navbar/navbar"
import Footer from "./Components/Footer/footer"
import "./Components/CSS/style.css"


import "./Components_/Group/GroupsList/groupList"
import GroupList from "./Components_/Group/GroupsList/groupList"

function App() {
 return ( 
 <div id="i">
     {/* <Hello name="MarKer"/> 
     <GoodBye name="MarKer"/>
     <DateTime/>  */}
     {/* <NavBar name="Profile"/>
     <hr/>
     <Profile/>
     <hr/>
     <div className="b">
     <Footer  name="#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#"/>
     </div> */}
     <GroupList/>
</div> )
}

export default App;