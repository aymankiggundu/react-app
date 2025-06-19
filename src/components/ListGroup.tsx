import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({items,heading}: ListGroupProps) {
    const [selectedIndex, setselectedIndex] = useState(-1);
    
    return (
    <div>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={item} 
                onClick={() => {setselectedIndex(index)}}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);}
export default ListGroup;