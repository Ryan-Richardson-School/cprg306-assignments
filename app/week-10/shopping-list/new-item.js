"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");  
    const [category, setCategory] = useState("produce");
    const increment = () => setQuantity((q) => Math.min(q + 1, 20));
    const decrement = () => setQuantity((q) => Math.max(q - 1, 1));
    const cleanItemName = (name) => {
        return name
        .replace(/[,]/g, "")
        .replace(/\d+/g, "")
        .replace(/\b(l|kg|g|ml)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();
    };
    const subMisshHandle = (e) => {
        e.preventDefault();
        const item = {
            id: Math.random().toString(36).substr(2, 9),
            name: cleanItemName (name),
            quantity: quantity,
            category: category
        };

    onAddItem(item);
    setName("");
    setCategory("produce");
    setQuantity(1);
    };
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height : "100vh",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
    };
    const buttonStyle = {
        fontSize: "20px",
        padding: "10px 20px",
        margin: "0 10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007BFF",
        color: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.2s transform 0.1s",
    };
    const buttonHover = {
        backgroundColor: "#0056b3",
        transform: "scale(1.05)",
    }
    const buttonContainerStyle= {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
    }
    const quantityStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        margin: "0 15px",
    }
    const inputStyle = {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "blue",
    };
    const submitStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer",
        marginTop: "20px",
    };
    const selectStyle = {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "blue",
    };

    return (
        <div style ={containerStyle}>
            <h3>Add items to cart: </h3>
            <form onSubmit={subMisshHandle} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input 
                    type="text"
                    placeholder="Enter item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    required
                    />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={selectStyle}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>   

                <div style={buttonContainerStyle}>
                    <button
                        type ="button"
                        style={buttonStyle}
                        onMouseOver={e => Object.assign(e.target.style, buttonHover)}
                        onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
                        onClick={decrement}
                    >
                        -
                    </button>
                    <span style={quantityStyle}>{quantity}</span>
                    <button
                    type ="button"
                        style={buttonStyle}
                        onMouseOver={e => Object.assign(e.target.style, buttonHover)}
                        onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
                        onClick={increment}
                    >
                        +
                    </button>
                </div>  
                <button type="submit" style={submitStyle}>
                        Add to Cart
                </button>
            </form>
        </div>
    );
}