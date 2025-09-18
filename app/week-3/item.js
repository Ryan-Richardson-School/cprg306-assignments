export default function Item({name, quantity, category}) {
    return (
        <ul>
             <li className="p-4 m-2 border rounded-lg shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
              text-white" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>{name}</li>
        </ul>
    )
}