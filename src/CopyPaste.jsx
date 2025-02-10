import { useState, useEffect } from "react"

function CopyPaste({items, title, fontSize}){
    const [copiedStyle, setCopiedStyle] = useState("fadeOut")

    const clipBoard = () => {
        if (text != ""){
            navigator.clipboard.writeText(text)
            setCopiedStyle("copied")
        }
    }

    useEffect(() => {
        setCopiedStyle("fadeOut")
    }, [copiedStyle])

    var text = ""
    var count = 0
    items.forEach((item) => {
        text += (count === items.length - 1) ? item : item + ", "
        count += 1
    })

    return (
        <div className="copy-paste-container">
            <div className={copiedStyle} style={{fontSize: fontSize}}>
                Copied!
            </div>

            <div className="copy-paste-button" onClick={clipBoard}>
                <div className="label" style={{fontSize: fontSize+2}}>{title}</div>
                <div className="copy-paste" style={{fontSize: fontSize}}>
                    {text != "" ? text : <div className="no-item">
                        This list has no items.
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default CopyPaste