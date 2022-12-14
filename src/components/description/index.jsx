import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./style.module.scss";
import descriptionData from "./data";

const Description = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useLayoutEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 992px)": function () {
                tl.current = gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: ".description",
                            start: "top 70%",
                            endTrigger: ".contestRoot",
                            end: "top 100%",
                            scrub: !0,
                        },
                    })
                    .to(q(".progressBar"), {
                        width: "100%",
                    });
            },
            "(max-width: 991px)": function () {
                tl.current = gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: ".description",
                            start: "top 60%",
                            scrub: !0,
                        },
                    })
                    .to(q(".progressBar"), {
                        height: "182.05128vw",
                    });
            },
        });
    }, []);

    useLayoutEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 992px)": function() {
                tl.current = gsap.to(q(".description"), {
                    scrollTrigger: {
                        trigger: ".description",
                        start: "top 65%",
                        endTrigger: ".contestRoot",
                        end: "top 0%",
                        scrub: !0,
                        onEnter: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onEnterBack: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onLeaveBack: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.remove(
                                "dec-li--active"
                            ),
                        onLeave: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.remove(
                                "dec-li--active"
                            ),
                    },
                });
                tl.current = gsap.to(q(".description"), {
                    scrollTrigger: {
                        trigger: ".description",
                        start: "top 55%",
                        endTrigger: ".contestRoot",
                        end: "top 0%",
                        scrub: !0,
                        onEnter: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onEnterBack: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onLeaveBack: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.remove(
                                "dec-li--active"
                            ),
                        onLeave: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.remove(
                                "dec-li--active"
                            ),
                    },
                });
                tl.current = gsap.to(q(".description"), {
                    scrollTrigger: {
                        trigger: ".description",
                        start: "top 45%",
                        endTrigger: ".contestRoot",
                        end: "top 0%",
                        scrub: !0,
                        onEnter: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onEnterBack: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onLeaveBack: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.remove(
                                "dec-li--active"
                            ),
                        onLeave: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.remove(
                                "dec-li--active"
                            ),
                    },
                });
            },
            "(max-width: 991px)": function() {
                tl.current = gsap.to(q(".description"), {
                    scrollTrigger: {
                        trigger: ".description",
                        start: "top 65%",
                        endTrigger: ".contestRoot",
                        end: "top 0%",
                        scrub: !0,
                        onEnter: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onEnterBack: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onLeaveBack: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.remove(
                                "dec-li--active"
                            ),
                        onLeave: () =>
                            q(".dec-li:nth-of-type(1)")[0].classList.remove(
                                "dec-li--active"
                            ),
                    },
                });
                tl.current = gsap.to(q(".description"), {
                    scrollTrigger: {
                        trigger: ".description",
                        start: "top 40%",
                        endTrigger: ".contestRoot",
                        end: "top 0%",
                        scrub: !0,
                        onEnter: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onEnterBack: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onLeaveBack: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.remove(
                                "dec-li--active"
                            ),
                        onLeave: () =>
                            q(".dec-li:nth-of-type(2)")[0].classList.remove(
                                "dec-li--active"
                            ),
                    },
                });
                tl.current = gsap.to(q(".description"), {
                    scrollTrigger: {
                        trigger: ".description",
                        start: "top 15%",
                        endTrigger: ".contestRoot",
                        end: "top 0%",
                        scrub: !0,
                        onEnter: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onEnterBack: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.add(
                                "dec-li--active"
                            ),
                        onLeaveBack: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.remove(
                                "dec-li--active"
                            ),
                        onLeave: () =>
                            q(".dec-li:nth-of-type(3)")[0].classList.remove(
                                "dec-li--active"
                            ),
                    },
                });
            }
        })
    }, []);

    return (
        <section className={style.root} ref={el}>
            <div className="description">
                <div className="container">
                    <h1 className="title">????????????</h1>
                    <div className="progressBar"></div>
                    <ul className="dec">
                        {descriptionData &&
                            descriptionData.map((item, index) => (
                                <li className="dec-li" key={index}>
                                    <span className="dec-li__arrow"></span>
                                    <p className="dec-li__title">
                                        {item.title}
                                    </p>
                                    <p className="dec-li__info">{item.info}</p>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="flashing flashing--left">
                    <div className="flashing__line flashing__line--one"></div>
                    <div className="flashing__line flashing__line--two"></div>
                    <div className="flashing__line flashing__line--three"></div>
                </div>
                <div className="flashing flashing--right">
                    <div className="flashing__line flashing__line--one"></div>
                    <div className="flashing__line flashing__line--two"></div>
                    <div className="flashing__line flashing__line--three"></div>
                </div>
            </div>
        </section>
    );
};

export default Description;
