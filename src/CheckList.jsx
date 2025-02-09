import { useState } from "react"
import Settings from "./Settings"
import Input from "./Input"
import Items from "./Items"
import CopyPaste from "./CopyPaste"

function CheckList() {
    const [fontSize, setFontSize] = useState(25)

    const [checkList, setCheckList] = useState([])
    const [doneList, setDoneList] = useState([])

    const adjustFontSize = (increase) => {
        if (increase){
            setFontSize(fontSize + 1)
        }
        else{
            setFontSize(fontSize - 1)
        }
    }

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
            <Settings adjustFontSize={adjustFontSize} fontSize={fontSize}/>
            <Input handleSubmit={handleSubmit} fontSize={fontSize}/>

            {checkList.length != 0 && <Items items={checkList} moveItem={moveItem} startID={0} label={"CheckList"} fontSize={fontSize}/>}
            {doneList.length != 0 && <Items items={doneList} moveItem={moveItem} startID={checkList.length} label={"Completed Items"} fontSize={fontSize}/>}

            {checkList.length != 0&& <CopyPaste items={checkList} title={"CheckList Text"} fontSize={fontSize}/>}
            {doneList.length != 0&& <CopyPaste items={doneList} title={"Completed Items Text"} fontSize={fontSize}/>}
        </div>
    )
}

export default CheckList