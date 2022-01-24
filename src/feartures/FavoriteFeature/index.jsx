import React from "react";
//Material Ui
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { useSelector } from "react-redux";

//Scss
import "./styles.scss";
import FavoriteProduct from "./components/FavoriteProduct";
import { closeFavorite } from "../Foodfeature/foodSlice";
import { useDispatch } from "react-redux";
import FoodEmty from "../Foodfeature/components/FoodEmty";
function FavoriteFeature(props) {
    const products = useSelector((state) => state.food.favoriteItem);
    const dispatch = useDispatch();
    return (
        <div className="favorite-feature">
            <div className="favorite-feature__header">
                <div className="favorite-feature__header-left">
                    <ThumbUpOutlinedIcon />
                    YOUR FAVORITE FOOD
                </div>
                <div className="favorite-feature__header-right" onClick={() => dispatch(closeFavorite())}>
                    <ExitToAppOutlinedIcon />
                </div>
            </div>
            {products.length > 0 ? (
                <div className="favorite-feature__product">
                    {products.map((product, index) => (
                        <FavoriteProduct key={index} product={product.foodProduct} />
                    ))}
                </div>
            ) : (
                    <FoodEmty width={'200px'} fz={'17px'} content={'Your wish list is emty!!!'}/>
            )}
        </div>
    );
}

export default FavoriteFeature;
