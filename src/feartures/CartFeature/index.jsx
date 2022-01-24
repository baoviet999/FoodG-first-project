import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import CartProduct from "./components/CartProduct";
import { cartItemTotalPrice } from "../Foodfeature/selector";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import { useDispatch } from "react-redux";
import { closeCart } from "../Foodfeature/foodSlice";
import emtyCart from "../../assets/svg/Cart/empty-cart.svg";
import { Link } from "react-router-dom";
CartFeature.propTypes = {};

function CartFeature(props) {
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.food.cartItems);
    const totalPrice = useSelector(cartItemTotalPrice);
    return (
        <div className="cart">
            <div className="cart__wrapper">
                <div className="cart__banner">
                    <span>SHOPPING CART</span>
                    <div className="cart__close-icon" onClick={() => dispatch(closeCart())}>
                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                {foods.length > 0 ? (
                    <div className="cart__items">
                        {foods.map((food, index) => (
                            <CartProduct product={food.foodProduct} quantity={food.quantity} />
                        ))}
                    </div>
                ) : (
                    <div className="cart__emty">
                        <img src={emtyCart} width="100%" height="100%" alt="" />
                        <div className="cart__emty-title">No product</div>
                    </div>
                )}
                <div className="cart__pays">
                    <div className="cart__pays-total">
                        <span style={{ color: "#000" }}>Total : </span>
                        <strong style={{ color: "#ff514e" }}>${totalPrice}</strong>
                    </div>
                    <div className="cart__pays-btns">
                        <div className="cart__pays-btn">
                            <Button>
                                <ShoppingCartOutlinedIcon />
                                <span>CheckOut</span>
                            </Button>
                        </div>
                        <div className="cart__pays-btn active" onClick={() => dispatch(closeCart())}>
                            <Link to="/order">
                                <Button>
                                    <StorefrontOutlinedIcon />
                                    <span>BuyMore</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartFeature;
