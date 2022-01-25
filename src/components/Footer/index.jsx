import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PlaceIcon from "@material-ui/icons/Place";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./styles.scss";
Footer.propTypes = {};
const times = [
    {
        day: "Sunday",
        status: "Close",
    },
    {
        day: "Monday",
        status: "8.00-20.00",
    },
    {
        day: "Tuesday",
        status: "10.00-5.00",
    },
    {
        day: "Wednesday",
        status: " 12.00-9.00",
    },
    {
        day: "Friday",
        status: "7.00-1.00",
    },
    {
        day: "Saturday",
        status: "9.00-12.00",
    },
];
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-container container">
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <div className="footer--left">
                            <div className="footer-days__wrapper">
                                {times.map((day, index) => (
                                    <div key={index} className="footer__days">
                                        <div className="footer__day">{day.day}</div>
                                        <LinearScaleIcon />
                                        <div className="footer__day-status">{day.status}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="footer__address-wrap">
                                <h3>Address</h3>
                                <div className="footer__address">
                                    <PhoneInTalkIcon />
                                    +449 888 666 0000
                                </div>
                                <div className="footer__address">
                                    <MailOutlineIcon />
                                    baobaovietviet123@gmail.com
                                </div>
                                <div className="footer__address">
                                    <PlaceIcon />
                                    DaLat, Viet Nam
                                </div>
                                <div className="footer__address-icon">
                                    <YouTubeIcon />
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <InstagramIcon />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="footer__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72694.99242309002!2d108.40156575830369!3d11.88981955189315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112fef20988b1%3A0xad5f228b672bf930!2zRGFsYXQsIEzDom0gxJDhu5NuZywgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1643080511988!5m2!1sen!2sus"
                                style={{ border: 0, width: "100%", height: "100%" }}
                                allowFullScreen
                                loading="lazy"
                                title="map"
                            ></iframe>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
