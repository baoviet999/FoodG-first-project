//React
//Material UI
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
//Swiper
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { slideInfo } from "../../constants/sliderInfo";
//Scss
import "./style.scss";



function BannerSilde(props) {
    SwiperCore.use([Autoplay, Pagination]);
    return (
        <div className="slider__wrap">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                grabCursor={true}
                // autoplay={{ delay: 3000 }}
                loop={true}
                effect="coverflow"
            >
                {slideInfo.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <BannerSlideItem item={item} className={`${isActive ? "active" : ""}`} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
const BannerSlideItem = ({ item, className } = {}) => {
    return (
        <div className={`slider__background ${className}`} style={{ backgroundImage: `url(${item.img})` }}>
            <div className="slider__content">
                <div className="slider__content-wrap">
                    <div className="slider__title">{item.title}</div>
                    <div className="slider__desc">
                        {item.desc} <strong className="slider__subdesc">{item.subDesc}</strong>
                    </div>
                </div>
                <button className="order__btn">
                    <AddShoppingCartIcon />
                    <Link to="/order">ORDER NOW</Link>
                </button>
            </div>
        </div>
    );
};

export default BannerSilde;
