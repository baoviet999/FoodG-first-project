import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useRef } from "react";
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
    const leftRef = useRef()
    const rightRef = useRef()
    useEffect(() => {
        window.addEventListener('scroll', animation)
        animation()
        function animation() {
            const triggerBottom = (window.innerHeight / 5) * 4
            const triggerTop = leftRef.current.getBoundingClientRect().top
            if (triggerTop < triggerBottom) {
                leftRef.current.classList.add('active')
                rightRef.current.classList.add('active')
            } else {
                leftRef.current.classList.remove("active");
                rightRef.current.classList.remove("active");
            }
            
        }
        return () => window.removeEventListener('scroll', animation)
    },[])


    return (
        <div className="menu-preview">
            <div ref={leftRef} className="menu-preview__left">
                {menu1.map((menu, index) => (
                    <div key={index} className="menu-preview__item menu-preview__item--left">
                        <h3>{menu.name}</h3>
                        <p>{menu.detail}</p>
                        <span>{menu.num}</span>
                    </div>
                ))}
            </div>
            <div ref={rightRef} className="menu-preview__right">
                {menu2.map((menu, index) => (
                    <div key={index} className="menu-preview__item menu-preview__item--right">
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
