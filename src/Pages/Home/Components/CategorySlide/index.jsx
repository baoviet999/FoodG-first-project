//React
import React from "react";
//Material Ui
import { Container } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import categoryInfo from "../../../../utils/categoryInfo";
//Scss
import "./style.scss";

function CategorySlice(props) {
    return (
        <div className="category container">
            <Container>
                <div className="category__title">What we have?</div>
                <div className="category__menu">Browse food category</div>
                <div className="category__cart">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={2}
                        loop
                        loopFillGroupWithBlank={true}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 4,
                            },
                            960: {
                                slidesPerView: 7,
                            },
                        }}
                        navigation={{
                            prevEl: ".category__btn--left",
                            nextEl: ".category__btn--right",
                        }}
                        grabCursor={true}
                    >
                        {categoryInfo.map(({ img, name }, index) => (
                            <SwiperSlide key={index}>
                                <div className="category__thumbnail">
                                    <img src={img} width={60} alt="" />
                                </div>
                                <div className="category__name">
                                    <span>{name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="category__btn category__btn--left">
                        <DoubleArrowIcon />
                    </div>
                    <div className="category__btn category__btn--right">
                        <DoubleArrowIcon />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategorySlice;
