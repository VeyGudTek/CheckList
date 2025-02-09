function CopyPaste({items, title, fontSize}){
    var text = ""
    var count = 0
    items.forEach((item) => {
        text += (count === items.length - 1) ? item : item + ", "
        count += 1
    })

    return (
        <div className="copy-paste-container">
            <span className="label" style={{fontSize: fontSize+2}}>{title}</span>
            <div className="copy-paste" style={{fontSize: fontSize}}>
                {text}
            </div>
        </div>
    )
}

export default CopyPaste