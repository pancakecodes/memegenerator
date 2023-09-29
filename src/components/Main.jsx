function Main(){
    function handleClick(){
        console.log("clicked")
    }
    return(
        <main>
        <div type="form" className="main--form">
        <input type="text" className="text--top" placeholder="text top"/>
        <input type="text" className="text--bottom" placeholder="text bottom"/>
        <button className="main--button" onClick={handleClick}>Get a new meme image 🖼️</button>
        </div>
        </main>
        
    )
}

export default Main;