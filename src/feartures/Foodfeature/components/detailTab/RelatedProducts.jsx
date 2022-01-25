import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./RelatedProducts.scss";
import { Button, Container, Grid } from "@material-ui/core";
import foodApi from "../../../../Api/foodApi";
import Product from "../../../../components/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
RelatedProducts.propTypes = {};

function RelatedProducts(props) {
    const type = useSelector((state) => state.food.type);
    const [rateFood, setRateFood] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await foodApi.getAll("/best-foods", { _limit: 20, _page: 1 });
                setRateFood(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    return (
        <div className="related-products container">
            <div className="related-products__title">
                <span>Best foods</span>
                <strong>Related Products</strong>
            </div>
            <Container>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop
                    loopFillGroupWithBlank={true}
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        },
                        960: {
                            slidesPerView: 5,
                        },
                    }}
                    navigation={{
                        prevEl: ".related__btn--left",
                        nextEl: ".related__btn--right",
                    }}
                    grabCursor={true}
                >
                    {rateFood.map((food, index) => (
                        <SwiperSlide onClick={handleScrollToTop}>
                            <Product food={food} type={type} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="related__btn related__btn--left">
                    <DoubleArrowIcon />
                </div>
                <div className="related__btn related__btn--right">
                    <DoubleArrowIcon />
                </div>
            </Container>
        </div>
    );
}

export default RelatedProducts;
