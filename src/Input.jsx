import { useState } from "react"

function Input({handleSubmit}){
    const [text, setText] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="input">
            <span>Enter a comma seperated list or individual items to add them to your checklist!</span>

            <form onSubmit={(e) => handleSubmit(e, text)}>
                <input type="text" value={text} onChange={handleOnChange}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Input