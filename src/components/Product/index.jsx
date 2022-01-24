//React
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Material ui
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RoomIcon from "@material-ui/icons/Room";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StarIcon from "@material-ui/icons/Star";
//notistack
import { useSnackbar } from "notistack";
//Lazy loading Img
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
//action redux
import { addToCart } from "../../feartures/Foodfeature/foodSlice";
//Context
import { GridContext } from "../../feartures/Foodfeature/GridContext";
//Scss
import "./styles.scss";

Product.propTypes = {
    food: PropTypes.object,
    type: PropTypes.string,
};

function Product({ food = {}, type = "" }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const style = useContext(GridContext);
    
    //sang trang detail
    const handleClick = () => {
        history.push(`/detail${type}/${food.id}`);
    };
    const { enqueueSnackbar } = useSnackbar();
    //Add sản phẩm vào redux
    const handleClickAdd = (e) => {
        e.stopPropagation();
        dispatch(
            addToCart({
                id: food.id,
                foodProduct: food,
                quantity: 1,
            })
        );
        enqueueSnackbar(`[${food.name} x ${1}] has been added to cart`, {
            variant: "success",
            autoHideDuration: 3000,
        });
    };
    return (
        <div className={`food-product ${style.style}`} onClick={handleClick}>
            <div className="food-product__img-wrap">
                <LazyLoadImage
                    effect="blur"
                    src={food.img}
                    className="food-product__img"
                    alt={food.name}
                    width="100%"
                    height="100%"
                ></LazyLoadImage>
                <div className="food-product__rate">
                    <StarIcon />
                    <span>{food.rate}</span>
                </div>
                <div className="food-product__tag">
                    <span>favourite</span>
                </div>
                <div className="food-product__options">
                    <div className="food-product__option food-product__like">
                        <FavoriteBorderOutlinedIcon />
                    </div>
                    <div className="food-product__option food-product__addtocart" onClick={handleClickAdd}>
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
            </div>
            <div className="food-product__detail">
                <div className="food-product__name">{food.name}</div>
                <div className="food-product__desc">{food.dsc}</div>
                <div className="food-product__row">
                    <div className="food-product__country">
                        <RoomIcon />
                        <span>{food.country}</span>
                    </div>
                    <div className="food-product__price">
                        <span>{`$${food.price}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
