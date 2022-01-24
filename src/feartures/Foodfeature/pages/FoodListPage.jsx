//React
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//QueryString
import queryString from "query-string";
//
import { Container, Grid } from "@material-ui/core";
import foodApi from "../../../Api/foodApi";
import CategoryFilter from "../components/filter/CategoryFilter";
import PriceFilter from "../components/filter/PriceFilter";
import ProductPagination from "../components/filter/ProductPagination";
import SearchProduct from "../components/filter/SearchProduct";
import StarFilter from "../components/filter/StarFilter";
import FoodEmty from "../components/FoodEmty";
import GridSetting from "../components/GridSetting";
import ProductList from "../components/ProductList";
import { changeType } from "../foodSlice";
//Scss
import "./FoodListPage.scss";

function FoodListPage(props) {
    const dispatch = useDispatch();
    
    const [foodList, setFoodList] = useState([]);
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 16,
    });
    const type = useSelector((state) => state.food.type);
    const [loading, setLoading] = useState(true);
    //Call Api by filter and type
    useEffect(() => {
        const fetchFood = async () => {
            setLoading(true);
            try {
                const foodData = await foodApi.getAll(type, filter);
                setFoodList(foodData);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchFood();
    }, [filter, type]);

    //Filter pagination
    const handleChange = (value) => {
        setFilter({
            ...filter,
            _page: value,
        });
    };

    //Filter search when unsearch
    const handleFilterClick = (type) => {
        setFilter({
            ...filter,
            name_like: "",
        });
        dispatch(changeType(type));
    };
    //Đồng bộ queryParam lên Url
    const history = useHistory();
    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filter) + `+${type}`,
        });
    }, [history, filter, type]);
    //Filter Price
    const handlePriceFilter = (filters) => {
        const newFilter = filters.split("+");
        const [lte, gte] = newFilter;
        setFilter({
            ...filter,
            price_lte: lte,
            price_gte: gte,
            name_like: "",
        });
    };
    //Filter Star
    const handleStarClick = (value) => {
        setFilter({
            ...filter,
            rate_like: value,
            name_like: "",
        });
    };
    //Filter Search
    const handleSearch = (value) => {
        setFilter({
            ...filter,
            name_like: value,
        });
        dispatch(changeType("/our-foods"));
    };

    return (
        <div className="food">
            <Container>
                <div className="food__wrap container">
                    <Grid container>
                        <Grid item xs={12} md={2}>
                            <div className="food-filter">
                                <div className="food-filter__title">
                                    <h2>Popular</h2>
                                </div>
                                <CategoryFilter onClickFilter={handleFilterClick} />
                                <div className="food-filter__title">
                                    <h2>Price</h2>
                                </div>
                                <PriceFilter onClickPrice={handlePriceFilter} />
                                <div className="food-filter__title">
                                    <h2>Rate</h2>
                                </div>
                                <StarFilter onStarClick={handleStarClick} />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={10} className="food-product__container">
                            <div className="food-product__feature">
                                <SearchProduct onSearch={handleSearch} />
                                <GridSetting />
                            </div>
                            {foodList.length > 0 ? (
                                <>
                                    <ProductList loading={loading} foodList={foodList} type={type} />
                                    <div className="food-product__pagination">
                                        <ProductPagination onChange={handleChange} active={"best-foods"} />
                                    </div>
                                </>
                            ) : (
                                    <FoodEmty width={'500px'} fz={'25px'} content={ `No product you're looking for`}/>
                            )}
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default FoodListPage;
