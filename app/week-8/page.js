"use client";

import React, {useState} from 'react';
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import Items from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Week8Page() {
    const [items, setItems] = useState(Items);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const handleItemSelect = (item) => {
        // Remove quantities and emojis from item name
        const cleanedName = item.name.replace(/[\d\s×✕❌✅✔️🌟🌿🍎🍔🍕🍇🍉🍌🍓🍒🍍🥦🥕🥩🥚🥛🍞]+/g, '').trim();
        setSelectedItemName(cleanedName);
    }

    return  (
        <main>
            <div className="p-8 bg-black min-h-screen flex">
                <div className="flex-1 mr-4">
                    <h1 className="text-4xl font-bold mb-6 text-center">Week 8</h1>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 ml-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}