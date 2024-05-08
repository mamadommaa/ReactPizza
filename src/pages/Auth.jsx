import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions/user';
import { Navigate } from 'react-router-dom';
const Cart = () => {
    const statusAuth = useSelector(({ user }) => user.authStatus);
    const dispatch = useDispatch();
    console.log(statusAuth)
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

    const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
    dispatch(fetchUserData(data)); // Add this if you want to prevent default form submission behavior
        console.log("Данные отправлены на сервер")
        // dispatch(setAuthStatus())
        // console.log("Данные сохранены в redux ")
  };

 
    return (
        <div className="auth">
            <div className="auth__container">
                <h1 className="auth__h1">Авторизация</h1>
                     <form onSubmit={handleSubmit(onSubmit)}>
                    <input     error={Boolean(errors.email?.message)} {...register('email', { required: 'Укажите почту' })} className = "auth__input" type="text" placeholder="email" />
                    <input  error={Boolean(errors.password?.message)} {...register('password', { required: 'Укажите пароль' })} className = "auth__input" type="text" placeholder = "password" />
                    <button className="auth__btn" type="submit">Войти</button>
                   {statusAuth === true &&  <Navigate to="/admin" />}
                   {statusAuth === false && <span>Пароль не верный</span>}

                </form>
            </div>
        </div>
    )
}

export default Cart;