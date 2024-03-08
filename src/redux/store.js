import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

// Проверяем наличие расширения Redux DevTools и добавляем его, если оно доступно
const reduxDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

// Создаем хранилище с помощью configureStore, передавая ему rootReducer, middleware и reduxDevToolsExtension
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: reduxDevToolsExtension, // Используем расширение Redux DevTools
});

// Делаем хранилище доступным в глобальной области видимости для удобства отладки
window.store = store;

export default store;
