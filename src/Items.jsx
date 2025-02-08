function Items({items, startID, fontSize}){
    console.log(items)
    var count = startID
    const list = items.map(function(item, count){
        return (
            <div className="item" key={count}>
                    {item} {count}
            </div>
        )
    })

    return (
        <div className="items" style={{fontSize: fontSize}}>
            {list}
        </div>
    )
}

export default Items