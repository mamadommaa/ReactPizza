// import React, { useState } from "react";
import { memo } from "react";
const Categories = memo(({ items, saveCategoriesInRedux, activeItem }) => {
    // const [activeItem, setActiveItem] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    // onClick={() => activeItem(null)}
                    onClick={() => {
                        saveCategoriesInRedux(null);
                    }}
                >
                    Всё
                </li>
                {items &&
                    items.map((el) => (
                        <li
                            key={el}
                            className={activeItem === el ? "active" : ""}
                            onClick={() => {
                                // activeItem !== el && activeItem(el);
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
