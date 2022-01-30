import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
MenuPreview.propTypes = {};
const menu1 = [
    {
        name: "Mild Butter",
        num: "01",
        detail: "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
    },
    {
        name: "Slices Beef",
        num: "02",
        detail: "Get quality Beef Slices at Tesco. Shop in store or online",
    },
    {
        name: "Sleek Onion",
        num: "03",
        detail: "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops",
    },
];
const menu2 = [
    {
        name: "Fresh Bread",
        num: "04",
        detail: "Homemade bread is more nutritious than your store-bought variety",
    },
    {
        name: "Mild Butter",
        num: "05",
        detail: "It is a most often grown as leaf, but sometimes for its stem and seeds",
    },
    {
        name: "Mild Butter",
        num: "06",
        detail: "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
    },
];
function MenuPreview(props) {
    return (
        <div className="menu-preview">
            <div className="menu-preview__left">
                {menu1.map((menu) => (
                    <div key={menu.id} className="menu-preview__item menu-preview__item--left">
                        <h3>{menu.name}</h3>
                        <p>{menu.detail}</p>
                        <span>{menu.num}</span>
                    </div>
                ))}
            </div>
            <div className="menu-preview__right">
                {menu2.map((menu) => (
                    <div key={menu.id} className="menu-preview__item menu-preview__item--right">
                        <h3>{menu.name}</h3>
                        <p>{menu.detail}</p>
                        <span>{menu.num}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuPreview;
