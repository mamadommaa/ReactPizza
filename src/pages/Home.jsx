import React from "react";
import { Categories, Sort, PizzaBlock, PizzaLoaderBlock, Banner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { useCallback } from "react";
import { useEffect } from "react";
import { fetchPizzas } from "../redux/actions/pizzas";

const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy, dispatch]);

    const saveCategoriesInRedux = useCallback((name) => { dispatch(setCategory(name))} ,
        [dispatch]
    );

    return (
        <div className="container">
            <Banner/>
            <div className="content__top">
                <Categories
                    saveCategoriesInRedux={saveCategoriesInRedux}
                    items={items}
                    activeItem={category}
                />
                <Sort sortBy={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map((element) => (
                          <PizzaBlock key={element.id} {...element} />
                      ))
                    : Array(10)
                          .fill()
                          .map((_, index) => <PizzaLoaderBlock key={index} />)}
            </div>
        </div>
    );
};

export default Home;
