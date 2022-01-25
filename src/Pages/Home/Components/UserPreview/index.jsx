import React from "react";
import PropTypes from "prop-types";
import { Container, Paper } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import userPreviewData from "../../../../utils/userPreview";
import './styles.scss'
UserPreview.propTypes = {};

function UserPreview(props) {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    return (
        <div className="user-preview">
            <Container>
                <div className="user-preview__container container">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        effect="coverflow"
                    >
                        {userPreviewData.map((preview, index) => (
                            <SwiperSlide key={index}>
                                    <div className="user-preview__item">
                                        <div className="user-preview__item-img">
                                            <img src={preview.img} alt="" />
                                        </div>
                                        <div className="user-preview__item-name">{preview.name}</div>
                                        <div className="user-preview__item-content">{preview.work}</div>
                                        <div className="user-preview__item-detail">
                                            <p>{preview.detail}</p>
                                        </div>
                                    </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
}

export default UserPreview;
