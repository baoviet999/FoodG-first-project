import React from "react";
import "./FlashSceen.scss";
import foodScreen from "../../assets/img/Home/food.gif";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
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
