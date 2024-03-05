import React from "react";
import ReactDOM from "react-dom/client";
// добавили store
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./scss/app.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// подписались на изменения store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);

reportWebVitals();
