import Clock from "../Timer/timer"
import Second from "../Second/second"

function Navbar(props){
    return (<div className="nav"><p>{props.name}</p><Clock/><p> ............................. </p><Second/></div>)
}

export default Navbar;