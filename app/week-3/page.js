import ItemList from "./item-list";
export default function ShoppingList() {
    return (
        <div className="p-8 bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center">Shopping List 🛒</h1>
            <ItemList />
        </div>
    );
}