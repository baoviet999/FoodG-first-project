import React from "react";
import foodScreen from "../../assets/img/Home/food.gif";
import "./FlashSceen.scss";
const FlashScreen = () => {
    return (
        <div className="flashsceen">
            <div className="flashsceen__img">
                <img src={foodScreen} alt="" />
            </div>
        </div>
    );
};

export default FlashScreen;
