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
                {(items.length != 0) ? list : <div className="no-item" style={{fontSize: fontSize}}>
                    This list has no items.
                </div>}
            </div>
        </div>
        
    )
}

export default Items