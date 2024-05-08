import React from 'react';
import { useForm } from 'react-hook-form';
import AdminPizza from "../components/AdminPizza";
import { useSelector, useDispatch } from 'react-redux';
import { fetchOnePizza } from "../redux/actions/user";
import { fetchPizzas } from '../redux/actions/pizzas';
export const Admin = () => {
    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const dispatch = useDispatch();
    // const [myState, setMyState] = useState(false);
        
    // const handleRefresh = () => {
    //     setMyState(myState => !myState);
    //     console.log("Вроде перерисовать должен")
    // }
    console.log(pizzas)
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imageUrl: '',
      name: '',
          types: '',
          sizes: '',
          name: '',
          price: '',
          category: '',
      rating: '',
    },
  });
    
    const onSubmit = (data, event) => {
        // console.log("Вот что попадает в input")
        dispatch(fetchOnePizza(data))
        console.log(data);
        dispatch(fetchPizzas())
        event.preventDefault();
        

    };


    return (
        <div className="admin">
            <div className="admin__container">
                {/* <button onClick = {handleRefresh} >test</button> */}
                <h1 className="admin__h1">Все пиццы</h1>
                <form className="admin__form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('imageUrl', { required: 'Укажите почту' })}
                        className="admin__input"
                        type="text"
                        placeholder="IMG" />
                    <input
                        {...register('name', { required: 'Укажите пароль' })}
                        className="admin__input"
                        type="text"
                        placeholder="Название" />
                    <input
                        {...register('types', { required: 'Укажите пароль' })}
                        className="admin__input"
                        type="text"
                        placeholder="Тесто" />
                    <input
                        {...register('sizes', { required: 'Укажите пароль' })}
                        className="admin__input"
                        type="text"
                        placeholder="Размеры" />
                     <input
                        {...register('price', { required: 'Укажите пароль' })}
                        className="admin__input"
                        type="text"
                        placeholder="Цена" />
                     <input
                        {...register('category', { required: 'Укажите пароль' })}
                        className="admin__input"
                        type="text"
                        placeholder="Категория" />
                     <input
                        {...register('rating', { required: 'Укажите пароль' })}
                        className="admin__input"
                        type="text"
                        placeholder="Рейтинг" />
                    <button className="admin__btn" type="submit">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="27" height="27" rx="9" fill="#30AB52"/>
                            <path d="M21.8649 5.79498C21.8511 5.79842 21.8374 5.80358 21.8236 5.80873C21.7085 5.83795 21.6088 5.91186 21.5486 6.01498L12.5561 19.9575L6.36863 14.375C6.26035 14.2375 6.07988 14.1773 5.90972 14.222C5.73957 14.2667 5.6141 14.4094 5.58832 14.583C5.56254 14.7565 5.6416 14.9284 5.79113 15.0212L12.3499 20.9612C12.4461 21.0455 12.575 21.0833 12.7022 21.0644C12.8294 21.0455 12.9411 20.9733 13.0099 20.865L22.2911 6.48248C22.3925 6.33811 22.3977 6.14733 22.3049 5.99779C22.2121 5.84826 22.0385 5.7692 21.8649 5.79498Z" fill="white"/>
                        </svg>
                    </button>
                </form>
               {pizzas.map((element) => (
                   <AdminPizza
                       id = {element._id}
                       key={element._id}
                       imageUrl={element.imageUrl}
                       name={element.name}
                       types={element.types}
                       sizes={element.sizes}
                       price={element.price}
                       category = {element.category}
                       rating = {element.rating}
                   />
                ))}

                {/* <AdminPizza imageUrl={ pizzas[0].imageUrl}/> */}
            </div>
        </div>
    )
}

export default Admin;