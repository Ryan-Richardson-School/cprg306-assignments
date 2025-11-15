export default function Item({name, quantity, category, onSelect}) {
    return (
        <ul>
             <li onClick={onSelect} className="p-4 m-2 border rounded-lg shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
              text-white" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>{name}<br/>
              Buy Quantity: {quantity} in {category} 
              </li>
        </ul>
    )
}