function Settings({setFontSize, fontSize}){

    return (
        <div>
            <div style={{fontSize:fontSize}}>
                CheckList
            </div>
            <div>
                Font Size
                <input type="range" min="10" max="48" onChange={(e) => setFontSize(parseInt(e.target.value))} value={fontSize.toString()}/>
            </div>
        </div>
    )
}

export default Settings