//React
import React from "react";
import { useHistory } from "react-router-dom";
//Svg
import { Bread, Burger, Drinks, Pizza, Sandwich } from "../../../../utils/categorySvg";
//Scss
import "./CategoryFilter.scss";

function CategoryFilter({ onClickFilter = null, active }) {
    const categories = [
        {
            id: 0,
            img: Burger,
            name: "Burgers",
            type: "/burgers",
        },
        {
            id: 1,
            img: Bread,
            name: "Breads",
            type: "/breads",
        },
        {
            id: 2,
            img: Sandwich,
            name: "Sandwiches",
            type: "/sandwiches",
        },
        {
            id: 3,
            img: Drinks,
            name: "Drinks",
            type: "/drinks",
        },
        {
            id: 4,
            img: Pizza,
            name: "Pizzas",
            type: "/pizzas",
        },
    ];
    
    const history = useHistory();
    const activeUrl = history.location.search;
    const newActiveUrl = activeUrl.split("+")[1];

    const handleClick = ({ type }) => {
        if (!onClickFilter) return;
        onClickFilter(type);
    };
    const activeIndex = categories.findIndex((x) => x.type === newActiveUrl);
    return (
        <div className="filter__category">
            <ul className="filter__category-options">
                {categories.map((category, index) => (
                    <li
                        key={category.name}
                        className={`filter__category-option ${index === activeIndex ? "active" : ""} `}
                        onClick={() =>
                            handleClick({
                                type: category.type,
                            })
                        }
                    >
                        <img src={category.img} alt="" />
                        <span>{category.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryFilter;
