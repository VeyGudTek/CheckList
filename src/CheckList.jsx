import { useState } from "react"
import Input from "./Input"
import Items from "./Items"

function CheckList() {
    const [fontSize, setFontSize] = useState(50)
    const [checkList, setCheckList] = useState([])
    const [doneList, setDoneList] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        checkList.push(1)
        setCheckList(checkList.slice())
        console.log("wow", checkList.length)
    }

    return (
        <div>
            <Input handleSubmit={handleSubmit}/>

            {checkList.length != 0 && <Items items={checkList} startID={0} fontSize={fontSize}/>}

        </div>
    )
}

export default CheckList