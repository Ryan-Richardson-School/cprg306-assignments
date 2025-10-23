"use client";

import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList(){
    let itemsCopy = [...itemsData];
    const [sortBy, setSortBy] = useState("name");

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

    const handleClick = (id) => {
        if (sortBy === id){
        setSortBy(null);
     }
        else {
        setSortBy(id);
        }
    }
    

    return (
        <div>
            <div class="items-center text-center">
                <button onClick={() => handleClick("name")} className={`m-2 p-2  text-white rounded ${sortBy === "name" ? "bg-blue-500" : "bg-slate-500 "}`}>Sort by Name</button>
                <button onClick={() => handleClick("category")} className={`m-2 p-2  text-white rounded ${sortBy === "category" ? "bg-blue-500" : "bg-slate-500 "}`}>Sort by Category</button>
                </div>
            <ul>
                {itemsCopy.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
        </ul>
       </div>    
    )
}