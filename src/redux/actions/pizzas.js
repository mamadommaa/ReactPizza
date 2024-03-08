import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
    return axios.get("http://localhost:3010/pizzas").then(({ data }) => {
        dispatch(setPizzas(data));
    });
};
// я думала можно юзануть тут useDispatch, чтоб просто написать функцию, которая будет в нужном месте вызывать setPizzas
// но использовать useDispatch можно только в компоненте
// именно поэтому вызов fetchPizzas мы делаем в App - там есть useEffect и useDispatch
// а тут мы создаем с помощью redux thunk асинхронный action - чтобы получить пиццы с сервера и отправить в redux именно тут
// а потом вызываем ее в компоненте, потому что у нее есть useEffect
// завтра надо подробнее про это почитать

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
});
