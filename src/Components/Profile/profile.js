import UserInfo from "../UserInfo/userinfo"
import Image from "../Image/image"

function Profile(){
    return ( 
        <div className="m">
            <hr/>
            <Image /> 
            <UserInfo  name="MarKer" email="MarKer@gmail.com" phone="0665681452"/>
            <hr/>
       </div> )
}
export default Profile;