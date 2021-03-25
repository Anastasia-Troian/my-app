function UserInfo(props){
    return (
    <div className="color">
        <p>UserInfo</p>
        <p>User Name: {props.name}</p>
        <p>User Email: {props.email}</p>
        <p>User Phone: {props.phone}</p>
        </div>)
}
export default UserInfo;