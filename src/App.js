import React, { useEffect } from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import setPizzas from "./redux/actions/pizzas";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({ data }) => {
            dispatch(setPizzas(data.pizzas));
            // console.log("render posle pizz");
        });
    }, [dispatch]);
    // console.log("render do pizz");
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
