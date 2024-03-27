import classNames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaToCart } from "../../redux/actions/cart";
// import ContentLoader from "react-content-loader";

const PizzaBlock = ({ name, imageUrl, price, types, sizes, id }) => {
    const dispatch = useDispatch();

    
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [countPizzasToCart, setCountPizzasToCart] = useState(0);
    
    const addPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: activeSize,
            type: ["тонкое", "традиционное"][activeType]
        }
        dispatch(addPizzaToCart(obj))
        setCountPizzasToCart(countPizzasToCart + 1)
    }
    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {["тонкое", "традиционное"].map((element, index) => {
                        console.log(element)
                        return (
                            
                            <li
                                // className={
                                //     (index === activeType ? "active " : "") +
                                //     (types.includes(index) ? "" : "disabled")
                                // } или как ниже - без разницы
                                className={classNames({
                                    active: index === activeType,
                                    disabled: !types.includes(index),
                                })}
                                onClick={() => setActiveType(index)}
                                key={index}
                            >
                                {element}
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {[26, 30, 40].map((element) => {
                        return (
                            <li
                                key={element}
                                className={classNames({
                                    active: activeSize === element,
                                    disabled: !sizes.includes(element),
                                })}
                                onClick={() => {
                                    setActiveSize(element);
                                }}
                            >
                                {element} см
                            </li>
                        );
                    })}
                    {/* <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li> */}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button addPizza = {addPizza} className="button--add button--outline">
                    <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    
                    <span> Добавить</span>
                    {countPizzasToCart !== 0 && <i>{countPizzasToCart}</i>}
                </Button>
            </div>
        </div>
    );
};
// не обязательно, но желательно
PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // строка ниже значит type array из number + обзательно
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
    // если массив не придет приложение не умрет
    types: [],
    sizes: [],
    name: "---",
    price: 0,
};

export default PizzaBlock;
