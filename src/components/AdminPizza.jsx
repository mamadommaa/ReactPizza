import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import {fetchDelOnePizza} from '../redux/actions/user'
export const AdminPizza = ({ imageUrl, name, types, sizes, price, category, rating, id, discount}) => {
      console.log(category)
    const dispatch = useDispatch();
    const handleTouchPizzaId = () => {
        dispatch(fetchDelOnePizza(id))
        dispatch(fetchPizzas())
        console.log(id)
    }
    return (
        <div className="admin-pizza">
            <img className="admin-pizza__img" src= {imageUrl} alt="" />
            <span className="admin-pizza__descr">{name}</span>
            <span className="admin-pizza__descr">
                {types.includes(0) && "тонкая"}
                {types.includes(0) && types.includes(1) && ", "}
                {types.includes(1) && "традиционная"}
            </span>

           <span className="admin-pizza__descr">{sizes.join(', ')}</span>
            <span className="admin-pizza__descr">{price + "р"}</span>
            <span className="admin-pizza__descr">{category}</span>
            <span className="admin-pizza__descr">{rating}</span>
            <span className="admin-pizza__descr">{ discount + "%"}</span>
            <button className = "admin-pizza__delete" onClick={handleTouchPizzaId}>
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="27" height="27" rx="9" fill="#D73636"/>
<path d="M9 8.5L19.125 18.625" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18.625L19.125 8.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
        </div>
        
    )
}

export default AdminPizza;