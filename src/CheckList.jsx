import { useState } from "react"
import Input from "./Input"
import Items from "./Items"

function CheckList() {
    const [fontSize, setFontSize] = useState(25)

    const [checkList, setCheckList] = useState([])
    const [doneList, setDoneList] = useState([])

    const handleSubmit = (e, text) => {
        e.preventDefault()
        var newItems = text.split(",")
        newItems.forEach((item) => checkList.push(item.trim()))
        setCheckList(checkList.slice())
    }
    
    const moveItem = (item, items) => {
        items.splice(items.indexOf(item), 1)
        console.log(item, items)
        if (items == checkList){
            doneList.push(item)
            console.log("check")
        }
        else{
            checkList.push(item)
            console.log("done")
        }
        setCheckList(checkList.slice())
        setDoneList(doneList.slice())
        console.log(doneList, checkList)
    }

    return (
        <div>
            <Input handleSubmit={handleSubmit} fontSize={fontSize}/>

            {checkList.length != 0 && <Items items={checkList} moveItem={moveItem} startID={0} label={"CheckList"} fontSize={fontSize}/>}
            {doneList.length != 0 && <Items items={doneList} moveItem={moveItem} startID={checkList.length} label={"Completed"} fontSize={fontSize}/>}
        </div>
    )
}

export default CheckList