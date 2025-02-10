import { useState } from "react"

function Input({handleSubmit, fontSize}){
    const [text, setText] = useState("")

    const resetText = () => {
        setText("")
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="input" >
            <div className="input-prompt" style={{fontSize: fontSize}}>Enter a comma seperated list or individual items to add them to your checklist!</div>

            <form onSubmit={(e) => {handleSubmit(e, text); resetText();}}>
                <input type="text" placeholder={'"Banana, Apple, Milk" or "Grapes"'} value={text} onChange={handleOnChange} style={{fontSize: fontSize}} required/>
                <input type="submit" value={"Add Item"} style={{fontSize: fontSize}}/>
            </form>
        </div>
    )
}

export default Input