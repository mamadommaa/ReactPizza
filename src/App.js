import React, { useEffect } from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import setPizzas from "./redux/actions/pizzas";
import { connect } from "react-redux";

function App(props) {
    useEffect(() => {
        axios.get("http://localhost:3005/db.json").then(({ data }) => {
            props.setPizzas(data.pizzas);
        });
    }, [props]);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home pizzas={props.items} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
