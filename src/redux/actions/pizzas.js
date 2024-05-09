import axios from "axios";

export const setLoaded = (val) => ({
    type: "SET_LOADED",
    payload: val,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
//     console.log(category)
//     if (category === null) {
//         category = '';
//     }
//     let p;
//     switch (sortBy) {
//   case 'цене':
//     p = "price"
//     break;
//   case 'популярности':
//     p = "rating"
//     break;
//   case 'алфавиту':
//     p = "name"
//     break;
//   default:
//     break;
    
// }
    return axios
      .get(`http://localhost:4444/pizzas`)
      .then(({ data }) => {
          console.log(data)
            dispatch(setPizzas(data.pizzas));
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


  // .get(`http://localhost:3010/pizzas?category=${category}&_sort=${p}`)