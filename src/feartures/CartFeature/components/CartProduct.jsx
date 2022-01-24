import React from "react";
import PropTypes from "prop-types";
import "./CartProduct.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import { IconButton } from "@material-ui/core";
import { removeFromCart } from "../../Foodfeature/foodSlice";
import { useDispatch } from "react-redux";
CartProduct.propTypes = {};

function CartProduct({ product = [] , quantity}) {
    const dispatch = useDispatch();
    return (
        <div className="cart-product__wrapper">
            <div className="cart-product__info">
                <div className="cart-product__img">
                    <LazyLoadImage
                        effect="blur"
                        src={product.img}
                        className="food-product__img"
                        alt={product.name}
                        width="100%"
                        height="100%"
                    ></LazyLoadImage>
                </div>
                <div className="cart-product__detail">
                    <div className="cart-product__name">{product.name}</div>
                    <div className="cart-product__price">${product.price}</div>
                    <div className="cart-product__quantity" style={{ color: "#000" }}>
                        {quantity}
                    </div>
                </div>
            </div>
            <div className="cart-product__delete" onClick={() => dispatch(removeFromCart(product.id))}>
                <IconButton>
                    <DeleteSweepOutlinedIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default CartProduct;
