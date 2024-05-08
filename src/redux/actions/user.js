import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizzas } from './pizzas';

export const fetchUserData = createAsyncThunk(
    'auth/fetchUserData',
    async (params, { dispatch }) => {
        try {
            const { data } = await axios.post('http://localhost:4444/auth/login', params);
            console.log(data);
            
            // Проверяем authStatus на true, если не true, устанавливаем в false
            const authStatus = data.authStatus !== true ? false : true;
            
            // Создаем экшен для установки статуса аутентификации
            const authStatusAction = {
                type: "SET_AUTH_STATUS",
                payload: authStatus
            };
            
            // Диспатчим экшен для установки статуса аутентификации
            dispatch(authStatusAction);
            
            return data;
        } catch (error) {
            console.error('Error occurred:', error);
            
            // Если произошла ошибка и authStatus не установлен в true, устанавливаем в false
            if (error.response && error.response.status === 404) {
                const authStatusAction = {
                    type: "SET_AUTH_STATUS",
                    payload: false
                };
                
                dispatch(authStatusAction);
            }
            
            throw error;
        }
    }
);

export const fetchOnePizza = createAsyncThunk(
    'data/sendDataToUrl',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:4444/pizzas/create', data);
            // Диспатчим функцию fetchPizzas после успешного завершения запроса
            thunkAPI.dispatch(fetchPizzas());
            return response.data;
        } catch (error) {
            console.error('Error occurred:', error);
            throw error;
        }
    }
);


export const fetchDelOnePizza = createAsyncThunk(
    'data/delDataToUrl',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:4444/pizzas/${id}`);
            // Диспатчим функцию fetchPizzas после успешного удаления пиццы
            thunkAPI.dispatch(fetchPizzas());
            return response.data;
        } catch (error) {
            console.error('Error occurred:', error);
            throw error;
        }
    }
);



