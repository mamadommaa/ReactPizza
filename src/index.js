import React from "react";
import ReactDOM from "react-dom/client";
// добавили store
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./scss/app.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// сделали обработчик события для создания action и сделали его dispatch
const handleDObavit = () => {
    store.dispatch({
        type: "ДОБАВИТЬ",
    });
};
// подписались на изменения store
store.subscribe(() => {
    console.log("ИЗМЕНИЛСЯ", store.getState());
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* добавили объекту обработчик события для изменения store */}
            <button onClick={handleDObavit}>+1</button>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
