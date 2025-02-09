function Input({handleSubmit}){
    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Input