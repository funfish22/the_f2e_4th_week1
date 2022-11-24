import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedNumber from "animated-number-react";
import contestData from "./data";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";
import fistLeft from "@/assets/images/contest/fist-left.png";
import fistRight from "@/assets/images/contest/fist-right.png";
import fistMobile from "@/assets/images/contest/fist-mobile.png";
import podium from "@/assets/images/contest/podium.png";

const Contest = () => {
    const [list, setList] = useState([]);
    const pattern = {
        numberWithString: /\d+[\,]\d+/g,
        numberOnly: /\d+/g,
    };
    const formatValue = (_) => {
        const value = Math.floor(_);
        if (value >= 10000) {
            const newValue = value.toString().split("");
            newValue.splice(2, 0, ",");
            return newValue.join("");
        } else if (value >= 1000) {
            const newValue = value.toString().split("");
            newValue.splice(1, 0, ",");
            return newValue.join("");
        } else {
            return value;
        }
    };
    const onSlideChange = (swiper) => {
        if (!!list[swiper.realIndex].data) {
            const newList = JSON.parse(JSON.stringify(list));
            newList[swiper.realIndex].data.prizeValue = 0;
            setList(newList);
            setTimeout(() => {
                setList(contestData);
            }, 100);
        }
    };
    useEffect(() => {
        const list = JSON.parse(JSON.stringify(contestData));
        setList(list);
    }, []);
    return (
        <section className={styles.root}>
            <div className="contestRoot">
                <img className="fistMobile" src={fistMobile} alt="fistMobile" />
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
                        {list.length > 0 && (
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                navigation
                                loop={true}
                                centeredSlides={true}
                                className="awards-swiper"
                                onSlideChange={onSlideChange}
                                breakpoints={{
                                    // when window width is >= 991px
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                }}
                            >
                                {list.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="awards-li">
                                                <div className="awards-li-title">
                                                    <i className="awards-li-title__icon icon-awards"></i>
                                                    <p className="awards-li-title__text">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                <div className="awards-li-dec">
                                                    <img
                                                        src={item.img}
                                                        alt={item.imgName}
                                                        className="awards-li__img"
                                                    />
                                                    <div className="awards-li-info">
                                                        <h3 className="awards-li-info__title">
                                                            {
                                                                item.price
                                                                    .replace(
                                                                        pattern.numberWithString,
                                                                        ""
                                                                    )
                                                                    .split(
                                                                        " "
                                                                    )[0]
                                                            }{" "}
                                                            {item.data && (
                                                                <AnimatedNumber
                                                                    value={
                                                                        item
                                                                            .data
                                                                            .prizeValue
                                                                    }
                                                                    formatValue={
                                                                        formatValue
                                                                    }
                                                                />
                                                            )}
                                                            {
                                                                item.price
                                                                    .replace(
                                                                        pattern.numberWithString,
                                                                        ""
                                                                    )
                                                                    .split(
                                                                        " "
                                                                    )[1]
                                                            }
                                                        </h3>
                                                        <p className="awards-li-info__text">
                                                            {item.unit}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        )}
                    </div>
                    <img src={podium} alt="" className="awards__podium" />
                </div>
            </div>
        </section>
    );
};

export default Contest;
