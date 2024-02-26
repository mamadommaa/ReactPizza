import React, { useState } from "react";

const Categories = ({ items }) => {
    const [activeItem, setActiveItem] = useState(null);

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
                            onClick={() => setActiveItem(el)}
                        >
                            {el}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;
