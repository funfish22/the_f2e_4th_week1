import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.scss";
import Introduce from "./child/introduce";
import forwardHouse from "@/assets/images/theme/forward-house.png";
import backHouse from "@/assets/images/theme/back-house.png";
import star1 from "@/assets/images/theme/star1.png";
import star2 from "@/assets/images/theme/star2.png";
import cloud1 from "@/assets/images/theme/cloud1.png";
import cloud2 from "@/assets/images/theme/cloud2.png";
import introduceData from "./child/introduce/data";

const Theme = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useLayoutEffect(() => {
        let speed = 100;
        tl.current = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".theme",
                    start: "top 60%",
                    endTrigger: ".introducRoot",
                    end: "top 100%",
                    scrub: 2
                },
                ease: "strong.inOut",
            })
            .to(q(".house--back"), { y: 0, scale: 1, ease: "power1.in" }, 0)
            .to(q(".house--forward"), { y: 0, scale: 1, ease: "power1.in" }, 0)
    })

    return (
        <section className="theme" ref={el}>
            <div className="container">
                <h1 className="title">
                    年度最強合作，<span className="title__big">三大</span>
                    主題來襲
                </h1>
                <p className="subtitle">
                    各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
                </p>
            </div>
            <div className="houseRoot">
                <img className="house house--back" src={backHouse} alt="" />
                <img
                    className="house house--forward"
                    src={forwardHouse}
                    alt=""
                />
            </div>
            <img
                src={star1}
                alt=""
                className="theme-decorate theme-decorate--star1"
            />
            <img
                src={star2}
                alt=""
                className="theme-decorate theme-decorate--star2"
            />

            <img
                src={cloud1}
                alt=""
                className="theme-decorate theme-decorate--cloud1"
            />
            <img
                src={cloud2}
                alt=""
                className="theme-decorate theme-decorate--cloud2"
            />

            <article className="introducRoot">
                <div className="circleFilter circleFilter--left1"></div>
                <div className="circleFilter circleFilter--left2"></div>
                <div className="circleFilter circleFilter--right1"></div>
                <div className="circleFilter circleFilter--right2"></div>
                <div className="container">
                    {introduceData &&
                        introduceData.map((item, index) => (
                            <Introduce data={item} index={index} key={index} />
                        ))}
                </div>
            </article>
        </section>
    );
};

export default Theme;
