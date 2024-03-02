import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/db.json")
            .then((response) => response.json())
            .then((json) => setPizzas(json.pizzas));
    }, []);

    // console.log(pizzas);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home pizzas={pizzas} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
