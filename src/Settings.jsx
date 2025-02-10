function Settings({setFontSize, fontSize}){

    return (
        <div className="settings-container">
            <div className="settings">
                <div className="visual" style={{fontSize: 30}}>
                    CheckList
                </div>
                <div className="slider-container" style={{fontSize:25}}>
                    Font Size
                    <input className="slider" type="range" min="10" max="48" onChange={(e) => setFontSize(parseInt(e.target.value))} value={fontSize.toString()}/>
                </div>
                <div className="sample" style={{fontSize:fontSize}}>
                    Sample Text
                </div>
            </div>
        </div>
    )
}

export default Settings