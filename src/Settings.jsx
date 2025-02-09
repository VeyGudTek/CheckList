function Settings({setFontSize, fontSize}){

    return (
        <div className="settings">
            <div className="visual" style={{fontSize:fontSize+2}}>
                CheckList
            </div>
            <div style={{fontSize:fontSize}}>
                Font Size
                <input className="slider" type="range" min="10" max="48" onChange={(e) => setFontSize(parseInt(e.target.value))} value={fontSize.toString()}/>
            </div>
        </div>
    )
}

export default Settings