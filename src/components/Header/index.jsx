//react
//Meterial Icon
import { Avatar, Badge, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import RedeemIcon from "@material-ui/icons/Redeem";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Scss
import "../../App.scss";
import logo from "../../assets/svg/logo.svg";
import { logoutCart, openCart, openFavorite } from "../../feartures/Foodfeature/foodSlice";
import { cartItemCountSelector } from "../../feartures/Foodfeature/selector";
import { logout } from "../../Pages/Login/userSlice";
import "./style.scss";

function Header(props) {
    // const [blur, setBlur] = useState(0);
    // useEffect(() => {
    //     let int = setInterval(blurring, 10);
    //     function blurring() {
    //         setBlur((prev) => {
    //             if (prev > 99) {
    //                 clearInterval(int);
    //                 return 100;
    //             } else {
    //                 document.getElementsByTagName("body")[0].style.filter = `blur(${scale(prev , 0, 100, 30 , 0)}px)`
    //                 // console.log(document.getElementsByTagName('body'))
    //                 return prev + 1;
    //             }
    //         });
    //     }
    //     function scale(number, inMin, inMax, outMin, outMax) {
    //         return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    //     }
    //     return () => clearInterval(int);
    // }, []);

    const dispatch = useDispatch();
    const location = useLocation();
    const headerRef = useRef();

    //Header Scroll top
    useEffect(() => {
        const shrink = () => {
            if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        };
        window.addEventListener("scroll", shrink);
        return () => {
            window.removeEventListener("scroll", shrink);
        };
    }, []);

    //Set Header hide at login page
    const [header, setHideHeader] = useState(true);
    
    useEffect(() => {
        if (location.pathname === "/login") {
            setHideHeader(false);
        } else {
            setHideHeader(true);
        }
    }, [location]);

    //Login Handle
    const userLogin = useSelector((state) => state.user.current);
    const isLogin = !!userLogin.displayName;

    //Logout Handle
    // const { enqueueSnackbar } = useSnackbar();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(logoutCart());
        // enqueueSnackbar(" See You Later ????", {
        //     variant: "success",
        //     autoHideDuration: 3000,
        // });
        toast("See you later????", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: "2000",
        });
    };
    //L??y t???ng s??? l?????ng s???n ph???m t??? createSelector
    const totalItemOnCart = useSelector(cartItemCountSelector);
    const handleOpenCart = () => {
        dispatch(openCart());
    };

    return (
        <>
            {header && (
                <div ref={headerRef} className="navbar">
                    <div className="navbar__wrap container">
                        <div className="navbar--left">
                            <div className="navbar__logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <ul className="navbar__list">
                                <li className="navbar__items">
                                    <Home />
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="navbar__items">
                                    <RestaurantMenuIcon />
                                    <Link to="/order">Order Online</Link>
                                </li>
                                <li className="navbar__items">
                                    <RedeemIcon />
                                    <Link to="/">Store Location</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar--right">
                            <div className="navbar__cart">
                                <Badge
                                    badgeContent={totalItemOnCart}
                                    onClick={handleOpenCart}
                                    color="secondary"
                                >
                                    <ShoppingCartRoundedIcon />
                                </Badge>
                            </div>

                            {isLogin ? (
                                <div className="navbar__user--has-login">
                                    <Avatar src={userLogin.photoURL} />
                                    <Typography component="span">{userLogin.displayName}</Typography>
                                    <div className="navbar__user--logout">
                                        <ul className="navbar__user--logout-options">
                                            <li className="navbar__user--logout-option">
                                                <AssignmentIndIcon />
                                                <span>My account</span>
                                            </li>
                                            <li
                                                className="navbar__user--logout-option"
                                                onClick={() => dispatch(openFavorite())}
                                            >
                                                <LoyaltyIcon />
                                                <span>My wishlist</span>
                                            </li>
                                            <li
                                                className="navbar__user--logout-option"
                                                onClick={handleLogout}
                                            >
                                                <ExitToAppIcon />
                                                <span>Logout</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="navbar__user">
                                    <AccountCircleRoundedIcon />
                                    <Link to="/login">Sign In</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
