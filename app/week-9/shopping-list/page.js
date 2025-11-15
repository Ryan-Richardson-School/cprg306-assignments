"use client";

import React, { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import Items from "./items.json";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../utils/auth-context";
import Link from "next/link";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth(); 
  const [items, setItems] = useState(Items);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const cleanItemName = (name) => {
    return name
      .toLowerCase()
      .replace(/[,]/g,"")
      .replace(/\d+/g, "")
      .replace(/\b(l|kg|g|ml)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^\w/, (c) => c.toUpperCase());
  };
  const handleItemSelect = (item) => {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  };
  
  if (!user) {
    return (
      <main className="p-8">
        <p className="text-xl mb-4">You must be logged in to view this page.</p>
        <Link href="/week-9" className="underline text-blue-500">
          Return to Login
        </Link>
      </main>
    );
  }


  return (
    <main>
      <div className="p-8 bg-black min-h-screen flex">
        <div className="flex-1 mr-4">
              <button onClick={firebaseSignOut} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">
                Logout
              </button>
          <h1 className="text-4xl font-bold mb-6 text-center">Week 9</h1>
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