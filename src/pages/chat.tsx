
const Chat = ()=>{
    const logout = ()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
        welcome
        <button onClick={logout}>logout</button>
        </>
    )
}
export default Chat;