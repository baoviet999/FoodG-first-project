//react
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router-dom";
//material ui
import {
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
//Snackbar
import { useSnackbar } from "notistack";
//LazyLoading
import { LazyLoadImage } from "react-lazy-load-image-component";
//
import foodApi from "../../../Api/foodApi";
import DetailBanner from "../../../components/DetailBanner";
import LoginDiaLog from "../../../components/LoginDialog";
import CartFeature from "../../CartFeature";
import { addToCart, changeCount, decreaseCount, increateCount, addToFavortite } from "../foodSlice";
import "./DetailPage.scss";


function DetailPage(props) {
    const location = useLocation();
    const currentUrl = location.pathname;
    const newUrl = currentUrl.split("/");
    const type = newUrl[2];
    const params = newUrl[3];
    //call api khi có type và id sản phẩm
    const [foodProduct, setFoodProduct] = useState([]);
    useEffect(() => {
        const fetchFoodId = async () => {
            try {
                const response = await foodApi.getAll(type, { id: params });
                setFoodProduct(response[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFoodId();
    }, [type, params]);

    const [value, setValue] = useState(1);

    const handleChange = (event) => {
        dispatch(changeCount(Number.parseInt(event.target.value)));
        setValue(event.target.value);
    };
    //thay đổi giá trị khi count thay đôi
    const count = useSelector((state) => state.food.count);
    const dispatch = useDispatch();
    const handleDecreateCount = () => {
        if (count > 1) {
            dispatch(decreaseCount());
        }
    };
    useEffect(() => {
        setValue(count);
    }, [count]);

    const math = useRouteMatch();
    const foodId = math.params.foodId;
    const foodidRef = useRef();
    // nếu 2 id sản phẩm khác nhau thì rết lại count
    useEffect(() => {
        foodidRef.current = foodId;
    }, [foodId]);
    if (foodidRef.current !== foodId) {
        dispatch(changeCount(1));
    }
    //Check user login chưa
    const userLogin = useSelector((state) => state.user.current);
    const isLogin = !!userLogin.displayName;
    const [login, setLogin] = useState(false)
    //đưa sản phẩm lên redux
    const { enqueueSnackbar } = useSnackbar();
    const handleAddToCart = () => {
        if (isLogin) {
            const quantity = count;
            const action = addToCart({
                id: foodProduct.id,
                foodProduct,
                quantity,
            });
            dispatch(changeCount(1));
            dispatch(action);
            enqueueSnackbar(`[${foodProduct.name} x ${quantity}] has been added to cart`, {
                variant: "success",
                autoHideDuration: 3000,
            });
        } else {
            setLogin(prev => !prev)
        }
    };
    const handleCancel = (isCancel) => {
        setLogin(isCancel)
    }
    const openCart = useSelector((state) => state.food.openCart);
    //add to favourite
    const handleFavorite = () => {
        dispatch(
            addToFavortite({
                id: foodProduct.id,
                foodProduct,
            })
        );
        enqueueSnackbar(`[${foodProduct.name}] has been added to wish list`, {
            variant: "success",
            autoHideDuration: 3000,
        });
    }


    return (
        <>
            {openCart && <CartFeature />}
            <DetailBanner />
            <div className="detail__wrap container">
                <LoginDiaLog isLogin={login} onCancel={handleCancel} />
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <div className="detail__img">
                                <LazyLoadImage
                                    effect="blur"
                                    src={foodProduct?.img}
                                    className="food-product__img"
                                    alt={foodProduct.name}
                                    width="100%"
                                    height="100%"
                                ></LazyLoadImage>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="detail-content__wrap">
                                <div className="detail-content__name">
                                    <h2>{foodProduct.name}</h2>
                                    <div className="detail-content__rate">
                                        {foodProduct.rate === 5 ? (
                                            <div className="detail-content__rate-row">
                                                <div className="detail-content__star">
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                </div>
                                                <div className="detail-content__perrate">
                                                    Customer Reviews
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="detail-content__rate-row">
                                                <div className="detail-content__star">
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                    <StarRoundedIcon />
                                                    <StarOutlineRoundedIcon />
                                                </div>
                                                <div className="detail-content__perrate">
                                                    Customer Reviews
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="detail-content__price">
                                        <strong>${foodProduct.price * count}</strong>
                                    </div>
                                    <div className="detail-content__category-row">
                                        <div className="detail-content__category">
                                            <span>
                                                Category : <strong>Best Foods</strong>
                                            </span>
                                        </div>
                                        <div className="detail-content__category">
                                            <span>
                                                Country : <strong>{foodProduct.country}</strong>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="detail-content__desc">{foodProduct.dsc}</div>
                                    <div className="detail-content__form">
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">
                                                <span className="detail-content__form-title">
                                                    Choose your options
                                                </span>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="gender1"
                                                value={value}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel
                                                    value={2}
                                                    control={<Radio />}
                                                    label="Buy 2 get 15 percent off"
                                                />
                                                <FormControlLabel
                                                    value={3}
                                                    control={<Radio />}
                                                    label="Buy 3 get 25 percent off"
                                                />
                                                <FormControlLabel
                                                    value={5}
                                                    control={<Radio />}
                                                    label="Buy 5 get 50 percent off"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="detail-content__addtocart">
                                        <div className="detail-content__addtocart-count">
                                            <div
                                                className="detail-content__addtocart-count--btn"
                                                onClick={handleDecreateCount}
                                            >
                                                <IconButton>
                                                    <AddIcon />
                                                </IconButton>
                                            </div>
                                            <span className="detail-content__addtocart-count--num">
                                                {count}
                                            </span>
                                            <div
                                                className="detail-content__addtocart-count--btn"
                                                onClick={() => dispatch(increateCount())}
                                            >
                                                <IconButton>
                                                    <AddIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div
                                            className="detail-content__addtocart--btn"
                                            onClick={handleAddToCart}
                                        >
                                            <Button variant="contained" color="secondary">
                                                <AddShoppingCartIcon />
                                                ADD TO CART
                                            </Button>
                                        </div>
                                        <div className="detail-content__addtocart--like" onClick={handleFavorite}>
                                            <IconButton>
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default DetailPage;
