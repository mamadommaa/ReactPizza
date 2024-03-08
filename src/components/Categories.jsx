import React, { useState } from "react";
import { memo } from "react";
const Categories = memo(({ items, saveCategoriesInRedux }) => {
    const [activeItem, setActiveItem] = useState(null);
    console.log(activeItem + "  rerender");

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    onClick={() => setActiveItem(null)}
                >
                    Всё
                </li>
                {items &&
                    items.map((el) => (
                        <li
                            key={el}
                            className={activeItem === el ? "active" : ""}
                            onClick={() => {
                                activeItem !== el && setActiveItem(el);
                                saveCategoriesInRedux(el);
                            }}
                        >
                            {el}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

export default Categories;
