import { useState, useEffect } from "react"
import Settings from "./Settings"
import Input from "./Input"
import Items from "./Items"
import CopyPaste from "./CopyPaste"

function CheckList() {
    const [fontSize, setFontSize] = useState(25)

    const [checkList, setCheckList] = useState([])
    const [doneList, setDoneList] = useState([])
    
    useEffect(() => {
        if (sessionStorage.getItem("checkList")){
            setCheckList(JSON.parse(sessionStorage.getItem("checkList")))
        }
        if (sessionStorage.getItem("doneList")){
            setDoneList(JSON.parse(sessionStorage.getItem("doneList")))
        }
    }, [])

    const handleSubmit = (e, text) => {
        e.preventDefault()

        text = text.replace(/＇|，|．|·|、|。/g, ",")
        
        var newItems = text.split(",")
        newItems.forEach((item) => {
            if (item.trim() != ""){
                checkList.push(item.trim())
            }
        })
        setCheckList(checkList.slice())
        sessionStorage.setItem("checkList", JSON.stringify(checkList))
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
        sessionStorage.setItem("checkList", JSON.stringify(checkList))
        sessionStorage.setItem("doneList", JSON.stringify(doneList))
    }

    const deleteAll = () => {
        setCheckList([])
        setDoneList([])
        sessionStorage.clear()
    }

    return (
        <div>
            <Settings setFontSize={setFontSize} fontSize={fontSize}/>
            <Input handleSubmit={handleSubmit} fontSize={fontSize}/>

            <Items items={checkList} moveItem={moveItem} startID={0} label={"CheckList"} fontSize={fontSize} style={"item"}/>
            <Items items={doneList} moveItem={moveItem} startID={checkList.length} label={"Completed Items"} fontSize={fontSize} style={"done"}/>

            <CopyPaste items={checkList} title={"Copy CheckList"} fontSize={fontSize}/>
            <CopyPaste items={doneList} title={"Copy Completed Items"} fontSize={fontSize}/>

            <div className="delete-container">
                <button className="delete" style={{fontSize: fontSize}} onClick={deleteAll}>Delete All</button>
            </div>
        </div>
    )
}

export default CheckList
