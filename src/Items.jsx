function Items({items, startID, fontSize, moveItem, label, style}){
    var count = startID
    const list = items.map(function(item, count){
        return (
            <button className={style} style={{fontSize: fontSize}} key={count} onClick={() => moveItem(item, items)}>
                    {item}
            </button>
        )
    })

    return (
        <div className="list-container">
            <span className="label" style={{fontSize: fontSize+2}}>{label}</span>
            <div className="items">
                {list}
            </div>
        </div>
        
    )
}

export default Items