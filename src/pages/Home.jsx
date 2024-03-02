import React from "react";
import { Categories, Sort, PizzaBlock } from "../components";

const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        "Пиццы",
                        "Комбо",
                        "Закуски",
                        "Кофе",
                        "Напитки",
                        "Десерты",
                        "Соусы",
                    ]}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map((element) => {
                    return (
                        <PizzaBlock
                            key={element.id}
                            // если бы я написала element = {element}, то через деструктуризацию смогла бы получить только key и объект element с id, name и тд
                            // в синтаксисе ниже весь объект element будет разбит на переменные, которые можно извлечь через деструктуризацию в PizzaBLock
                            {...element}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
