function DateTime(){
    return <h1>{new Date().toLocaleTimeString()}</h1>
}
setInterval(DateTime,1000)

export default DateTime;