import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.scss";
import circleMaskOne from "@/assets/images/troubled/troubled-mask1.png";
import circleMaskTwo from "@/assets/images/troubled/troubled-mask2.png";
import troubledData from "./data";

const Troubled = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useLayoutEffect(() => {
        tl.current = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".troubled",
                    start: "top 60%",
                    end: "bottom 100%",
                    scrub: 1,
                },
                ease: "strong.inOut",
            })
            .to(q(".step-list:nth-of-type(1)"), {
                y: 0,
                opacity: 1,
            })
            .to(q(".step-list:nth-of-type(2)"), {
                y: 0,
                opacity: 1,
            })
            .to(q(".step-list:nth-of-type(3)"), {
                y: 0,
                opacity: 1,
            });
    }, []);

    return (
        <section className="troubled" ref={el}>
            <img
                src={circleMaskOne}
                alt=""
                className="circle-mask circle-mask--one"
            />
            <img
                src={circleMaskTwo}
                alt=""
                className="circle-mask circle-mask--two"
            />
            <div className="container">
                <h1 className="title">你是否也有以下困擾?</h1>
                <ul className="step">
                    {troubledData &&
                        troubledData.map((item, index) => (
                            <li className="step-list" key={index}>
                                <div className="step-list-img">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="step-list-img__img"
                                    />
                                </div>
                                <p className="step-list__info">{item.text}</p>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
};

export default Troubled;
