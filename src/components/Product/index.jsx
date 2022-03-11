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
import { addToCart, addToFavortite } from "../../feartures/Foodfeature/foodSlice";
//Context
import { GridContext } from "../../feartures/Foodfeature/GridContext";
//Scss
import "./styles.scss";
import { useSelector } from "react-redux";
//Toast
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
Product.propTypes = {
    food: PropTypes.object,
    type: PropTypes.string,
};

function Product({ food = {}, type = "" }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const style = useContext(GridContext);
    const userLogin = useSelector((state) => state.user.current);
    const isLogin = !!userLogin.displayName;
    //sang trang detail
    const handleClick = () => {
        history.push(`/detail${type}/${food.id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const { enqueueSnackbar } = useSnackbar();
    //Add sản phẩm vào redux
    const handleClickAdd = (e) => {
        e.stopPropagation();
        if (isLogin) {
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
        } else {
            enqueueSnackbar(`Please SignIn to use this feature!`, {
                variant: "warning",
                autoHideDuration: 3000,
            });
        }
    };
    //add vao favorite
    const handleFavorite = (e) => {
        e.stopPropagation();
        if (isLogin) {
            dispatch(
                addToFavortite({
                    id: food.id,
                    foodProduct: food,
                })
            );
            enqueueSnackbar(`[${food.name}] has been added to wish list`, {
                variant: "success",
                autoHideDuration: 3000,
            });
            // toast("See you later💙", {
            //     position: toast.POSITION.TOP_CENTER,
            //     autoClose: 2000,
            //     type: "info",
            //     theme: "colored",
            //     pauseOnFocusLoss: false,
            //     limit: 3,
            // });
        } else {
            enqueueSnackbar(`Please SignIn to use this feature!`, {
                variant: "warning",
                autoHideDuration: 3000,
            });
        }
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
                />
                <div className="food-product__rate">
                    <StarIcon />
                    <span>{food.rate}</span>
                </div>
                <div className="food-product__tag">
                    <span>favourite</span>
                </div>
                <div className="food-product__options">
                    <div className="food-product__option food-product__like" onClick={handleFavorite}>
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

