import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";
import fistLeft from "@/assets/images/contest/fist-left.png";
import fistRight from "@/assets/images/contest/fist-right.png";
import moneyFirst from "@/assets/images/contest/money-first.png";
import moneySecond from "@/assets/images/contest/money-second.png";
import moneyThird from "@/assets/images/contest/money-third.png";
import podium from "@/assets/images/contest/podium.png";

const Contest = () => {
    return (
        <div className={styles.root}>
            <div className="contestRoot">
                <div className="container">
                    <div className="contestTitle">
                        <img
                            className="fist fist--left"
                            src={fistLeft}
                            alt="fistLeft"
                        />
                        <h1 className="title">
                            區區修煉已經無法滿足了嗎？
                            <br />
                            還有<span className="title__big">比賽</span>等著你！
                        </h1>
                        <img
                            className="fist fist--right"
                            src={fistRight}
                            alt="fistRight"
                        />
                    </div>
                    <div className="contestDec">
                        <p className="contestDec__title">** 評審機制 **</p>
                        <dl className="contestDec-list">
                            <dt className="contestDec-list__title">初選</dt>
                            <dd className="contestDec-list__info">
                                將由六角學院前端、UI 評審進行第一波篩選。
                            </dd>
                        </dl>
                        <dl className="contestDec-list">
                            <dt className="contestDec-list__title">決選</dt>
                            <dd className="contestDec-list__info">
                                由六角學院與贊助廠商討論，進行最後篩選，並於
                                12/30(五) 由評審進行直播公布名單！
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="awards">
                    <div className="container">
                        <h2 className="awards__title">獎項</h2>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation
                            loop={true}
                            centeredSlides={true}
                            className="awards-swiper"
                        >
                            <SwiperSlide>
                                <div className="awards-li">
                                    <div className="awards-li-title">
                                        <i className="awards-li-title__icon icon-awards"></i>
                                        <p className="awards-li-title__text">初選佳作</p>
                                    </div>
                                    <div className="awards-li-dec">
                                        <img src={moneyThird} alt="數位獎狀" className="awards-li__img" />
                                        <div className="awards-li-info">
                                            <h3 className="awards-li-info__title">數位獎狀</h3>
                                            <p className="awards-li-info__text">(共六十位 )</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="awards-li">
                                    <div className="awards-li-title">
                                        <i className="awards-li-title__icon icon-awards"></i>
                                        <p className="awards-li-title__text">個人企業獎</p>
                                    </div>
                                    <div className="awards-li-dec">
                                        <img src={moneySecond} alt="亞軍" className="awards-li__img" />
                                        <div className="awards-li-info">
                                            <h3 className="awards-li-info__title">NTD 3,000/組</h3>
                                            <p className="awards-li-info__text">(共六位 )</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="awards-li">
                                    <div className="awards-li-title">
                                        <i className="awards-li-title__icon icon-awards"></i>
                                        <p className="awards-li-title__text">個人企業獎</p>
                                    </div>
                                    <div className="awards-li-dec">
                                        <img src={moneyFirst} alt="冠軍" className="awards-li__img" />
                                        <div className="awards-li-info">
                                            <h3 className="awards-li-info__title">NTD 10,000/組</h3>
                                            <p className="awards-li-info__text">(共三組 )</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <img src={podium} alt="" className="awards__podium" />
                </div>
            </div>
        </div>
    );
};

export default Contest;
