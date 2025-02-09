import { useState } from "react"
import Input from "./Input"
import Items from "./Items"

function CheckList() {
    const [fontSize, setFontSize] = useState(25)

    const [checkList, setCheckList] = useState([])
    const [doneList, setDoneList] = useState([])
    

    const handleSubmit = (e, text) => {
        e.preventDefault()
        checkList.push(text)
        setCheckList(checkList.slice())
    }

    return (
        <div>
            <Input handleSubmit={handleSubmit} fontSize={fontSize}/>

            {checkList.length != 0 && <Items items={checkList} startID={0} fontSize={fontSize}/>}

        </div>
    )
}

export default CheckList