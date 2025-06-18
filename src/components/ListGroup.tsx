function ListGroup( ){
    const items = ["kenya" , "tanzania", "uganda", "africa","tanzania", "kenya", "uganda", "africa"];
    return (
    <div>
        <h1>List of items</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={index} onClick={(event) => console.log(event)} >
                    {item}
                </li>
            ))}
        </ul>
    </div>
);}
export default ListGroup;