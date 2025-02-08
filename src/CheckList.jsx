import { useState } from "react"

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
        <div style={{fontSize: fontSize}}>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>

            {checkList.length != 0 && 
            checkList.map((item) => (
                <div>wow</div>
            ))}

        </div>
    )
}

export default CheckList