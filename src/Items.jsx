function Items({items, startID, fontSize, moveItem, label}){
    var count = startID
    const list = items.map(function(item, count){
        return (
            <div className="item" key={count} onClick={() => moveItem(item, items)}>
                    {item}
            </div>
        )
    })

    return (
        <div className="list-container">
            <span className="label" style={{fontSize: fontSize+2}}>{label}</span>
            <div className="items" style={{fontSize: fontSize}}>
                {list}
            </div>
        </div>
        
    )
}

export default Items