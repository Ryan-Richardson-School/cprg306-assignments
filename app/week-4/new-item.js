"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(lastquantity => Math.min(lastquantity + 1, 20));
    };
    const decrement = () => {
        setQuantity(lastquantity => Math.max(lastquantity - 1, 1));
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

    return (
        <div style ={containerStyle}>
            <h3>Add items to cart: </h3>
            <div style={buttonContainerStyle}>
                <button
                    style={buttonStyle}
                    onMouseOver={e => Object.assign(e.target.style, buttonHover)}
                    onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
                    onClick={increment}
                >
                    +
                </button>
                <span style={quantityStyle}>{quantity}</span>
                <button
                    style={buttonStyle}
                    onMouseOver={e => Object.assign(e.target.style, buttonHover)}
                    onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
                    onClick={decrement}
                >
                    -
                </button>
            </div>
        </div>
    );
}