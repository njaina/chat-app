
const Chat = ()=>{
    const logout = ()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <main>
        welcome
        <button onClick={logout}>logout</button>
        </main>
    )
}
export default Chat;