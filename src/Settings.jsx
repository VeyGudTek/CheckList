function Settings({adjustFontSize, fontSize}){

    return (
        <div>
            <div style={{fontSize:fontSize}}>
                CheckList
            </div>
            <div>
                <button onClick={() => adjustFontSize(false)}>
                    Decrease
                </button>
                    Font Size
                <button onClick={() => adjustFontSize(true)}>
                    Increase
                </button>
            </div>
        </div>
    )
}

export default Settings