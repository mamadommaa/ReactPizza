import React, { useEffect, useState, useRef } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../redux/actions/filters";
const Sort = memo(({ sortBy }) => {
    console.log(sortBy);
    const dispatch = useDispatch();
    const [visiblePopap, setVisiblePopap] = useState(false);

    const sortRef = useRef();
    const handleOutsideClick = (e) => {
        if (!e.composedPath().includes(sortRef.current)) {
            setVisiblePopap(false);
        }
    };
    // если у useEffect вторым аргументом [], то работать он будет только при монтировании компонента - ему плевать на перерендер
    // если в массив добавить переменную [visiblePopap], то useEffect сработает только при ее изменении
    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <div>
                    <svg
                        className={visiblePopap ? "rotated" : ""}
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                </div>
                <span
                    onClick={() => {
                        setVisiblePopap(!visiblePopap);
                    }}
                >
                    {sortBy}
                </span>
            </div>
            {visiblePopap && (
                <div className="sort__popup">
                    <ul>
                        {["популярности", "цене", "алфавиту"].map((element) => {
                            return (
                                <li
                                    key={element}
                                    onClick={() => {
                                        setVisiblePopap(false);
                                        dispatch(setSortBy(element));
                                    }}
                                    className={
                                        sortBy === element ? "active" : null
                                    }
                                >
                                    {element}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
});

export default Sort;
