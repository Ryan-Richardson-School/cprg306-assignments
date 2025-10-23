"use client";

import react, {useState} from 'react';
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import Items from "./items.json";

export default function Week7Page() {
    const [items, setItems] = useState(Items);
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }
    return  (
        <main>
            <div className="p-8 bg-black min-h-screen">
                    <h1 className="text-4xl font-bold mb-6 text-center">Week 7</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
            </div>
        </main>
    );
}