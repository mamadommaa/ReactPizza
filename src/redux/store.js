// подключили импорты
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

// простой пример reducer
function counter(state = 0, action) {
    switch (action.type) {
        case "ДОБАВИТЬ":
            return state + 1;
        case "УБАВИТЬ":
            return state - 1;
        default:
            return state;
    }
}

// все reduser нужно всегда склеивать в один большой
let reducers = combineReducers({
    couners: counter,
});

// Передача глобального редюсера в конфигурацию хранилища store и его инициализация
let store = configureStore({
    reducer: reducers,
});

// обязательно экспортировали
export default store;
