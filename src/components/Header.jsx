import React from "react";
import logo from "../assets/img/pizza-logo.svg";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
    return (
        <div className="header">
            <div className="container">
                <NavLink to="/">
                    <div className="header__logo">
                        <img width={38} src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink className = "header__navlink-key" to="/auth">
                    <button className = "header__key">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_127521_384)">
                                    <path d="M29.2308 4.61539C25.8461 4.61539 23.0769 7.38462 23.0769 10.7692C23.0769 14.1538 25.8461 16.9231 29.2308 16.9231C32.6154 16.9231 35.3846 14.1538 35.3846 10.7692C35.3846 7.38462 32.6154 4.61539 29.2308 4.61539ZM29.2308 15.3846C26.6153 15.3846 24.6154 13.3847 24.6154 10.7692C24.6154 8.15381 26.6153 6.15385 29.2308 6.15385C31.8462 6.15385 33.8461 8.15381 33.8461 10.7692C33.8461 13.3847 31.8462 15.3846 29.2308 15.3846Z" fill="black"/>
                                    <path d="M29.2308 0C23.2307 0 18.4615 4.76927 18.4615 10.7692C18.4615 12.6154 18.923 14.3077 19.6923 15.6923L0.923138 34.4615C-0.307631 35.6923 -0.307631 37.8461 0.923138 39.0769C2.15391 40.3077 4.30775 40.3077 5.53852 39.0769L8.46156 36.1538L12.3077 40L16.9231 35.3846L13.0769 31.5385L15.3847 29.2308L18.4616 32.3077L23.077 27.6923L20 24.6154L24.3076 20.3077C25.8461 21.0769 27.5384 21.5385 29.2307 21.5385C35.2307 21.5385 39.9999 16.7692 39.9999 10.7692C39.9999 4.76927 35.2308 0 29.2308 0ZM29.2308 20C27.2308 20 25.5384 19.3846 24 18.4615L17.6923 24.6154L20.7693 27.6923L18.4615 30L15.3846 26.9231L10.7692 31.5385L14.6153 35.3846L12.3077 37.6923L8.46156 33.8462L4.46156 37.8462C3.84617 38.4615 2.76921 38.4615 2.00002 37.8462C1.38464 37.2309 1.38464 36.1539 2.00002 35.3846L21.5384 16C20.4615 14.4615 20 12.7692 20 10.7692C20 5.69235 24.1538 1.53846 29.2308 1.53846C34.3077 1.53846 38.4615 5.69235 38.4615 10.7692C38.4615 15.8461 34.3076 20 29.2308 20Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_127521_384">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                        </button>
                </NavLink>
                <div className="header__cart">
                    <NavLink to="/cart">
                        <Button className="button--cart">
                            <span>{totalPrice} ₽</span>
                            <div className="button__delimiter" />
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                    stroke="white"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                    stroke="white"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                    stroke="white"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>{totalCount}</span>
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
