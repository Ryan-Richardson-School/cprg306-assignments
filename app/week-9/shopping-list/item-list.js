"use client";

import Item from "./item";
import { useState } from "react";


export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    let itemsCopy = [...items];

    itemsCopy.sort((a, b) => {
        if (sortBy === "name"){
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category"){
            return a.category.localeCompare(b.category);
        }
        else{
            return 0;
        }
    });
   return (
    <div>
      <div className="items-center text-center">
        <button onClick={() => setSortBy("name")} className={`m-2 p-2 text-white rounded ${sortBy === "name" ? "bg-blue-500" : "bg-slate-500"}`}>
          Sort by Name
        </button>

        <button onClick={() => setSortBy("category")} className={`m-2 p-2 text-white rounded ${sortBy === "category" ? "bg-blue-500" : "bg-slate-500"}`}>
          Sort by Category
        </button>
      </div>

      <ul>
        {itemsCopy.map((item) => (<Item key={item.id} item={item} onSelect={onItemSelect}/>
        ))}
      </ul>
    </div>
  );
}