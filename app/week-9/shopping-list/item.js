export default function Item({item, onSelect}) {
    return (
        <li
             onClick={() => onSelect(item)}
             className="p-4 m-2 border rounded-lg shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white cursor-pointer hover:opacity-80 transition" 
             style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
             {item.name}
             <br/>
             Buy Quantity: {item.quantity} in {item.category} 
        </li>
    );
}