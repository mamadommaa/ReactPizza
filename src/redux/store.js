// // подключили импорты
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";
// let store = configureStore({
//     reducer: rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// });

// window.store = store;

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Проверяем наличие расширения Redux DevTools и добавляем его, если оно доступно
const reduxDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

// Создаем хранилище с помощью configureStore, передавая ему rootReducer и reduxDevToolsExtension
const store = configureStore({
    reducer: rootReducer,
    devTools: reduxDevToolsExtension, // Используем расширение Redux DevTools
});

// Делаем хранилище доступным в глобальной области видимости для удобства отладки
window.store = store;

export default store;
