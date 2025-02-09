import { useState } from "react"

function Input({handleSubmit, fontSize}){
    const [text, setText] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="input" >
            <span style={{fontSize: fontSize}}>Enter a comma seperated list or individual items to add them to your checklist!</span>

            <form onSubmit={(e) => handleSubmit(e, text)}>
                <input type="text" value={text} onChange={handleOnChange} style={{fontSize: fontSize}}/>
                <input type="submit" value={"Add Item"} style={{fontSize: fontSize}}/>
            </form>
        </div>
    )
}

export default Input